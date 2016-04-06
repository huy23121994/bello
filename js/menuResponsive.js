			//Menu Responsive

			var nav='off';
			$('.bh_btn_menu').on('click',function(){
				function add_body_translate(selector){
					$(selector).addClass('bh_transition bh_body_translateX');
				}
				function remove_body_translate(selector){
					$(selector).removeClass('bh_body_translateX');
				}
				if (nav!='on') {
					add_body_translate('section');
					add_body_translate('.bh_btn_menu');
					add_body_translate('.bh_cart');
					add_body_translate('.bh_logo_respon');
					$('.navbar-main').addClass('bh_transition bh_nav_translateX');
					$('body').css({'position':'fixed','overflow':'hidden'});
					nav='on';
				}else{
					remove_body_translate('section');
					remove_body_translate('.bh_btn_menu');
					remove_body_translate('.bh_cart');
					remove_body_translate('.bh_logo_respon');
					$('.navbar-main').removeClass('bh_nav_translateX');
					$('body').css({'position':'relative','overflow':'auto'});
					$('.navbar-nav li .icon-bar').removeClass('rotate_icon ');
					$('.navbar-nav li').removeClass('on')
						.find('.bh_dropdown-menu').removeClass('in');
					nav='off';
				}
			})
			$('section').on('click',function(){
				$('section').removeClass('bh_body_translateX');
				$('.navbar-main').removeClass('bh_nav_translateX');
				$('.bh_btn_menu').removeClass('bh_body_translateX');
				$('.bh_cart').removeClass('bh_body_translateX');
				$('.bh_logo_respon').removeClass('bh_body_translateX');
				$('body').css({'position':'relative','overflow':'auto'});
				$('.navbar-nav li .icon-bar').removeClass('rotate_icon ');
				$('.navbar-nav li').removeClass('on')
					.find('.bh_dropdown-menu').removeClass('in');
				nav='off';
			})

			$('.navbar-nav>li>a').on('click',function(){
				var window_width=$(window).width();
				var $this_li=$(this).parent();
				if (window_width<768){
					if ( !$this_li.hasClass('on') ) {
						$this_li.addClass('on');
						$this_li.find('.icon-bar').addClass('bh_transition rotate_icon');
					}else{
						$this_li.find('.icon-bar').removeClass('rotate_icon ');
						$this_li.removeClass('on');
					}
				}else{
					$this_li.removeClass('on');
				}
			})

			function prevent_collapse(){
				var window_width=$(window).width();
				if (window_width<768){
					$('.navbar-main>.nav:first-child .bh_dropdown-menu').addClass('collapse');
					$('.navbar-main>.nav:first-child .bh_main_menu').attr('data-toggle','collapse');
				}else{
					$('.navbar-main>.nav:first-child .bh_dropdown-menu').removeClass('collapse');
					$('.navbar-main>.nav:first-child .bh_main_menu').attr('data-toggle','');
				}
			}
			$(window).ready(function(){
				prevent_collapse();
			})
			$(window).resize(function(){
				prevent_collapse();
			})

