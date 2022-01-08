import { User } from './user.interface';

export interface Comment {
  id: string;
  uid: string;
  content: string;
  cardId: string;
  createdAt: string;
}

export interface CommentWithUser {
  id: string;
  user?: User;
  content: string;
  cardId: string;
  createdAt: string;
}

export interface AddCommentModel {
  content: string;
  uid: string;
}
