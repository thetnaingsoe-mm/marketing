/*------------------------nav_scroll----------------------*/
$(document).ready(function () {
    let screenHeight = $(window).height(); /*window height ဖမ်းခြင်း */
    /*console.log(screenHeight);*/
   $(window).scroll(function () {
        let currentPosition = $(this).scrollTop(); /*current position ဖမ်းခြင်း*/
       /*console.log(currentPosition);*/
       if(currentPosition > screenHeight-100){
            $('.nav_main_control').addClass("nav_scroll");
       }else {
           $('.nav_main_control').removeClass("nav_scroll");
           navActive("home"); /*nav_bar_active မှာ home ကို active ဖြစ်စေရန်*/

       }
   });
});

/*------------------------nav_bar_active_btn (with waypoint)----------------------*/
function navActive(current) {
    $('.nav-link').removeClass('current_active_section'); /* use active or current_active_section*/
    /* active သည် bootstrap ကကောင်ကိုသုံးခြင်းဖြစ်တယ်။ custom သုံးချင်ရင် css မှာ custom ရေးပြီး active နေရာမှာ
    custom ရေးပြီးတည်ဆောက်လို့ရသည်။ (Eg: current_active_section)
     */
    $(`.nav-link[href='#${current}']`).addClass('current_active_section');
}

function navScroll() {
    let currentSection =  $('section[id]');
    currentSection.waypoint(function (direction) {
        if(direction === 'down'){
            let currentSectionId = $(this.element).attr('id');
            navActive(currentSectionId);
        }
    },{offset:'150px'});

    currentSection.waypoint(function (direction) {
        if(direction === 'up'){
            let currentSectionId = $(this.element).attr('id');
            navActive(currentSectionId);
        }
    },{offset: '150px'});

}

navScroll();

/*------------------------create_menu_bar_cross(X)----------------------*/
$(".navbar-toggler").click(function () {
        let result = $(".navbar-collapse").hasClass("show");
        if (result){
            $(".menu_icon").addClass(`fa-bars`).removeClass(`fa-close`)
        }else {
            $(".menu_icon").addClass(`fa-close`).removeClass(`fa-bars`)
        }
    }
)

/*-------------------------------------Loading----------------------------*/
$(window).on("load",function () {
    $('.loader_container').fadeOut(500,function () {
        $(this).remove();
    });
})