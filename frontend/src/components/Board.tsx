import { Button, Flex } from "@chakra-ui/react";
import type { ColumnModel } from "../models";
import BoardColumn from "./BoardColumn";
import { useState } from "react";
import type { CardModel } from "../models";
import {
  PENDING_COLUMN_ID,
  PENDING_COLUMN_NAME,
  IN_PROGRESS_COLUMN_ID,
  IN_PROGRESS_COLUMN_NAME,
  COMPLETED_COLUMN_ID,
  COMPLETED_COLUMN_NAME,
} from "../models";

const initialColumns: ColumnModel[] = [
  { id: PENDING_COLUMN_ID, title: PENDING_COLUMN_NAME, cards: [] },
  { id: IN_PROGRESS_COLUMN_ID, title: IN_PROGRESS_COLUMN_NAME, cards: [] },
  { id: COMPLETED_COLUMN_ID, title: COMPLETED_COLUMN_NAME, cards: [] },
];

function Board() {
  const [columns, setColumns] = useState<ColumnModel[]>(initialColumns);

  const addCard = (columnId: number, card: CardModel) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, cards: [...col.cards, card] } : col
      )
    );
  };

  const handleAddTask = () => {
    const newCard: CardModel = {
      id: Date.now(),
      title: "New Task",
      description: "This is a new task",
    };

    addCard(PENDING_COLUMN_ID, newCard);
  };

  return (
    <>
      <Flex direction="column" align="flex-end" gap="3">
        <Flex gap="4" direction="row">
          {columns.map((column) => (
            <BoardColumn
              key={column.id}
              title={column.title}
              cardList={column.cards}
            />
          ))}
        </Flex>
        <Button onClick={handleAddTask} maxW="100px">
          Add task
        </Button>
      </Flex>
    </>
  );
}

export default Board;
