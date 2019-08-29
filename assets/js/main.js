(function() {
  'use strict';

  /**
   * Class name helpers
   */
  function classReg(cl) {
    return new RegExp("(^|\\s+)" + cl + "(\\s+|$)");
  }

  function hasClass(el, cl) {
    if ('classList' in document.documentElement) {
     return el.classList.contains(cl);
   } else {
     return classReg(cl).test(el.className);
   }
  }

  function addClass(el, cl) {
    if ('classList' in document.documentElement) {
      el.classList.add(cl);
    } else {
      if (!hasClass(el,cl)) {
        el.className = el.className + ' ' + cl;
      }
    }
  }

  function removeClass(el, cl) {
    if ('classList' in document.documentElement) {
      el.classList.remove(cl);
    } else {
      el.className = el.className.replace(classReg(cl), ' ');
    }
  }

  /**
   * Extend helper
   */
  function extend(obj1, obj2) {
    var obj = {};
    for (var key in obj1) {
      obj[key] = obj2[key] === undefined ? obj1[key] : obj2[key];
    }
    return obj;
  }

  /**
   * Nav
   */
  var Nav = function(el, toggleEl) {

    this.el = el,
    this.toggleEl = toggleEl,
    this.body = document.body,
    this.opts = {
      activeClass: 'nav--active',
      bodyClass: 'nav-is-active'
    };

  }

  Nav.prototype = {

    init: function() {

      var _this = this;

      this.toggleEl.addEventListener('click', function() {

        if(!hasClass(_this.el, _this.opts.activeClass)) {
          _this.openNav();
        } else {
          _this.closeNav();
        }

      });

    },

    openNav: function() {

      addClass(this.el, this.opts.activeClass);
      addClass(this.body, this.opts.bodyClass);

    },

    closeNav: function() {

      removeClass(this.el, this.opts.activeClass);
      removeClass(this.body, this.opts.bodyClass);

    }

  };

  /**
   * Initialize everything
   */
  function init() {

    // initialize nav
    var navEl = document.getElementById('nav'),
        navToggleEl = document.getElementById('nav-toggle');
    if (navEl) {
      var nav = new Nav(navEl, navToggleEl);
      nav.init();
    }

  }

  /**
   * Check if the document is ready
   */
  if (document.readyState != 'loading') {
    init();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState == 'complete') {
        init();
      }
    });
  }

}());