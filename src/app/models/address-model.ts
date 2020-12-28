import { AddressType } from './enums';

export interface AddressModel {
    type:AddressType
    line1:string;
    line2?:string;
    line3?:string;
    city:string;
    state:string;
    country:string
    zip:string
}
