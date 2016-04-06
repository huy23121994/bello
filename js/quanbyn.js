
$(document).ready(function() {
    $('.q_questions p').on("click",function(){
        if($(this).find(".q_rotate").hasClass("q_active")){
            $(this).parent().find(".q_answer").css("display","none");
            $(this).find(".q_rotate").removeClass("q_active");
        }else{
            $(this).parent().find(".q_answer").css("display","block");
            $(this).find(".q_rotate").addClass("q_active");   
        }
    });
    if (matchMedia) {
        var mq = window.matchMedia("(min-width: 992px)");
        var mq2 = window.matchMedia("(min-width: 550px) and (max-width:992px)");
        var mq3 = window.matchMedia("(max-width : 550px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
        mq2.addListener(WidthChange2);
        WidthChange2(mq2);
        mq3.addListener(WidthChange3);
        WidthChange3(mq3);
    }
    function WidthChange(mq) {
        if (mq.matches) {
            var swiper = new Swiper('#q_grid-section .swiper-container2', {
                nextButton: '.q_next2',
                prevButton: '.q_prev2',
                slidesPerView: 5,
                slidesPerGroup : 5,
                paginationClickable: true,
                loop: true,
                speed : 1000
            });
            var swiper2 = new Swiper('#q_grid-section .swiper-container', {
                nextButton: '.q_next1',
                prevButton: '.q_prev1',
                slidesPerView: 5,
                slidesPerGroup : 5,
                paginationClickable: true,
                loop: true,
                speed : 1000
            });
             $('.swiper-container3 .q_prev3').hide();
             $('.swiper-container3 .q_next3').hide();
            var swiper3 = new Swiper('#q_grid-section .swiper-container3', {
                slidesPerView: 6,
                slidesPerGroup : 6,
                loop : true,
                speed : 1000
            });
            $('.q_detail p').show();
            $('.q_detail').css("height","200px");
        }
    }
    function WidthChange2(mq2){
        if (mq2.matches) {
            var swiper = new Swiper('#q_grid-section .swiper-container2', {
                nextButton: '.q_next2',
                prevButton: '.q_prev2',
                slidesPerView: 3,
                paginationClickable: true,
                loop: true,
                speed : 1000
            });
            var swiper2 = new Swiper('#q_grid-section .swiper-container', {
                nextButton: '.q_next1',
                prevButton: '.q_prev1',
                slidesPerView: 3,
                paginationClickable: true,
                loop: true,
                speed : 1000
            });
            $('swiper-container3 span').show();
            var swiper3 = new Swiper('#q_grid-section .swiper-container3', {
                nextButton: '.q_next3',
                prevButton: '.q_prev3',
                slidesPerView: 3,
                speed : 1000
            });
            $('.q_detail p.des1').hide();
            $('.q_detail').css("height","80px");
        }
    }
    function WidthChange3(mq3){
        if (mq3.matches) {
            var swiper = new Swiper('#q_grid-section .swiper-container2', {
                nextButton: '.q_next2',
                prevButton: '.q_prev2',
                slidesPerView: 1,
                paginationClickable: true,
                loop: true,
                speed : 1000
            });
            var swiper2 = new Swiper('#q_grid-section .swiper-container', {
                nextButton: '.q_next1',
                prevButton: '.q_prev1',
                slidesPerView: 1,
                paginationClickable: true,
                loop: true,
                speed : 1000
            });
            $('.swiper-container3 span').show();
            var swiper3 = new Swiper('#q_grid-section .swiper-container3', {
                nextButton: '.q_next3',
                prevButton: '.q_prev3',
                slidesPerView: 1,
                speed : 1000
            });
            $('.q_detail p.des1').hide();
            $('.q_detail').css("height","80px");
        }
    }
});