import type { CardModel, ColumnModel } from "./models.ts";
import { Board } from "./components/Board.tsx";
import { Center } from "@chakra-ui/react";

const cards: CardModel[] = [
  {
    id: 1,
    title: "dummy title",
    description:
      "This is the card body. Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Curabitur nec odio vel dui euismod fermentum.\nCurabitur nec odio vel dui euismod fermentum.",
  },
  {
    id: 2,
    title: "dummy title",
    description:
      "This is the card body. Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Curabitur nec odio vel dui euismod fermentum.\nCurabitur nec odio vel dui euismod fermentum.",
  },
  {
    id: 3,
    title: "dummy title",
    description:
      "This is the card body. Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Curabitur nec odio vel dui euismod fermentum.\nCurabitur nec odio vel dui euismod fermentum.",
  },
];

const columns: ColumnModel[] = [
  { id: 1, title: "pending", cards: cards },
  { id: 2, title: "in progress", cards: cards },
  { id: 3, title: "completed", cards: cards },
];

function App() {
  return (
    <Center marginTop="5">
      <Board columns={columns} />
    </Center>
  );
}

export default App;
