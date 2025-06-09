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
  menuOpenIcon.click(function() { menuOpen(); });
  menuCloseIcon.click(function() { menuClose(); });
  searchOpenIcon.click(function() { searchOpen(); });
  searchCloseIcon.click(function() { searchClose(); });
  toggleTheme.click(function() { darkMode(); });

  function menuOpen() { menuList.addClass("is-open"); }
  function menuClose() { menuList.removeClass("is-open"); }
  function searchOpen() {
    searchBox.addClass("is-visible");
    setTimeout(function() { searchInput.focus(); }, 150);
  }
  function searchClose() { searchBox.removeClass("is-visible"); }
  $('.search, .search__box').on('click keyup', function(event) {
    if (event.target == this || event.keyCode == 27) {
      $('.search').removeClass('is-visible');
    }
  });
  function darkMode() {
    if (html.hasClass('dark-mode')) {
      html.removeClass('dark-mode');
      localStorage.removeItem("theme");
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
  if ($('#js-search-input').length) {
    SimpleJekyllSearch({
      searchInput: document.getElementById("js-search-input"),
      resultsContainer: document.getElementById("js-results-container"),
      json: "/search.json",
      searchResultTemplate: '{article}',
      noResultsText: '<h3 class="no-results">No results found</h3>'
    });
  }

  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]', 'iframe[src*="facebook.com"]']
  });

  /* =======================
  // Zoom Image (Corrected to Exclude Atelier Gallery)
  ======================= */
  $(".page img, .post img").not('.atelier-gallery img').attr("data-action", "zoom");
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
  // Atelier Page Modal (with Navigation)
  ======================= */
  if ($('.atelier-gallery').length) {
    var $galleryItems = $(".atelier-item");
    var totalItems = $galleryItems.length;
    var currentIndex = 0;

    var atelierModalOverlay = $(".atelier-modal-overlay");
    var atelierModalContent = $(".atelier-modal");
    var atelierModalImage = $(".atelier-modal__image");
    var atelierModalText = $(".atelier-modal__text");
    var atelierModalClose = $(".atelier-modal__close");
    var atelierModalNext = $(".atelier-modal__next");
    var atelierModalPrev = $(".atelier-modal__prev");

    // Function to show a specific image by its index
    function showImage(index) {
        var $item = $galleryItems.eq(index);
        var imgSrc = $item.find("img").attr("src");
        var captionHtml = $item.find(".atelier-item__caption").html();
        
        atelierModalImage.html('<img src="' + imgSrc + '" alt="">');
        atelierModalText.html(captionHtml);
    }

    // Open the modal when a gallery item is clicked
    $galleryItems.on("click", function() {
      currentIndex = $(this).index();
      showImage(currentIndex);
      atelierModalOverlay.addClass("is-visible");
      $("body").css("overflow", "hidden");
    });

    // Handle Next button click
    atelierModalNext.on("click", function(event) {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % totalItems;
        showImage(currentIndex);
    });

    // Handle Previous button click
    atelierModalPrev.on("click", function(event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showImage(currentIndex);
    });

    // Function to close the modal
    function closeModal() {
      atelierModalOverlay.removeClass("is-visible");
      $("body").css("overflow", "");
    }

    // Close the modal via the close button
    atelierModalClose.on("click", function() { closeModal(); });
    
    // Close the modal by clicking the background overlay
    atelierModalOverlay.on('click', function() { closeModal(); });
    
    // Prevent clicks on the modal content from closing it
    atelierModalContent.on('click', function(event) { event.stopPropagation(); });

    // Close the modal by pressing the Escape key
    $(document).on('keyup', function(event) {
      if (event.key === "Escape" && atelierModalOverlay.hasClass('is-visible')) {
        closeModal();
      }
    });
  }
});
