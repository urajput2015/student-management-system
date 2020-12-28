import { IdType } from './enums';

export interface IdentificationModel {
    type:IdType;
    idNumber:string;
    issuedBy:string;
    issuedDate:Date;
    expiryDate:Date;
}
