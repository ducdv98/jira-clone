import { CardTypesEnum } from '@app/core/enums';

export interface Card {
  id: string;
  ordinalId: number;
  title: string;
  type: CardTypesEnum;
  columnId: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
