import { CardTypesEnum } from '@app/core/enums';

export interface Card {
  id: string;
  title: string;
  type: CardTypesEnum;
  columnId: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
