import { UserModel } from './user-model';
import { PostType } from './enums';
import { ImageModel } from './image.model';
import { VideoModel } from './video.model';

export interface UserPostModel {
    id: string,
    title: string;
    description: string;
    type: PostType
    postedDate: Date,
    postedBy: UserModel,
    updateDate?: Date,
    images?:ImageModel[],
    videos?:VideoModel[]
}
