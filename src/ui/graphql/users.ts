import { gql } from "@apollo/client";

export const DISMISS_NAG = gql`
  mutation DismissNag($nag: String!) {
    dismissNag(input: { nag: $nag }) {
      success
    }
  }
`;

export const GET_USER_INFO = gql`
  query GetUser {
    viewer {
      user {
        id
      }
      email
      internal
      nags
      acceptedTOSVersion
      unsubscribedEmailTypes
    }
  }
`;

export const GET_USER_ID = gql`
  query GetUserId {
    viewer {
      user {
        id
      }
    }
  }
`;
