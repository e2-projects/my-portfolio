export interface WorkExperience {
    companyName: string;
    position: string;
    projects: string[];
    stack: string;
}

export const MOCKED_WORK_EXPERIENCES: WorkExperience[] = [
    {
        companyName: 'Google',
        position: 'Developer',
        projects: ['Google Cloud. Developing Google Cloud products for enterprice users.'],
        stack: 'Java, GO, Typescript, HTML, css, PHP, Ruby, Docker, OpenShift'
    },
    {
        companyName: 'Facebook',
        position: 'Business Analyst',
        projects: [
            'Facebook search panel.',
            'Facebook for business.',
            'Facebook icons.'
        ],
        stack: 'Photoshop, Google Search, Android SDK, Facebook SDK'
    },
    {
        companyName: 'Sushi restaurant',
        position: 'Solution Developer',
        projects: [
            'Sushi restaurant mobile app. Mobile app is used by user who wants to pre-order food'
        ],
        stack: 'Java, Kotlin, Android SDK, C++'
    },
    {
        companyName: 'Awesome Bank',
        position: 'Software engineer',
        projects: [
            'Bank main frame application'
        ],
        stack: 'COBOL, MS Servers'
    }
];
