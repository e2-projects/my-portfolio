import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsBlockComponent } from './skills-block/skills-block.component';
import { SkillsGroupComponent } from './skills-block/components/skills-group/skills-group.component';
import { SkillsGroupContentComponent } from './skills-block/components/skills-group-content/skills-group-content.component';
import { NavigationButtonsComponent } from './navigation-block/components/navigation-buttons/navigation-buttons.component';
import { SocialLinksBarComponent } from './navigation-block/components/social-links-bar/social-links-bar.component';
import { HomeBlockComponent } from './home-block/home-block.component';
import { WorkplaceCollapsibleComponent } from './experience-block/components/workplace-collapsible/workplace-collapsible.component';
import { WorkplaceCollapsibleContentComponent } from './experience-block/components/workplace-collapsible-content/workplace-collapsible-content.component';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { ContactFormComponent } from './contacts-block/components/contact-form/contact-form.component';
import { ContactsBlockComponent } from './contacts-block/contacts-block.component';
import { AboutBlockComponent } from './about-block/about-block.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CurvesAnimationComponent } from '../animations/curves-animation/curves-animation.component';
import { NavigationBlockComponent } from './navigation-block/navigation-block.component';
import { ProgressAnimationComponent } from '../animations/progress-animation/progress-animation.component';
import { TakeEveryPipe } from '../pipes/take-every.pipe';
import { AboutTextContainerComponent } from './about-block/components/about-text-container/about-text-container.component';
import { WorkplaceSortPipe } from '../pipes/workplace-sort.pipe';
import { MultilinePipe } from '../pipes/multiline.pipe';

@NgModule({
  declarations: [
    SkillsGroupComponent,
    SkillsGroupContentComponent,
    SkillsBlockComponent,
    NavigationButtonsComponent,
    SocialLinksBarComponent,
    HomeBlockComponent,
    WorkplaceCollapsibleComponent,
    WorkplaceCollapsibleContentComponent,
    ExperienceBlockComponent,
    ContactFormComponent,
    ContactsBlockComponent,
    AboutBlockComponent,
    CurvesAnimationComponent,
    NavigationBlockComponent,
    ProgressAnimationComponent,
    TakeEveryPipe,
    AboutTextContainerComponent,
    WorkplaceSortPipe,
    MultilinePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SkillsGroupComponent,
    SkillsGroupContentComponent,
    SkillsBlockComponent,
    NavigationButtonsComponent,
    SocialLinksBarComponent,
    HomeBlockComponent,
    WorkplaceCollapsibleComponent,
    WorkplaceCollapsibleContentComponent,
    ExperienceBlockComponent,
    ContactFormComponent,
    ContactsBlockComponent,
    AboutBlockComponent,
    CurvesAnimationComponent,
    NavigationBlockComponent,
    ProgressAnimationComponent,
    WorkplaceSortPipe
  ]
})
export class AppTabsModule { }
