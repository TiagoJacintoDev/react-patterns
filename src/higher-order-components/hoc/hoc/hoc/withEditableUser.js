import { useEffect, useState } from "react";
import axios from "axios";

export function withEditableUser(Component, userId) {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const getUser = async () => {
        const response = await axios.get(
          `http://localhost:8080/users/${userId}`
        );
        const { data } = response;
        setOriginalUser(data);
        setUser(data);
      };
      getUser();
    }, []);

    const onChangeUser = (changes) => {
      setUser((lastUser) => ({ ...lastUser, ...changes }));
    };

    const onSaveUser = async () => {
      const response = await axios.post(
        `http://localhost:8080/users/${userId}`,
        {
          user,
        }
      );
      const { data } = response;
      setOriginalUser(data);
      setUser(data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
}
