import { DataObject } from './data-object';

export interface SocialLinks extends DataObject {
    linkedinUrl: string;
    facebookUrl: string;
    overflowUrl: string;
    githubUrl: string;
}
