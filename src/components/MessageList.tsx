import { useEffect, useRef } from 'react';
import { Message } from '../App';
import useRandUsername from '../hooks/useRandUsername';
import { Container, Sender } from '../styles/MessageList';

type Props = {
  msgs?: Message[];
};

const MessageItem = ({ msg, ownUser }: { msg: Message; ownUser: boolean }) => {
  return (
    <p style={{ textAlign: ownUser ? 'right' : 'left' }}>
      <Sender>{msg.from}:</Sender>
      {msg.text}
    </p>
  );
};

export const MessageList = ({ msgs = [] }: Props) => {
  const username = useRandUsername();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight
      });
    }
  }, [chatRef]);

  return (
    <Container ref={chatRef}>
      {msgs.map((msg, index) => (
        <MessageItem key={msg.id + index} msg={msg} ownUser={username === msg.from} />
      ))}
    </Container>
  );
};
