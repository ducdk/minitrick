import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.menuTrigger();
  }

  constructor() { }

  ngOnInit() {
    this.menuTrigger();
    this.themeToggle();
  }

  themeToggle() {
    const getTheme = localStorage && localStorage.getItem('minitrick-theme');
    const isDark = getTheme === "dark";

    if (getTheme !== null) {
      document.body.classList.toggle("dark-theme", isDark);
    }
  }

  changeTheme() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      'minitrick-theme',
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  }

  menuTrigger() {
    const menuTrigger = document.querySelector(".menu-trigger");
    const menu = document.querySelector(".menu");
    const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
    const isMobile = () => window.matchMedia(mobileQuery).matches;

    menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
    menu && menu.classList.toggle("hidden", isMobile());
  }

  menuTriggerMobileShow() {
    const menu = document.querySelector(".menu");
    menu && menu.classList.toggle("hidden")
  }
}
