import styled from 'styled-components';
import { Flex } from './Flex';

export const Container = styled.div`
  flex: 1;
  display: inline-grid;
`;

export const Input = styled.textarea`
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

export const SendBtn = styled.button`
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

export const InputContainer = styled(Flex)`
  flex-direction: row;
`;
