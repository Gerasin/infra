$(document).ready(function() {

	// max width
	maxpWidth();

	// мобильное меню
	$('.burger').on('click', function () {
		if($(this).hasClass('active')) { 
			$('.satellites').fadeOut(300);
			$(this).removeClass('active');
		} else {
			$('.satellites').fadeIn(300);
			$(this).addClass('active');
		}
	});
	$('.menu-mob').on('click', function () {
		if($(this).hasClass('active')) { 
			$('.head__menu, .head__menu-close').fadeOut(300);
			$(this).removeClass('active');
		} else {
			$('.head__menu, .head__menu-close').fadeIn(300);
			$(this).addClass('active');
		};
		return false;
	});
	$('.head__menu-close').on('click', function () {
		$('.head__menu, .head__menu-close').fadeOut(300);
		return false;
	});
	

	// карусель
	$('.corusel-list').owlCarousel({
    	items:3,
	    margin:20,
	    loop:true,
	    lazyLoad:true,
	    autoHeight:false,
	    autoplay:true,
    	autoplayTimeout:3000,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        992:{
	            items:3
	        }
	    }
	});
	
	$('.corusel-book').owlCarousel({
	    loop:true,
	    margin:60,
	    lazyLoad:true,
	    autoHeight:false,
	    autoplay:true,
    	autoplayTimeout:3000,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        500:{
	            items:2
	        },
	        767:{
	            items:3
	        },
	        992:{
	            items:4
	        },
	        1200:{
	            items:5
	        },
	        1400:{
	            items:6
	        }
	    }
	});
	$('.corusel-book-big').owlCarousel({
	    loop:true,
	    margin:20,
	    lazyLoad:true,
	    autoHeight:false,
	    autoplay:true,
    	autoplayTimeout:3000,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        500:{
	            items:2
	        },
	        767:{
	            items:3
	        },
	        992:{
	            items:4
	        },
	        1200:{
	            items:5,
	            margin:10
	        },
	        1600:{
	            items:6
	        }
	    }
	});

	
	$('.corusel-catalog').each(function(){
		var loopWidth = true;
		if($(this).find('.corusel-book__item').length > 5) {
			loopWidth = true
		} else {
			loopWidth = false
		};
		$(this).owlCarousel({
			loop:loopWidth,
		    margin:60,
		    lazyLoad:true,
		    autoHeight:false,
		    autoplay:false,
	    	autoplayTimeout:3000,
		    nav:true,
		    responsive:{
		        0:{
		            items:1,
		            margin:20
		        },
		        500:{
		            items:2,
		            margin:10
		        },
		        1000:{
		            items:3,
		            margin:10
		        },
		        1200:{
		            items:4,
		            margin:30
		        },
		        1600:{
		            items:5,
		            margin:30
		        }
		    }
		});
	});


	$('.main-corusel').owlCarousel({
    	items:1,
    	loop:true,
	    margin:0,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:3000,
    	smartSpeed:1050,
    	autoplayHoverPause:true
	});

	$('.catalog-menu-mob').owlCarousel({
    	items:2,
    	loop:true,
	    margin:0,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:3000,
    	smartSpeed:1050,
    	autoplayHoverPause:true,
    	responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:2
	        }
	    }
	});

	if($('.main-corusel').length) {
		var owlItem;
		$('.main-corusel .owl-dots .owl-dot').each(function(){
			owlItem = $(this).index();
			owlItem = ++owlItem;
			$(this).html(owlItem);
		})
	};

	// menu item show
	$('.footer__menu .dashed').on('click', function () {
		$(this).parent().parent().find('.menu-hide').slideDown();
		$(this).slideUp();
		return false;
	});


	// main slider tab
	$('.baner-tovar__tab a:first').addClass('active');
	$('.baner-tovar__tab-it .baner-tovar__inner:not(:first)').hide();
	$('.baner-tovar__tab a').on('click', function () {
		$('.baner-tovar__tab a').removeClass('active');
		$(this).addClass('active');
		var tabIndex = $(this).index();
		$('.baner-tovar__tab-it .baner-tovar__inner').hide();
		$('.baner-tovar__tab-it .baner-tovar__inner').eq(tabIndex).show();
		return false;
	});


	// submenu
	$('.head__menu > li > a, .head__menu > li > span').hover(function() {
		if($(window).width() > 1200) {
			$('.head__menu li ul:visible').fadeOut();
			$(this).parent().find('ul').fadeIn()
		}
	}, function(){

	}); 
	$('.head__menu').hover(function() {}, function(){
		$('.head__menu li ul:visible').fadeOut();
	});

	$('.head__menu li ul').each(function () {
		$(this).parent().find('a:first').addClass('open-menu');
	});
	$('.open-menu').on('click', function () {
		if($(this).parents('ul').hasClass('podmenu-open-ul')) {
			$(this).parent('li').removeClass('podmenu-open');
			$(this).parents('.head__menu').removeClass('podmenu-open-ul');
		} else {
			$(this).parent('li').addClass('podmenu-open');
			$(this).parents('.head__menu').addClass('podmenu-open-ul');
		}
		
		return false;
	});

	$('.search-mob').on('click', function () {
		$('.head__search').fadeToggle();
		return false;
	});



	// filter
	$('.filter-slide__check').jScrollPane();
	$('.filter-slide__popup, .filter-slide__wrap').hide();


	$('.filter-slide__open').on('click', function () {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent().find('.filter-slide__popup').fadeOut();
			checkFalse();
		} else {
			$(this).addClass('active');
			$('.filter-slide__popup:visible').fadeOut();
			$(this).parent().find('.filter-slide__popup').fadeIn();
		}
		return false;
	});
	$('.filter-slide__close').on('click', function () {
		$(this).parents('.filter-slide__item').find('.filter-slide__open').removeClass('active');
		$(this).parent('.filter-slide__popup').fadeOut();
		checkFalse();
		return false;
	});

	$('.filter-slide__check-ok').on('click', function () {
		$(this).hide();
		$(this).parent().find('.filter-slide__check-close').show();
		$(this).parents('.filter-slide__popup').find("input[type=checkbox]").prop('checked', true);
		return false;
	});
	$('.filter-slide__check-close').on('click', function () {
		$(this).hide();
		$(this).parent().find('.filter-slide__check-ok').show();
		$(this).parents('.filter-slide__popup').find("input[type=checkbox]").removeAttr('checked');
		return false;
	});
	$('.filter-true').on('click', function () {
		var item = $(this).parents('.filter-slide__item');
		item.find('.filter-slide__open').removeClass('active');
		$(this).parents('.filter-slide__popup').fadeOut();
		var checkLength = item.find('input:checked').length;
		if(checkLength > 0) {
			item.find('.filter-slide__length').text(checkLength).fadeIn();
			item.find('.filter-slide__reset').fadeIn()
		} else {
			item.find('.filter-slide__length').fadeOut();
			item.find('.filter-slide__reset').fadeOut()
		};
		// all check
		var itemAll = $(this).parents('.filter-slide'),
		checkAllLength = itemAll.find('input:checked').length + itemAll.find('.check-one.active').length;
		if(checkAllLength > 0) {
			itemAll.find('.filter-slide__length-all').text(checkAllLength).fadeIn();
			itemAll.find('.filter-slide__reset-all').fadeIn()
		} else {
			itemAll.find('.filter-slide__length-all').fadeOut();
			itemAll.find('.filter-slide__reset-all').fadeOut()
		};
		$('.catalog-filter input[type=checkbox]').removeClass('checked-true, checked-false');
		$('.catalog-filter input[type=checkbox]').each(function(){
			if($(this).is(":checked")) {
				$(this).addClass('checked-true');
			} else {
				$(this).addClass('checked-false');
			}
		});
		return false;
	});
	$('.check-one').on('click', function () {
		if($(this).hasClass('active')) {
			$(this).removeClass('active')
			$(this).next().fadeOut();
		} else {
			$(this).addClass('active')
			$(this).next().fadeIn();
		};

		var item = $(this).parents('.filter-slide__item');
		var checkLength = item.find('input:checked').length + $(this).parents('.filter-slide__wrap').find('.check-one.active').length;
		if(checkLength > 0) {
			item.find('.filter-slide__length').text(checkLength).fadeIn();
			item.find('.filter-slide__reset').fadeIn()
		} else {
			item.find('.filter-slide__length').fadeOut();
			item.find('.filter-slide__reset').fadeOut()
		};
		// all check
		var itemAll = $(this).parents('.filter-slide'),
		checkAllLength = itemAll.find('input:checked').length + $(this).parents('.filter-slide__wrap').find('.check-one.active').length;
		if(checkAllLength > 0) {
			itemAll.find('.filter-slide__length-all').text(checkAllLength).fadeIn();
			itemAll.find('.filter-slide__reset-all').fadeIn()
		} else {
			itemAll.find('.filter-slide__length-all').fadeOut();
			itemAll.find('.filter-slide__reset-all').fadeOut()
		};
		$('.catalog-filter input[type=checkbox]').removeClass('checked-true, checked-false');
		$('.catalog-filter input[type=checkbox]').each(function(){
			if($(this).is(":checked")) {
				$(this).addClass('checked-true');
			} else {
				$(this).addClass('checked-false');
			}
		});
		return false;
	});
	$('.filter-slide__reset').on('click', function () {
		var item = $(this).parents('.filter-slide__item');
		item.find('.filter-slide__open').removeClass('active');
		$(this).parents('.filter-slide__popup').fadeOut();
		item.find('.filter-slide__length').fadeOut();
		item.find('.filter-slide__reset').fadeOut();
		item.find("input[type=checkbox]").removeAttr('checked');
		var itemAll = $(this).parents('.filter-slide'),
		checkAllLength = itemAll.find('input:checked').length + itemAll.find('.check-one.active').length;
		if(checkAllLength > 0) {
			itemAll.find('.filter-slide__length-all').text(checkAllLength).fadeIn();
			itemAll.find('.filter-slide__reset-all').fadeIn()
		} else {
			itemAll.find('.filter-slide__length-all').fadeOut();
			itemAll.find('.filter-slide__reset-all').fadeOut()
		};
		return false;
	});
	$('.filter-slide__reset-check').on('click', function () {
		$(this).fadeOut();
		$(this).parent().find('.check-one').removeClass('active');
		var item = $(this).parents('.filter-slide__item');
		item.find('.filter-slide__open').removeClass('active');
		$(this).parents('.filter-slide__popup').fadeOut();
		item.find('.filter-slide__length').fadeOut();
		item.find('.filter-slide__reset').fadeOut();
		item.find("input[type=checkbox]").removeAttr('checked');
		var itemAll = $(this).parents('.filter-slide'),
		checkAllLength = itemAll.find('input:checked').length + itemAll.find('.check-one.active').length;
		if(checkAllLength > 0) {
			itemAll.find('.filter-slide__length-all').text(checkAllLength).fadeIn();
			itemAll.find('.filter-slide__reset-all').fadeIn()
		} else {
			itemAll.find('.filter-slide__length-all').fadeOut();
			itemAll.find('.filter-slide__reset-all').fadeOut()
		};
		return false;
	});
	$('.filter-slide__reset-all').on('click', function () {
		var itemAll = $(this).parents('.filter-slide');
		itemAll.find('.filter-slide__open').removeClass('active');
		itemAll.find('.filter-slide__length').fadeOut();
		itemAll.find('.filter-slide__reset').fadeOut();
		itemAll.find('.filter-slide__length-all').fadeOut();
		itemAll.find('.filter-slide__reset-all').fadeOut();
		itemAll.find("input[type=checkbox]").removeAttr('checked');
		itemAll.find('.filter-slide__reset-check').fadeOut();
		itemAll.find('.check-one.active').removeClass('active');
		return false;
	});
	$('.filter-slide__header').on('click', function () {
		$(this).parent().find('.filter-slide__wrap').slideToggle();
		$(this).toggleClass('active');
		return false;
	});
	// filter reset ALL
	$('.row-order__reset a').on('click', function () {
		$('.catalog-filter input[type=checkbox]').removeClass('checked-true, checked-false').removeAttr('checked').addClass('.checked-false');
		$('.check-one.active').removeClass('active');
		$('.filter-slide__reset-check, .filter-slide__length-all, .filter-slide__reset-all').hide();
		$('.catalog-filter').find('.filter-slide__length').hide();
		$('.catalog-filter').find('.filter-slide__reset').hide();
		return false;
	});

	// marker check
	$('.catalog-filter input[type=checkbox]').removeClass('checked-true, checked-false');
	$('.catalog-filter input[type=checkbox]').each(function(){
		if($(this).is(":checked")) {
			$(this).addClass('checked-true');
		} else {
			$(this).addClass('checked-false');
		};
		return false;
	});


	$('.open-filter').on('click', function () {
		$('.catalog-filter').slideDown();
		$('.close-filter').show();
		$(this).hide();
		return false;
	});
	$('.close-filter').on('click', function () {
		$('.catalog-filter').slideUp();
		$('.open-filter').show();
		$(this).hide();
		return false;
	});






	$('.carousel-three').owlCarousel({
    	items:3,
	    margin:30,
	    loop:true,
	    lazyLoad:true,
	    autoHeight:false,
	    autoplay:true,
    	autoplayTimeout:3000,
	    nav:false,
	    responsive:{
        0:{
            items:1,
            nav:false
        },
        766:{
            items:3,
            nav:false
        }
    }

	});

	$('.carousel-auto').owlCarousel({
    	margin:1,
	    loop:true,
	    autoWidth:true,
	    item:3,
	    autoHeight:false,
	    autoplay:true,
    	autoplayTimeout:3000,
	    nav:false
	});
	

	$('.nav-tabs a').on('click', function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});

	$(".fancybox").fancybox({
		openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
	});

	$('.baner-tovar__detals-open a').on('click', function () {
		$(this).parents('.baner-tovar__cont').find('.baner-tovar__detals').toggleClass('active');
		$(this).parents('.baner-tovar__cont').find('.baner-tovar__annotation').slideToggle();
		return false;
	});

	$('.basked-tovar__minus').on('click', function () {
		var inpNamber = $(this).parent().find('input').val();
		inpNamber = --inpNamber;
		if(inpNamber < 1) {inpNamber = 1};
		$(this).parent().find('input').val(inpNamber);
		return false;
	});
	$('.basked-tovar__plus').on('click', function () {
		var inpNamber = $(this).parent().find('input').val();
		inpNamber = ++inpNamber;
		$(this).parent().find('input').val(inpNamber);
		return false;
	});


	
	// Валидация
	if($('.valid-phone').length) {
		$('.valid-phone').inputmask("999999999999");
	};
	$('.valid-btn').on('click', function () {
		$('.input-wrap__erro').remove();
		$('.inp-error').removeClass('inp-error');
		var way = $(this).parents('form');
		var valIndex = 0;
		var errorTxt;
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		way.find('input').removeClass('inp-error');
		way.find('.error-txt').fadeOut();
		way.find('.valid-txt').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			}
		});
		way.find('.valid-mail').each(function() {
			console.log('test');
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			} else {
				if(!pattern.test($(this).val())){
		            $(this).parent().find('.error-txt').fadeIn();
		            $(this).parent().addClass('inp-error');
		            errorTxt = $(this).attr('date-error');
					$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
		            valIndex = 1
		        }
	        }
		});
		way.find('.valid-phone').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 7) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).addClass('inp-error');
				valIndex = 1
			}
		});   

		/*if(valIndex == 0) {
			$('#modal-popup').modal('show')
		};*/

		return false
	});





	// arhive
	$('.mask').inputmask("+999(99)999-99-99");  //static mask

	var minHeight = $('.sidebar_inner').height();
	$('.container').css({'min-height' : minHeight});


	$('.corusel').owlCarousel({
    	items:1,
	    margin:0,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true
	});


	
	$('.mob-menu-close, .mob-menu-bg').on('click', function () {
		$('.mob-menu-close, .mob-menu-bg, .menu').fadeOut(300);
		$('.burger').removeClass('active');
		return false;
	});

	// corusel
	$('.products__slider').owlCarousel({
    	items:4,
    	loop:true,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        990:{
	            items:3
	        },
	        1330:{
	            items:4
	        }
	    }
	});
	$('.buy__slider').owlCarousel({
    	items:3,
    	loop:true,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        990:{
	            items:3
	        }
	    }
	});


	$('.gallery__list').owlCarousel({
    	items:1,
    	loop:false,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    mouseDrag : false,
        touchDrag : false
	});

	// select style
	$('select').selectize({
	    create: true,
	    sortField: 'text'
	});

	

	// min height box info
	minHeightImg();

	// main corusel
	mainCorusel();

	$('.main-coruselbig__list').owlCarousel({
    	items:1,
	    margin:0,
	    loop:true,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:3000,
	});

	$('.baner-tovar-mobile').owlCarousel({
    	items:1,
	    margin:0,
	    loop:true,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:3000,
	});

	var newsOWL = $('.news');
	newsOWL.owlCarousel({
    	items:1,
	    margin:0,
	    loop:true,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:3000
	});
	newsCorusel();




	







	// submenu left
	$('.submenu .active > a').on('click', function () {
		if($(this).parent('li').hasClass('open')) { 
			$(this).next('ul').slideUp(300);
			$(this).parent('li').removeClass('open');
		} else {
			$(this).next('ul').slideDown(300);
			$(this).parent('li').addClass('open');
		};
		return false;
	});

	// persona detals open
	$('.persona__detals-lnk a').on('click', function () {
		if($(this).parent().hasClass('active')) { 
			$(this).parent().next('div').slideUp(300);
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().next('div').slideDown(300);
			$(this).parent().addClass('active');
		};
		return false;
	});

	// Center Modal
	function centerModal() {
	  $(this).css('display', 'block');
	  var $dialog = $(this).find(".modal-dialog");
	  var offset = ($(window).height() - $dialog.height()) / 2;
	  $dialog.css("margin-top", offset);
	  $(this).css('display', 'none');
	};
	$('.modal').on('show.bs.modal', centerModal);
	$(window).on("resize", function () {
	    $('.modal').each(centerModal);
	});

	// select style
	$('.select-st').selectize({
	    sortField: 'text'
	});

	// slider
	$('.owl-carousel-big').owlCarousel({
    	items:1,
	    margin:0,
	    autoHeight:true,
	    nav:true
	});
	$('.owl-carousel-min').owlCarousel({
    	items:3,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        992:{
	            items:2
	        }
	    }

	});

	$('.partners__list').owlCarousel({
    	items:3,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        992:{
	            items:3
	        }
	    }
	});


	$('.advantages').owlCarousel({
    	items:5,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	    	0:{
	            items:1
	        },
	        767:{
	            items:5
	        }
	    }
	});

	// mobile menu
	$('.menu-btn').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeIn();
		$('.menu-btn-close').show();
		return false;
	});
	$('.menu-btn-close, .mob-menu-bg').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeOut();
		$('.menu-btn-close').hide();
		return false;
	});

	$('.lnk-sub').on('click', function () {
		if($(window).width() < 992) {
			if($(this).hasClass('active')) { 
				$(this).next().slideUp(300);
				$(this).removeClass('active');
			} else {
				$(this).next().slideDown(300);
				$(this).addClass('active');
			};
			return false;
		}
	});


	// fancybox
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding     : 40
	});


	// about text
	$('.about__open-show').on('click', function () {
		$('.about__open-show').hide();
		$('.about__open-hide').show();
		$('.about__wrap').addClass('active');
		return false;
	});
	$('.about__open-hide').on('click', function () {
		$('.about__open-show').show();
		$('.about__open-hide').hide();
		$('.about__wrap').removeClass('active');
		return false;
	});

	footerHeight();

	// Зависающий заголовок
	headerHeight();


	searcPlaceholder();




})

function newsCorusel(){
	newsOWL = $('.news');
	if($(window).width() > 767) {
		newsOWL.trigger('destroy.owl.carousel')
		newsOWL.removeClass('owl-btn owl-carousel');
	} else {
		if(!newsOWL.hasClass('owl-carousel')) {
			newsOWL.addClass('owl-btn owl-carousel')
		};
		newsOWL.owlCarousel({
	    	items:1,
		    margin:0,
		    loop:true,
		    lazyLoad:true,
		    autoHeight:false,
		    nav:true,
		    autoplay:true,
	    	autoplayTimeout:3000
		});
	}
}


function checkFalse() {
	$('.catalog-filter input[type=checkbox]:checkbox').removeAttr('checked');
	$('.checked-true').prop('checked', true);
};


function maxpWidth() {
	var thisItem = $('.max-width');
	if(thisItem.length) {
		thisItem.css({'margin-left' : 'auto', 'margin-right' : 'auto'});
		var margLeft = -1 * thisItem.offset().left;
		thisItem.css({'margin-left' : margLeft, 'margin-right' : margLeft});
	}
}

function minHeightImg() {
	if($('.magazin-info').length) {
		var minHeightImg = $('.magazin-info').height() + 20;
		$('.page-img').css({'min-height' : minHeightImg});
	}
}

function mainCorusel() {
	if($('.main-coruselbig__list').length) {
		var mapLeft = -1 * $('.main-coruselbig').offset().left;
		$('.main-coruselbig__width').css({'margin-left' : mapLeft, 'margin-right' : mapLeft});
	}
}

function headerHeight() {

	if($('.section-header').length) {
		var hHeight = $('.section-header h2').height();
		$('.section-header').css({'min-height' : hHeight})

		var headeName = $('.section-header');
		var hStopTop = headeName.offset().top;
		var hStopBottom = $('.section-stop').offset().top - headeName.height() - 22;
		var hStop = hStopBottom - hStopTop;
		$(window).scroll(function(){
			var scrollBody = $(window).scrollTop();
			if(scrollBody > hStopTop) {
				headeName.addClass('active');
			} else {
				headeName.removeClass('active');
			};
			if(scrollBody > hStopBottom) {
				headeName.addClass('stop');
				headeName.find('h2').css({'top' : hStop})
			} else {
				headeName.removeClass('stop');
				
				headeName.find('h2').css({'top' : 0}) 
			};
		})
	}
}



function footerHeight() {
	// $('.footer-padding').css({'height' : $('.footer').height() + 30});
	var minHeight = $(window).height() - ( $('.footer').height() + $('.head').height() + $('.crubs').height() + 70);
	$('.page-content').css({'min-height' : minHeight})
}

function searcPlaceholder() {
	if($(window).width() > 1600) {
		$('.head__search-txt').attr('placeholder', 'Поиск по названию, автору или ISBN')
	} else {
		$('.head__search-txt').attr('placeholder', 'Поиск')
	}
}

$(window).load(function() {

	footerHeight();
	headerHeight();

});

$(window).resize(function() {

	footerHeight();
	headerHeight();
	maxpWidth();
	minHeightImg();
	mainCorusel();
	searcPlaceholder();
	newsCorusel();

});

$(document).mouseup(function(e){
  	var container = $(".satellites, .burger"); 
  		if (!container.is(e.target) && container.has(e.target).length === 0){
      	$('.satellites').fadeOut(100);
	  	$('.burger').removeClass('active');
  	};

  	if($(window).width() < 992) {
	  	var container2 = $(".head__menu"); 
	  		if (!container2.is(e.target) && container2.has(e.target).length === 0){
	      	$('.head__menu').fadeOut(100);
		  	$('.menu-mob').removeClass('active');
	  	};
	}

});

$('body').bind( "touchend", function(e){
  	var container = $(".satellites, .burger"); 
  		if (!container.is(e.target) && container.has(e.target).length === 0){
      	$('.satellites').fadeOut(100);
	  	$('.burger').removeClass('active');
  	};

  	if($(window).width() < 992) {
	  	var container2 = $(".head__menu"); 
	  		if (!container2.is(e.target) && container2.has(e.target).length === 0){
	      	$('.head__menu').fadeOut(100);
		  	$('.menu-mob').removeClass('active');
	  	};
	}

});





//  REMOVE
/*
$('body').append(
	'<div style="position: fixed; z-index: 9999; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 200px; font-size: 13px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;position:relative;z-index:20; text-decoration:none" onclick="$(this).parent().hide()">Закрыть X</a> \
	<ol style="padding: 9px 0 7px 30px; margin: 0"> \
		<li style="margin: 0 0 5px;"><a href="index.html">Index</a></li> \
		<li style="margin: 0 0 5px;"><a href="typography.html">typography</a></li> \
		<li style="margin: 0 0 5px;"><a href="catalog.html">catalog</a></li> \
		<li style="margin: 0 0 5px;"><a href="catalog+.html">catalog+</a></li> \
		<li style="margin: 0 0 5px;"><a href="kniga.html">kniga</a></li> \
		<li style="margin: 0 0 5px;"><a href="yslygi.html">yslygi</a></li> \
		<li style="margin: 0 0 5px;"><a href="zakaz.html">zakaz</a></li> \
	</ol> \
</div>');*/