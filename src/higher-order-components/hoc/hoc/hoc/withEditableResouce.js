import { useEffect, useState } from "react";
import axios from "axios";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export function withEditableResource(Component, resourcePath, resourceName) {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      const getData = async () => {
        const response = await axios.get(resourcePath);
        const { data } = response;
        setOriginalData(data);
        setData(data);
      };
      getData();
    }, []);

    const onChange = (changes) => {
      setData((lastData) => ({ ...lastData, ...changes }));
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, {
        [resourceName]: data,
      });
      const { data } = response;
      setOriginalData(data);
      setData(data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
}
