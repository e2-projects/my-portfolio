import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBlockComponent } from './blocks/about-block/about-block.component';
import { ContactsBlockComponent } from './blocks/contacts-block/contacts-block.component';
import { ExperienceBlockComponent } from './blocks/experience-block/experience-block.component';
import { HomeBlockComponent } from './blocks/home-block/home-block.component';
import { MainPageComponent } from './main/main-page/main-page.component';

const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    { path: 'home', component: HomeBlockComponent },
    { path: 'about', component: AboutBlockComponent },
    { path: 'experience', component: ExperienceBlockComponent },
    { path: 'contacts', component: ContactsBlockComponent }
  ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
