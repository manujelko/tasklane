export type CardModel = {
  id: number;
  title: string;
  description: string;
};

export type ColumnModel = {
  id: number;
  title: string;
  cards: CardModel[];
};
