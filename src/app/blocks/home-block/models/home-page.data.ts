export interface HomePageData {
    personName: string;
    city: string;
    country: string;
    companyLink: string;
    companyName: string;
    description: string;
}

export const MOCKED_HOME_PAGE_DATA: HomePageData = {
    personName: 'Name',
    city: 'City',
    country: 'Country',
    companyLink: 'http://google.com',
    companyName: 'My Super Company',
    description: 'People know me as a person who is attentioned to the details, devotion, passionate, fast learning and creative solutions developer.'
}
