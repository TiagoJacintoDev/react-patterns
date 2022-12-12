import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

export function App() {
  return (
    <>
      <UserInfo userId="123" />
      <UserInfo userId="234" />
      <UserInfo userId="345" />
      <ProductInfo productId="1234" />
    </>
  );
}
