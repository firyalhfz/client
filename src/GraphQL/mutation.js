import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation addUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      memberNo
    }
  }
`;
