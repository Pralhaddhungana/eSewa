<script class="ng-scope">
    $("head").append('<meta name="referrer" content="no-referrer"/>');
    jssor_1_slider_init = function() {
        var jssor_1_options = {
            $AutoPlay: 1,
            $Idle: 0,
            $SlideDuration: 5000,
            $SlideEasing: $Jease$.$Linear,
            $PauseOnHover: 4,
            $SlideWidth: 140,
            $Cols: 7,
            $ArrowKeyNavigation: true,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2
            }
        };
        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1140);
                jssor_1_slider.$ScaleWidth(refSize);
            } else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    };
    (function(open) {
        var meta = document.createElement('meta');
        meta.setAttribute('name', 'google-site-verification');
        meta.setAttribute('content', 'GV29br3yk7RPjjmT-i4VV5YrJL4GIhlj0kWQF-5zRNM');
        document.getElementsByTagName('head')[0].appendChild(meta);
    })(XMLHttpRequest.prototype.open);
    $(document).ready(function() {

        $('#currentYear').text(new Date().getFullYear());
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.page-scroll-top').fadeIn();
            } else {
                $('.page-scroll-top').fadeOut();
            }
        });
        $('.page-scroll-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        jssor_1_slider_init();
        footerSticky();
    });
    function footerSticky() {
        let footerHeight = $('footer[role=site-footer]').innerHeight();
        $('body[ng-app=esewaCustomerApp], body[ng-app=esewaUserApp], body[ng-app=organizationModule].zone').css('padding-bottom', footerHeight);
    }
    $(window).on("resize", function (){
        footerSticky();
    });
</script>