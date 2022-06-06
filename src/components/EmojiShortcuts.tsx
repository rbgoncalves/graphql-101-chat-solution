import { EMOJIS } from '../config';
import { Container, EmojiBtn } from '../styles/EmojiShortcuts';

type Props = {
  onClick: (text: string) => () => void;
};

export const EmojiShortcuts = ({ onClick }: Props) => {
  return (
    <Container>
      {EMOJIS.map((emoji) => {
        return (
          <EmojiBtn key={emoji} onClick={onClick(emoji)}>
            {emoji}
          </EmojiBtn>
        );
      })}
    </Container>
  );
};
