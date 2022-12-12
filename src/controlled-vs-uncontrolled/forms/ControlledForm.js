import { useState, useEffect } from "react";

export function ControlledForm() {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be two or more characters");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form>
      {nameInputError ? <p>{nameInputError}</p> : null}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="hairColor"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
}
