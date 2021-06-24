export interface SkillsData {
    skillGroups: SkillGroup[];
}

export interface SkillGroup {
    name: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    yearsOfExperience: string;
}

export const MOCKED_SKILLS_DATA: SkillsData = {
    skillGroups: [
        {
            name: 'Programming language',
            skills: [
                { name: 'Java', yearsOfExperience: '5' },
                { name: 'JavaScript', yearsOfExperience: '3' },
                { name: 'TypeScript', yearsOfExperience: '3' },
                { name: 'Groovy', yearsOfExperience: '2' },
                { name: 'Kotlin', yearsOfExperience: '0.5' },
                { name: 'PHP', yearsOfExperience: '0.5' }
            ]
        },
        {
            name: 'Database',
            skills: [
                { name: 'Oracle', yearsOfExperience: '3' },
                { name: 'PostgreSQL', yearsOfExperience: '2' },
                { name: 'MySQL', yearsOfExperience: '1' },
                { name: 'MongoDB', yearsOfExperience: '0.5' }
            ]
        },
        {
            name: 'Frameworks',
            skills: [
                { name: 'Spring Boot', yearsOfExperience: '4' },
                { name: 'RESTful', yearsOfExperience: '4' },
                { name: 'Angular', yearsOfExperience: '3' },
                { name: 'AngularJS', yearsOfExperience: '1' },
                { name: 'Dojo', yearsOfExperience: '0.5' },
                { name: 'Liquibase', yearsOfExperience: '2' },
                { name: 'FlyWay', yearsOfExperience: '2' },
                { name: 'Hibernate', yearsOfExperience: '4' },
                { name: 'Swagger', yearsOfExperience: '4' },
                { name: 'JavaFX', yearsOfExperience: '1' }
            ]
        },
        {
            name: 'Other',
            skills: [
                { name: 'GitHub', yearsOfExperience: '5' },
                { name: 'Jira', yearsOfExperience: '3' },
                { name: 'Jenkins', yearsOfExperience: '2.5' },
                { name: 'Openshift', yearsOfExperience: '2.5' },
                { name: 'Bitbucket', yearsOfExperience: '1' }
            ]
        }
    ]
}
