import { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/mutation";
import { LOAD_USERS } from "../GraphQL/queries";
import { useMutation } from "@apollo/client";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [addUser, { error }] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [{ query: LOAD_USERS }], // Refetch the query to get all users after adding a new user
  });
  const createUser = () => {
    addUser({ variables: { name: name, email: email } });
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-input"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button className="form-button" onClick={createUser}>
        Create User
      </button>
    </div>
  );
}

export default Form;
