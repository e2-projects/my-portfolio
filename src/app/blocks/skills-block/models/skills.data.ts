export interface SkillGroup {
    name: string;
    position: number;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: string;
}
