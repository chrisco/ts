import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.menuContent.removeClass('site-header__menu-content--is-visible');
      this.siteHeader.removeClass('site-header--is-expanded');
      this.menuIcon.removeClass('site-header__menu-icon--close-x');
    }
  }
}

export default MobileMenu;
