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

export const PENDING_COLUMN_ID = 1;
export const PENDING_COLUMN_NAME = "pending";

export const IN_PROGRESS_COLUMN_ID = 2;
export const IN_PROGRESS_COLUMN_NAME = "in progress";

export const COMPLETED_COLUMN_ID = 3;
export const COMPLETED_COLUMN_NAME = "completed";
