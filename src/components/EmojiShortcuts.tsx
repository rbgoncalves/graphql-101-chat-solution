import styled from 'styled-components';
import { EMOJIS } from '../config';
import { Flex } from '../styles/Flex';

const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;

const EmojiBtn = styled.button`
  font-size: 30px;
  line-height: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

//type Props = {};

export const EmojiShortcuts = () => {
  return (
    <Container>
      {EMOJIS.map((emoji) => {
        return <EmojiBtn onClick={(e) => console.log('EMoji clicked', e)}>{emoji}</EmojiBtn>;
      })}
    </Container>
  );
};
