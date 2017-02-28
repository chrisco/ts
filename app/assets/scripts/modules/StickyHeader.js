import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.logo = $('.site-header__logo');
    this.scrollToTopOnLogoClick();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  // Added my own function to add a finishing touch/detail
  scrollToTopOnLogoClick() {
    const that = this;
    this.logo.click(() => {
      $('html, body').animate({
        scrollTop: 0,
      }, 300);
      that.headerLinks.removeClass('is-current-link');
    });
  }

  createHeaderWaypoint() {
    const that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler(direction) {
        if (direction === 'down') {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
          that.headerLinks.removeClass('is-current-link');
        }
      },
    });
  }

  createPageSectionWaypoints() {
    const that = this;

    this.pageSections.each(function () {
      const currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler(direction) {
          if (direction === 'down') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '18%',
      });

      new Waypoint({
        element: currentPageSection,
        handler(direction) {
          if (direction === 'up') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '-40%',
      });
    });
  }
}

export default StickyHeader;
