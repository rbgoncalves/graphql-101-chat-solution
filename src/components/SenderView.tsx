import { KeyboardEvent, useState } from 'react';
import { Container, Input, InputContainer, SendBtn } from '../styles/SenderView';
import { EmojiShortcuts } from './EmojiShortcuts';

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

  const onEnterClick = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;

    onClickSubmit(input)();
  };

  return (
    <Container>
      <EmojiShortcuts onClick={onClickSubmit} />
      <InputContainer>
        <Input
          value={input}
          onKeyUp={onEnterClick}
          onChange={({ target: { value } }) => setInput(value)}
        />
        <SendBtn onClick={onClickSubmit(input)}>Send 📩</SendBtn>
      </InputContainer>
    </Container>
  );
};
