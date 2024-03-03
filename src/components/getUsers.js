import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/queries";
import React, { useEffect, useState } from "react";

function GetAllUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
      console.log(data.getAllUsers);
    }
  }, [data]);

  console.log(data);

  return (
    <div>
      <table className="user-table" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllUsers;
