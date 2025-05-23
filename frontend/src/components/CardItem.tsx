import { Button, Card } from "@chakra-ui/react";
import type { CardModel } from "../models";

type Props = {
  card: CardModel;
};

export function CardItem(props: Props) {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Card.Title mt="2">{props.card.title}</Card.Title>
        <Card.Description>{props.card.description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
      </Card.Footer>
    </Card.Root>
  );
}
