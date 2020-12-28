import { PhoneType } from './enums';

export interface PhoneModel {
    type:PhoneType,
    countryCode?:string;
    lineNumber:string
}
