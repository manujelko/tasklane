import { Flex, Heading, Stack } from "@chakra-ui/react";
import CardItem from "./CardItem.tsx";
import type { CardModel } from "../models.ts";

type Props = {
  title: string;
  cardList: CardModel[];
};

function BoardColumn(props: Props) {
  return (
    <>
      <Flex direction="column" align="center" gap="3">
        <Heading>{props.title.toUpperCase()}</Heading>
        <Stack direction="column">
          {props.cardList.map((card) => (
            <CardItem key={card.id} card={card}></CardItem>
          ))}
        </Stack>
      </Flex>
    </>
  );
}

export default BoardColumn;
