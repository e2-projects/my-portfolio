import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { NavigationBlockComponent } from './blocks/navigation-block/navigation-block.component';
import { HomeBlockComponent } from './blocks/home-block/home-block.component';
import { AboutBlockComponent } from './blocks/about-block/about-block.component';
import { ExperienceBlockComponent } from './blocks/experience-block/experience-block.component';
import { ContactsBlockComponent } from './blocks/contacts-block/contacts-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationBlockComponent,
    HomeBlockComponent,
    AboutBlockComponent,
    ExperienceBlockComponent,
    ContactsBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
