import { gql } from '@apollo/client';

export const SEND_MSG = gql`
  mutation SendMessage($input: NewMessage!) {
    sendMessage(input: $input)
  }
`;
