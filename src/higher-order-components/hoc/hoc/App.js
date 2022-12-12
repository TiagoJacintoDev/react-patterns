import { printProps } from "./hoc/printProps";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./withUser";

// const UserInfoWithLoader = withUser(UserInfo, "234");

export function App() {
  return <UserInfoForm />;
}
