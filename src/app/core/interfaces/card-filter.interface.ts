import { CardTypesEnum } from '../enums';

export interface CardFilter {
  assignees: Array<string>;
  labels: Array<string>;
  types: Array<CardTypesEnum>;
}
