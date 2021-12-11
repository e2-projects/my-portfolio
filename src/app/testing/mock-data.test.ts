import { AboutDescription } from '../models/data/about.model';

export class Mock {

    public static aboutDescription: AboutDescription[] = [
        {
            title: 'First description',
            content: 'Some first decription\nwith multi lines of\n text.'
        },
        {
            title: 'Second description',
            content: 'Short description text.'
        }
    ];
}
