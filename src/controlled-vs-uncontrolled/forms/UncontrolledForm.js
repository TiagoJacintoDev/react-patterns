import { useRef } from "react";

export function UncontrolledForm() {
  const nameInput = useRef();
  const ageInput = useRef();
  const hairColorInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="numer" placeholder="Age" ref={ageInput} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <button>Submit</button>
    </form>
  );
}
