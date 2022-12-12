// import { SplitScreen } from "./SplitScreen";

import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { NumberedList } from "./NumberedList";
import { Modal } from "./Modal";

// const LeftHandComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
// };

// const RightHandComponent = ({ message }) => {
//   return <p style={{ backgroundColor: "red" }}>{message}</p>;
// };

// export function App() {
//   return (
//     <SplitScreen leftWeight={1} rightWeight={3}>
//       <LeftHandComponent name="John" />
//       <RightHandComponent message="Hello" />
//     </SplitScreen>
//   );
// }

const people = [
  {
    name: "Tiago",
    age: 20,
    hairColor: "black",
    hobbies: ["running", "watching series", "gaming", "programming"],
  },
  {
    name: "Albano",
    age: 67,
    hairColor: "bold",
    hobbies: ["running,cycling"],
  },
];

const products = [
  {
    name: "TV",
    price: "$300",
    description: "Huge LCD screen",
    rating: 4.5,
  },
  {
    name: "Headphones",
    price: "$30",
    description: "Good for hearing music",
    rating: 4.9,
  },
  {
    name: "Keyboard",
    price: "$100",
    description: "Mechanical",
    rating: 3.5,
  },
];

export function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>

      {/* <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      /> */}
    </>
  );
}
