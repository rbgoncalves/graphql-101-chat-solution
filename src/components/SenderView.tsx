import { useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../styles/Flex';
import { EmojiShortcuts } from './EmojiShortcuts';

const Container = styled.div`
  flex: 1;
  display: inline-grid;
`;

const Input = styled.textarea`
  font-size: 18px;
  flex: 1;
  color: black;
  padding: 12px;
  border: none;
  border: 1px solid lightgrey;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  margin-right: 10px;
`;

const SendBtn = styled.button`
  border: 1px solid lightgrey;
  color: white;
  font-size: 20px;
  font-weight: 700;
  background-color: rgba(30, 30, 30, 0.4);
  border-radius: 10px;
  max-width: 60px;
  &:hover {
    cursor: pointer;
  }
`;

const InputContainer = styled(Flex)`
  flex-direction: row;
`;

type Props = {
  send: (text: string) => void;
};

export const SenderView = ({ send }: Props) => {
  const [input, setInput] = useState('');

  const onClickSubmit = (text: string) => () => {
    if (text.length === 0) return;

    send(text);

    setInput('');
  };
  return (
    <Container>
      <EmojiShortcuts onClick={onClickSubmit} />
      <InputContainer>
        <Input value={input} onChange={({ target: { value } }) => setInput(value)} />
        <SendBtn onClick={onClickSubmit(input)}>Send 📩</SendBtn>
      </InputContainer>
    </Container>
  );
};
