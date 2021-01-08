$(function() {

    // スクロール
    $('.totop').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 80) {
            $('.totop').fadeIn(300);
        } else {
            $('.totop').fadeOut(300);
        }
    })

    $('.totop').click(function() {
        $('body, html').animate(
            {
                scrollTop:0
            } 
            ,500
        );
    });

    // トーグル
    $('#toggle').click(function() {
        $('.header__logo, #toggle, .toggle-back, #toggle-header__nav').toggleClass('js-active');
    });

    // アコーディオン
    $('.qa__item--answer').hide();
    $('.qa__item--head').click(function() {
        $(this).next().slideToggle();
        $(this).children().toggleClass('js-is--open');
    });

    // ページネーション
    $('.swiper-pagination-bullet').click(function() {
        $('.swiper-pagination-bullet').removeClass('js-is--active');
        $(this).addClass('js-is--active');
    })

    // ページ内リンク
    $('a[href^="#"]').click(function() {
        let header = $('.header').innerHeight();
        let speed = 1000;
        let id = $(this).attr('href');
        let target = $('#' ===  id ? 'html' : id);
        let position = $(target).offset().top - header;

        $('html, body').animate(
            {
                scrollTop: position
            },
            speed
        )
        return false;
    });

    // 非同期実装
    $('#js-form').submit(function (e) {
        $.ajax({
            url: $('#js-form').attr('action'),
            data: $('#js-form').serialize(),
            type: 'post',
            dataType: 'xml',
            statusCode: {
                0: function() {
                    $('#js-form').slideUp();
                    $('.submit-true').fadeIn();
                },
                200: function() {
                    $('#js-form').slideUp();
                    $('.submit-false').fadeIn();
                }
            }
        });
        return false;
    });
});