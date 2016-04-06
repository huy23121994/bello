$('.ml_frame_span span').on('click',function(){
	if ($(this).parent().hasClass('active_sel')) {
		$(this).parent().removeClass('active_sel');
	}else{
		$(this).parent().addClass('active_sel');
	}
});
$('.ml_sap_xep').on('click',function(){
	if ($('.ml_sap_xep > span').hasClass('tdc')) {
		$('.ml_sap_xep > span').html('GIÁ TỪ THẤP ĐẾN CAO');
		$('.ml_sap_xep > span').removeClass('tdc');
	}else{
		$('.ml_sap_xep > span').html('GIÁ TỪ CAO ĐẾN THẤP');
		$('.ml_sap_xep > span').addClass('tdc');
	}
});
$('.ml_pd_brand .a_of_brand').on('click',function(){
	$('.ml_pd_brand .brand_show').slideToggle('slow');
});
$('.fake_select_activate .ml_brand .of_brand li').on('click',function(){
	var brand = $(this).text();
	$('.ml_brand').css('display','none');
	$('.ml_pd_brand .span_of_brand').html(brand);
	if (brand == "None") {
		$('.ml_pd_brand .span_of_brand').html('BRAND');
	};
});


// Phần sắp xếp
$('.ml_pd_brand .a_of_sap_xep').on('click',function(){
	$('.ml_pd_brand .sap_xep_show').slideToggle('slow');
});
$('.fake_select_activate .ml_brand .of_sap_xep li').on('click',function(){
	var brand = $(this).text();
	$('.ml_brand').css('display','none');
	$('.ml_pd_brand .span_of_sap_xep').html(brand);
	if (brand == "None") {
		$('.ml_pd_brand .span_of_sap_xep').html('SẮP XẾP');
	};
});

$('.ml_color li img').on('click',function(){
	var url = $(this).attr('src');
	var wrapper_selector = $(this).parent();
	if (wrapper_selector.hasClass('color_actived')) {
		wrapper_selector.removeClass('color_actived');
		new_url = url.substring(0,url.length - 12) + '.png';
		$(this).attr('src',new_url);
	}else{
		wrapper_selector.addClass('color_actived');
		new_url = url.substring(0,url.length - 4) + '_actived.png';
		$(this).attr('src',new_url);
	}
});


$('.ml_wp_face img').on('click',function(){
	if ($(this).parent().hasClass('face_actived')) {
		$(this).parent().removeClass('face_actived');
	}else{
		$(this).parent().addClass('face_actived');
	}
});
$('.ml_wp_design div').on('click',function(){
	if ($(this).parent().hasClass('design_actived')) {
		$(this).parent().removeClass('design_actived');
	}else{
		$(this).parent().addClass('design_actived');
	}
});


$('#back_to_top').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, 1500
		);
	});
$('.ml_mobile_search').on('click',function(){
	$('#ml_search').slideToggle('slow');
});

// Click hiện thành phố
$('.ml_select_city').on('click',function(){
	$('.ml_opition_city').slideToggle();
});
$('.ml_opition_city>ul>li').on('click',function(){
	var city = $(this).html();
	$('.ml_select_city>span').html(city);
	$('.ml_opition_city').css('display','none');
});
// check_box
$('.ml_user_check .check_here').on('click',function(){
	if ($(this).hasClass('ml_check_actived')) {
		$(this).removeClass('ml_check_actived');
	}else{
		$(this).addClass('ml_check_actived');
	}
});

// Click product
$('.ml_list_dot>li').bind('click mouseenter mouseleave',function(){
	var val_connect = $(this).data('connect');
	var num_slide = $(this).data('slide');

	$('.ml_list_dot>li['+'data-connect='+val_connect+']').removeClass('ml_li_pro_actived');
	$(this).addClass('ml_li_pro_actived');
	$('.ml_product li['+'data-product='+val_connect+'] .ml_abs_img').removeClass('ml_product_actived');
	$('.ml_product li['+'data-product='+val_connect+'] .'+num_slide).addClass('ml_product_actived');
	
});

$(window).on('resize',function(){
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (w > 768) {
		$('#ml_search').css('display','block');
	}else{
		$('#ml_search').css('display','none');
	}
});

$('#my-checkbox li').on('click',function(){
	$(this).find('input').click();
	if ($(this).hasClass('checked')) {
		$(this).removeClass('checked');
	}else{
		$(this).addClass('checked');
	}
})