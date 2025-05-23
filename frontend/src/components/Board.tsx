import { Button, Flex } from "@chakra-ui/react";
import type { ColumnModel } from "../models";
import { BoardColumn } from "./BoardColumn";

type Props = {
  columns: ColumnModel[];
};

export function Board(props: Props) {
  return (
    <>
      <Flex direction="column" align="flex-end" gap="3">
        <Flex gap="4" direction="row">
          {props.columns.map((column) => (
            <BoardColumn
              key={column.id}
              title={column.title}
              cardList={column.cards}
            />
          ))}
        </Flex>
        <Button maxW="100px">Add task</Button>
      </Flex>
    </>
  );
}
