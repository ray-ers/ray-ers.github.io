$(document).ready(function() {
  'use strict';

  var html = $('html'),
    menuOpenIcon = $(".nav__icon-menu"),
    menuCloseIcon = $(".nav__icon-close"),
    menuList = $(".main-nav"),
    searchOpenIcon = $(".nav__icon-search"),
    searchCloseIcon = $(".search__close"),
    searchBox = $(".search"),
    toggleTheme = $(".toggle-theme"),
    searchInput = $(".search__text");


  /* ==================================
  // Menu + Search + Theme Switcher
  ================================== */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    searchClose();
  });

  toggleTheme.click(function () {
    darkMode()
  });

  function menuOpen() {
    menuList.addClass("is-open");
  }

  function menuClose() {
    menuList.removeClass("is-open");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
    setTimeout(function () {
      searchInput.focus();
    }, 150);
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
  }

  $('.search, .search__box').on('click keyup', function(event) {
    if (event.target == this || event.keyCode == 27) {
      $('.search').removeClass('is-visible');
    }
  });

  function darkMode() {
    if (html.hasClass('dark-mode')) {
      html.removeClass('dark-mode');
      localStorage.removeItem("theme")
      document.documentElement.removeAttribute("dark");
    } else {
      html.addClass('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  }


  /* ========================
  // Simple Jekyll Search
  ======================== */
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '{article}',
    noResultsText: '<h3 class="no-results">No results found</h3>'
  });


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]', 'iframe[src*="facebook.com"]']
  });


  /* =======================
  // Zoom Image
  ======================= */
  $(".page img, .post img").attr("data-action", "zoom");
  $(".page a img, .post a img").removeAttr("data-action", "zoom");


  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("html, body").stop().animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").addClass("is-active");
    } else {
      $(".top").removeClass("is-active");
    }
  });
/* =======================
  // Atelier Page Modal
  ======================= */
  // Only run this code if the gallery exists on the page
  if ($('.atelier-gallery').length) {
    var atelierModalOverlay = $(".atelier-modal-overlay");
    var atelierModalImage = $(".atelier-modal__image");
    var atelierModalText = $(".atelier-modal__text");
    var atelierModalClose = $(".atelier-modal__close");
  
    // Open the modal when a gallery item is clicked
    $(".atelier-item").on("click", function() {
      // Get the content from the clicked item
      var imgSrc = $(this).find("img").attr("src");
      var captionHtml = $(this).find(".atelier-item__caption").html();
  
      // Populate the modal with the new content
      atelierModalImage.html('<img src="' + imgSrc + '" alt="">');
      atelierModalText.html(captionHtml);
  
      // Show the modal
      atelierModalOverlay.addClass("is-visible");
      $("body").css("overflow", "hidden"); // Prevent the page from scrolling
    });
  
    // Function to close the modal
    function closeModal() {
      atelierModalOverlay.removeClass("is-visible");
      $("body").css("overflow", ""); // Re-enable page scrolling
      // Clear content after animation to prevent a "flash" of old content
      setTimeout(function() {
        atelierModalImage.html("");
        atelierModalText.html("");
      }, 300);
    }
  
    // Close the modal via the close button
    atelierModalClose.on("click", function() {
      closeModal();
    });
  
    // Close the modal by clicking the background overlay or pressing the Escape key
    atelierModalOverlay.on('click keyup', function(event) {
      if (event.target == this || event.keyCode == 27) {
        closeModal();
      }
    });
  }
});

