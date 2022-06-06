import './App.css';
import { gql, useQuery, useSubscription } from '@apollo/client';
import { ChatRoom } from './components/ChatRoom';
import { Header } from './components/Header';
import { Background } from './styles/Background';
import { useState } from 'react';

const GET_MESSAGES = gql`
  query {
    messages {
      id
      from
      text
    }
  }
`;

const SUBSCRIBE = gql`
  subscription NewUpdate($username: ID!) {
    onNewMessage(username: $username) {
      id
      from
      text
    }
  }
`;

type Message = {
  id: string;
  from: string;
  text: string;
};

const getUsername = () => {
  let result = null;
  while (!result) {
    result = prompt('Insert you username here:');
    if (!result) alert('username is mandatory!');
  }
  return result;
};

function App() {
  const [username] = useState<string | undefined>(getUsername());

  const { loading, error, data } = useQuery<{ messages: Message[] }>(GET_MESSAGES);

  const {
    data: sdata,
    error: serror,
    loading: sloading
  } = useSubscription(SUBSCRIBE, {
    onSubscriptionData: (d) => {
      console.log('subs: ', d);
    },
    variables: { username: username },
    skip: !username
  });

  console.log({ sdata, serror, sloading });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Background>
      <Header />
      <ChatRoom />
    </Background>
  );
}

export default App;
