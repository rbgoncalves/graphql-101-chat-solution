import styled from "styled-components";
import { Flex } from "../styles/Flex";
import { EmojiShortcuts } from "./EmojiShortcuts";

const Container = styled.div`
  flex: 1;
  display: inline-grid;
`;

const Input = styled.textarea`
  font-size: 18px;
  flex: 1;
  color: white;
  padding: 12px;
  border: none;
  border: 1px solid lightgrey;
  background-color: rgba(255,255,255,0.4);
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
  background-color: rgba(30,30,30,0.4);
  border-radius: 10px;
  max-width: 60px;
`;

const InputContainer = styled(Flex)`
  flex-direction: row;
`;


export const SenderView = () => {
  return (
    <Container>
      <EmojiShortcuts />
      <InputContainer>
        <Input/>
        <SendBtn>Send 📩</SendBtn>
      </InputContainer>
    </Container>
  )
}
