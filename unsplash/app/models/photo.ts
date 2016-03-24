import {User} from './user';

export interface Photo {
  id: string;
  color: string;
  likes: number;
  liked: boolean;
  user: User;
  thumbnail: string;
  regular: string;
  full: string;
  height: number;
  width: number;
}
