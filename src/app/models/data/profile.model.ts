import { DataObject } from './data-object';

export interface Profile extends DataObject {
    name: string;
    surname: string;
    position: string;
}
