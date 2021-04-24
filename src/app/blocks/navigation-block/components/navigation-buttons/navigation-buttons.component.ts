import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef,
          OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationButtonsComponent implements OnInit, AfterViewInit {

  @ViewChild('homeBtn')
  homeButton: ElementRef;
  @ViewChild('aboutBtn')
  aboutButton: ElementRef;
  @ViewChild('experienceBtn')
  experienceButton: ElementRef;
  @ViewChild('contatcsBtn')
  contactsButton: ElementRef;

  constructor(private router: Router,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.router.navigate(['/home']);
  }

  ngAfterViewInit(): void {
    this.highlightHomeButton();
  }

  toHomePage(): void {
    this.router.navigate(['/home']);
    this.highlightHomeButton();
  }

  toAboutPage(): void {
    this.router.navigate(['/about']);
    this.highlightAboutButton();
  }

  toExperiencePage(): void {
    this.router.navigate(['/experience']);
    this.highlightExperienceButton();
  }

  toContactsPage(): void {
    this.router.navigate(['/contacts']);
    this.highlightContactsButton();
  }

  private highlightHomeButton(): void {
    this.renderer.addClass(this.homeButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.aboutButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.experienceButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.contactsButton.nativeElement, 'active-nav-link');
  }

  private highlightAboutButton(): void {
    this.renderer.addClass(this.aboutButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.homeButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.experienceButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.contactsButton.nativeElement, 'active-nav-link');
  }

  private highlightExperienceButton(): void {
    this.renderer.addClass(this.experienceButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.homeButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.aboutButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.contactsButton.nativeElement, 'active-nav-link');
  }

  private highlightContactsButton(): void {
    this.renderer.addClass(this.contactsButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.homeButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.aboutButton.nativeElement, 'active-nav-link');
    this.renderer.removeClass(this.experienceButton.nativeElement, 'active-nav-link');
  }

}
