import { useEffect, useState } from "react";
import axios from "axios";

export function withUser(Component, userId) {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const getUser = async () => {
        const response = await axios.get(
          `http://localhost:8080/users/${userId}`
        );
        setUser(response.data);
      };
      getUser();
    }, []);

    return <Component {...props} user={user} />;
  };
}
