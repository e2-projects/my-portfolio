import { DataObject } from './data-object';

export interface Workplace extends DataObject {
    companyName: string;
    startDate?: string;
    endDate?: string;
    positions: WorkingPosition[];
}

export interface WorkingPosition extends DataObject {
    name: string;
    projects: string[];
    stack: string;
    startDate: string;
    endDate?: string;
}
