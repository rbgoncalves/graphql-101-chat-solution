import './App.css';
import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';
import { ChatRoom } from './components/ChatRoom';
import { Header } from './components/Header';
import { Background } from './styles/Background';
import { MessageList } from './components/MessageList';
import { SenderView } from './components/SenderView';
import useRandUsername from './hooks/useRandUsername';

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

const SEND_MSG = gql`
  mutation SendMessage($input: NewMessage!) {
    sendMessage(input: $input)
  }
`;

export type Message = {
  id: string;
  from: string;
  text: string;
};

function App() {
  // This simplifies the auth complexity out of the demo
  const username = useRandUsername();

  const { loading, error, data } = useQuery<{ messages: Message[] }>(GET_MESSAGES);
  const [sendMessageMutation] = useMutation(SEND_MSG);

  useSubscription(SUBSCRIBE, {
    onSubscriptionData: ({ client: { cache }, subscriptionData }) => {
      const incomingMsg = {
        ...subscriptionData.data.onNewMessage,
        __typename: 'ChatMessage'
      };

      cache.modify({
        fields: {
          messages(oldMsgs = []) {
            return [...oldMsgs, incomingMsg];
          }
        }
      });
    },
    variables: { username: username },
    skip: !username
  });

  const sendMessage = (text: string) => {
    sendMessageMutation({
      variables: {
        input: { from: username, text }
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Background>
      <Header />
      <ChatRoom>
        <MessageList msgs={data?.messages} />
        <SenderView send={sendMessage} />
      </ChatRoom>
    </Background>
  );
}

export default App;
