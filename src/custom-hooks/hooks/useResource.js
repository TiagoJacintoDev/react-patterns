import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    };
    getUser();
  }, [resourceUrl]);

  return resource;
};
