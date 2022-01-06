import { CardTypesEnum } from '@app/core/enums';

export interface Card {
  id: string;
  ordinalId: number;
  title: string;
  type: CardTypesEnum;
  columnId: string;
  priority: string;
  assigneeId: string;
  reporterId: string;
  labels: Array<string>;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface PartialCard {
  id: string;
  ordinalId?: number;
  title?: string;
  type?: CardTypesEnum;
  columnId?: string;
  description?: string;
  priority?: string;
  assigneeId?: string;
  reporterId?: string;
  labels?: Array<string>;
}
