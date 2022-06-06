import styled from 'styled-components';
import { EMOJIS } from '../config';
import { Flex } from '../styles/Flex';

const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const EmojiBtn = styled.button`
  font-size: 30px;
  line-height: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

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
