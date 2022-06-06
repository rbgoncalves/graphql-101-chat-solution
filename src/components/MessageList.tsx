import styled from 'styled-components';
import { Message } from '../App';

const Container = styled.div`
  border: 1px solid lightgrey;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  flex: 5;
  padding: 20px;
`;

const Sender = styled.span`
  color: red;
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
`;

const MessageItem = ({ msg }: { msg: Message }) => {
  return (
    <p>
      <Sender>{msg.from}:</Sender>
      {msg.text}
    </p>
  );
};

type Props = {
  msgs?: Message[];
};

export const MessageList = ({ msgs }: Props) => {
  return (
    <Container>
      {msgs?.map((msg) => (
        <MessageItem key={msg.id} msg={msg} />
      ))}
    </Container>
  );
};
