import { UserModel } from './user-model';

export interface UserPostCommentModel {
    id:string;
    description:string;
    commentedBy:UserModel;
    commentedDate:Date
}
