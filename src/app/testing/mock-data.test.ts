import { HomePageData } from '../blocks/home-block/models/home-page.data';
import { AboutDescription } from '../models/data/about.model';
import { WorkingPosition, Workplace } from '../models/data/workplace.model';

export class Mock {

    /*  ABOUT TAB  */
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


    /* WORKING PLACE */
    public static positionInGoogle: WorkingPosition = {
        name: 'Business Analyst',
        projects: [
          'Facebook search panel.',
          'Facebook for business.',
          'Facebook icons.'
        ],
        stack: 'Photoshop, Google Search, Android SDK, Facebook SDK',
        startDate: '2015/11/15',
        endDate: '2016/02/10'
    };

    public static workplaceGoogle: Workplace = {
        companyName: 'Google',
        positions: [ Mock.positionInGoogle ]
    };

    public static positionInAwesomeBank: WorkingPosition = {
        name: 'Software engineer',
        projects: [
          'Bank main frame application'
        ],
        stack: 'COBOL, MS Servers',
        startDate: '2012/11/15',
        endDate: '2013/02/10'
    };

    public static workplaceAwesomeBank: Workplace = {
        companyName: 'Awesome Bank',
        positions: [ Mock.positionInAwesomeBank ]
    };

    public static positionInFacebook1: WorkingPosition = {
        name: 'Business Analyst',
        projects: [
          'Facebook search panel.',
          'Facebook for business.',
          'Facebook icons.'
        ],
        stack: 'Photoshop, Google Search, Android SDK, Facebook SDK',
        startDate: '2017/01/10',
        endDate: '2018/06/23'
    };

    public static positionInFacebook2: WorkingPosition = {
        name: 'Solution Developer',
        projects: [
          'Sushi restaurant mobile app. Mobile app is used by user who wants to pre-order food'
        ],
        stack: 'Java, Kotlin, Android SDK, C++',
        startDate: '2019/05/15'
    };

    public static workplaceFacebook: Workplace = {
        companyName: 'Facebook',
        positions: [
            Mock.positionInFacebook1,
            Mock.positionInFacebook2
        ]
    };

    public static workplaces: Workplace[] = [
        Mock.workplaceGoogle,
        Mock.workplaceAwesomeBank,
        Mock.workplaceFacebook
    ];

    public static homeTabData: HomePageData = {
        fullName: 'John Wick',
        address: 'New York, US',
        company: {
            name: 'Russian crime syndicate',
            url: ''
        },
        description: 'Baba Yaga',
        position: 'Contract Killer'
    }
    
}
