export interface SkillsData {
    skillGroups: SkillGroup[];
}

export interface SkillGroup {
    name: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    experience: string;
}

export const MOCKED_SKILLS_DATA: SkillsData = {
    skillGroups: [
        {
            name: 'Programming language',
            skills: [
                { name: 'Java', experience: '6' },
                { name: 'JavaScript', experience: '4' },
                { name: 'TypeScript', experience: '5' },
                { name: 'Groovy', experience: '4' },
                { name: 'Kotlin', experience: '2' },
                { name: 'PHP', experience: '1' }
            ]
        },
        {
            name: 'Database',
            skills: [
                { name: 'Oracle', experience: '5' },
                { name: 'PostgreSQL', experience: '4' },
                { name: 'MySQL', experience: '2' },
                { name: 'MongoDB', experience: '2' }
            ]
        },
        {
            name: 'Frameworks',
            skills: [
                { name: 'Spring Boot', experience: '5' },
                { name: 'RESTful', experience: '5' },
                { name: 'Angular', experience: '5' },
                { name: 'AngularJS', experience: '2' },
                { name: 'Dojo', experience: '1' },
                { name: 'Liquibase', experience: '4' },
                { name: 'FlyWay', experience: '3' },
                { name: 'Hibernate', experience: '4' },
                { name: 'Swagger', experience: '4' },
                { name: 'JavaFX', experience: '1' }
            ]
        },
        {
            name: 'Other',
            skills: [
                { name: 'GitHub', experience: '5' },
                { name: 'Jira', experience: '4' },
                { name: 'Jenkins', experience: '3' },
                { name: 'Openshift', experience: '3' },
                { name: 'Bitbucket', experience: '1' }
            ]
        }
    ]
}
