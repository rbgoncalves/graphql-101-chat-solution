import styled from "styled-components";
import { Flex } from "../styles/Flex";
import { SenderView } from "./SenderView";

const Container = styled(Flex)`
  background-image: url(https://www.jornaldeleiria.pt/uploads/h/o/m/romeu-paz-xgeeks-principal-leiria-rg-2020-1-770x470-homt.jpg);
  background-size: cover;
  flex-direction: column;
  max-width: 800px;
  min-width: 390px;
  min-height: 500px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 17px 10px 25px 0px #ff0000;
  margin: 0 auto;
`;

const TranslucidView = styled.div`
  border: 1px solid lightgrey;
  background-color: rgba(255,255,255,0.4);
  border-radius: 10px;
`;

const MessageList = styled(TranslucidView)`
  flex: 5;
`;

export const ChatRoom = () => {
  return (
    <Container>
      <MessageList></MessageList>
      <SenderView></SenderView>
    </Container>
    
  )
}
