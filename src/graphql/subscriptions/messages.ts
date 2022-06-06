import { gql } from '@apollo/client';

export const SUBSCRIBE = gql`
  subscription NewUpdate($username: ID!) {
    onNewMessage(username: $username) {
      id
      from
      text
    }
  }
`;
