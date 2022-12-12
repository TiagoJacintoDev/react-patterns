import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      setUser(response.data);
    };
    getUser();
  }, [userId]);

  return user;
};
