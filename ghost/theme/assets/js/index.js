var apps = {
    slickInit: function() {
        $('.featured-post-card').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: '<a class="featured-post-nav-prev featured-post-nav"><svg class="svg-left svg-icon svg-icon-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 491"><path d="M237.714133,-5.68434189e-14 L263.574705,25.8590476 L62.4316095,227.001 L512,227.001905 L512,263.573333 L62.4316095,263.573 L263.574705,464.71619 L237.714133,490.576762 L5.3560381,258.218667 C-1.78453333,251.076571 -1.78453333,239.498667 5.3560381,232.358095 L237.714133,-5.68434189e-14 Z" /></svg></a>',
            nextArrow: '<a class="featured-post-nav-next featured-post-nav"><svg class="svg-right svg-icon svg-icon-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 492"><path d="M274.285714,0.523809524 L506.64381,232.881905 C513.785905,240.022476 513.785905,251.600381 506.64381,258.742476 L274.285714,491.100571 L248.425143,465.24 L449.567,264.09681 L1.13686838e-13,264.097143 L1.13686838e-13,227.525714 L449.567,227.52481 L248.425143,26.3828571 L274.285714,0.523809524 Z" /></svg></a>',
            fade: true,
            cssEase: 'linear'          
        });
    },
    copyClipboardLoad: function() {
        new ClipboardJS("#copy");
    },
    searchFunction: function() {
        // =================
        // ghostHunter.js api v2 support
        // =================
        var searchWrap = $('.js-search'),
            searchToggle = $('.js-search-toggle'),
            searchInput = $('.js-search-input'),
            searchResults = $('.js-search-results'),
            searchResult = $('.js-search-result'),
            searchError = $('.js-search-error');
            
        searchToggle.click(function (e) {
            e.preventDefault();
            
            searchWrap.toggleClass('show'), setTimeout(function() {
                searchInput.focus();
            }, 0);

            searchFunction.clear();
        });
        var searchFunction = searchInput.ghostHunter({
            results : searchResult,
            onKeyUp : true,
            onPageLoad: true,
            info_template : '',
            result_template: '<div id="gh-{{ref}}" class="gh-search-item results-item entry-header"><h3 class="results-title entry-title"><a href="{{link}}">{{title}}</a></h3><div class="results-date entry-datetime"><span><time>{{pubDate}}</time></span></div></div>',
            before: function() {},
            onComplete: function(results) {
                if (searchInput.prop('value')) {
                    searchResults.show();
                } else {
                    searchResults.hide();
                }
            }
        });
    },
    koenigGallery: function() {
        // =================
        // Gallery adjustments
        // =================
        $('.kg-gallery-image > img').each( function() {
			var $this = $(this),
				$container = $this.closest('.kg-gallery-image'),
				width = $this.attr('width'),
				height = $this.attr('height'),
				ratio = width / height;
			$this.wrap("<a href='" + $this.attr("src") + "' />");
			$container.css({'flex' : ratio + ' 1 0%' });
        });
        
        $('.kg-gallery-card').each( function() {
            var $this = $(this);
            $this.find('.kg-gallery-image a').simpleLightbox({
                enableKeyboard: true,
                captions: false,
                closeText: '<span aria-hidden="true" class="icon-close-custom"></span>',
                navText: ['<span class="icon-left-custom" aria-hidden="true"></span>','<span class="icon-right-custom" aria-hidden="true"></span>']
            });
        });
    },
    responsiveVideo: function() {
        // =================
        // responsive video by fitVids.js
        // =================
        $('.post-article, .kg-embed-card').fitVids();
    },
    responsiveMenu: function() {
        // =================
		// responsive menu toggle
        // =================
		$('.js-menu-toggle, .js-mobile-overlay').click(function(e) {
			$('body').toggleClass('open');
			e.preventDefault();
        });
    },
    pageLoader: function() {
        var $load_posts_button = $('.js-page-load'),
        pagination_next_url = $load_posts_button.data('href');

        $load_posts_button.click(function(e) {
            e.preventDefault();

            var request_next_link = pagination_next_url.split(/page/)[0] + 'page/' + pagination_next_page_number + '/';

            $.ajax({
                url: request_next_link,
                beforeSend: function() {
                    $load_posts_button.text('Loading...');
                    $load_posts_button.addClass('btn-pagination-loading');
                }
            }).done(function(data) {
                var posts = $('.js-post-card', data);

                $('.js-grid').append(posts);

                $load_posts_button.text('Load More ');
                $load_posts_button.append('<span></span>');
                $load_posts_button.removeClass('btn-pagination-loading');

                pagination_next_page_number++;

                if (pagination_next_page_number > pagination_available_pages_number) {
                    $load_posts_button.text('No More Posts');
                    $load_posts_button.addClass('pagination-disabled').attr('disabled', true);
                }
            });
        });
    },
    memberSubscription: function() {
        // Parse the URL parameter
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        // Give the parameter a variable name
        var action = getParameterByName('action');
        var stripe = getParameterByName('stripe');

        $(document).ready(function () {
            if (action == 'subscribe') {
                $('body').addClass("subscribe-success");
            }
            if (action == 'signup') {
                window.location = '/signup/?action=checkout';
            }
            if (action == 'checkout') {
                $('body').addClass("signup-success");
            }
            if (action == 'signin') {
                $('body').addClass("signin-success");
            }
            if (action == 'billing-update-success') {
                $('body').addClass("billing-success");
            }
            if (action == 'billing-update-cancel') {
                $('body').addClass("billing-cancel");
            }
            if (stripe == 'success') {
                $('body').addClass("checkout-success");
            }

            $('.notification-close').click(function () {
                $(this).parent().addClass('closed');
                var uri = window.location.toString();
                if (uri.indexOf("?") > 0) {
                    var clean_uri = uri.substring(0, uri.indexOf("?"));
                    window.history.replaceState({}, document.title, clean_uri);
                }
            });

            // Reset form on opening subscrion overlay
            $('.subscribe-button').click(function() {
                $('.subscribe-overlay form').removeClass();
                $('.subscribe-email').val('');
            });
        });
    },
    darkMode: function() {
        $('.js-darkmode-toggle').click(function (e) {
            e.preventDefault();
            
            var e = $(document.documentElement).attr("data-theme");
            null !== e && "dark" === e ? ($(document.documentElement).attr("data-theme", "light"), localStorage.setItem("selected-theme", "light")) : ($(document.documentElement).attr("data-theme", "dark"), localStorage.setItem("selected-theme", "dark"))
        });
    },
    readingProgress: function() {
        // When the user scrolls the page, execute progressBar 
        window.onscroll = function() {progressBar()};

        function progressBar() {
            var readingBar = document.querySelector('.post-progress'),
                readingArea = document.querySelector('.post-inner').getBoundingClientRect(),
                windowHeight = window.innerHeight / 2;

                Math.round(readingBar.max - readingBar.value);
                readingArea.top > windowHeight && (readingBar.value = 0), readingArea.top < windowHeight && (readingBar.value = readingBar.max), readingArea.top <= windowHeight && readingArea.bottom >= windowHeight && (readingBar.value = readingBar.max * Math.abs(readingArea.top - windowHeight) / readingArea.height);
        }
    },
    init: function() {
        apps.slickInit();
        apps.copyClipboardLoad();
        apps.searchFunction();
        apps.koenigGallery();
        apps.responsiveVideo();
        apps.responsiveMenu();
        apps.pageLoader();
        apps.memberSubscription();
        apps.darkMode();
        apps.readingProgress();
    }
}

$(document).ready(function() {
    apps.init();
});