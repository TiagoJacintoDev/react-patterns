import { withEditableResource } from "./hoc/withEditableResouce";

export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: +e.target.value })}
        />

        <label>Hair Color:</label>
        <input
          type="text"
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save Changes</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "http://localhost:8080/users/123",
  "user"
);
