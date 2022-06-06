import styled from 'styled-components';
import { Flex } from './Flex';

export const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 8px;
`;

export const EmojiBtn = styled.button`
  font-size: 30px;
  line-height: 25px;
  background: none;
  border: none;
  cursor: pointer;
`;
