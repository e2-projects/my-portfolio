import { Pipe, PipeTransform } from '@angular/core';
import { Workplace } from '../blocks/experience-block/experience-block.component';

@Pipe({
  name: 'workplaceSort'
})
export class WorkplaceSortPipe implements PipeTransform {

  private PRESENT = 'Present';

  transform(workplaces: Workplace[]): Workplace[] {
    return this.sort(workplaces);
  }

  private sort(workplaces: Workplace[]): Workplace[] {
    workplaces.forEach(company => this.sortCompanyPositions(company));
    workplaces.sort((company1, company2) => {
      return company1.endDate !== 'Present' ? new Date(company1.endDate).getMilliseconds() - new Date(company2.endDate).getMilliseconds() : -1;
    });
    return workplaces;
  }

  private sortCompanyPositions(company: Workplace): void {
    const position = company.positions.find(position => position.endDate === undefined || position.endDate === null || position.endDate.trim() === '');
      if (position) {
        const index = company.positions.findIndex(p => p === position);
        if (index > -1) {
          company.positions.splice(index, 1);
        }
        position.endDate = this.PRESENT;
      }
      company.positions.sort((position1, position2) => {
        return this.getDateInMilis(position1.endDate) - this.getDateInMilis(position2.endDate);
      });
      
      if (position) {
        company.positions.push(position);
      }

      company.positions.reverse();
      company.endDate = company.positions[0].endDate;
  }

  private getDateInMilis(date: string) {
    return new Date(date).getMilliseconds();
  }

}
