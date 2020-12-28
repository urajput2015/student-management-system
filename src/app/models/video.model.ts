import { UserModel } from './user-model';

export interface VideoModel {
    id:string;
    url:string;
    uploadedDate:Date;
    uploadedBy:UserModel
}
