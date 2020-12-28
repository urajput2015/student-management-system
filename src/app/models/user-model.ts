import { NameModel } from './name-model';
import { AddressModel } from './address-model';
import { PhoneModel } from './phone-model';
import { IdentificationModel } from './identification-model';

export interface UserModel {
    id:string;
    userId?:string;
    password?:string;
    name:NameModel;
    dateOfBirth?:Date;
    emailIds?:string[];
    addresses:AddressModel[];
    phones:PhoneModel[];
    identifications:IdentificationModel[]

}

