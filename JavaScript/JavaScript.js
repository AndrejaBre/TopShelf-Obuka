let sideMenu=false; 
let sideContact=false;




$(document).ready(function(){
    $('.icofont-navigation-menu').click(function(){
        $('.sidebar').toggleClass('slide_in');
        if(sideContact===true){
            $('.submenu_contact .sidebar_contact_submenu').removeClass('slide_in_sub2');
        sideContact=false;
        }
        if(sideMenu===true){
            $('.submenu_menu .sidebar_menu_submenu').removeClass('slide_in_sub1');
        sideContact=false;
        }
        
    });
//    Otvaranje glavnog sidebar-a
    
    
    $('.sidebar_menu_1 .icofont-rounded-right').click(function(){
        $('.submenu_menu .sidebar_menu_submenu').toggleClass('slide_in_sub1');
        sideMenu=true;
    });
//  Otvaranje sub-a za menu
    
    
    
    $('.sidebar_menu_2 .icofont-rounded-right').click(function(){
        $('.submenu_contact .sidebar_contact_submenu').toggleClass('slide_in_sub2');
        sideContact=true;
    });
//     Otvaranje suba za contact
    
    
    
    $('.sidebar_contact_submenu .icofont-rounded-left').click(function(){
        $('.submenu_contact .sidebar_contact_submenu').removeClass('slide_in_sub2');
        sideContact=false;
    });
//  Zatvaranje sub-a za contact
    
    
    $('.sidebar_menu_submenu .icofont-rounded-left').click(function(){
        $('.submenu_menu .sidebar_menu_submenu').removeClass('slide_in_sub1');
        sideContact=false;
    });
//  Zatvaranje sub-a za menu
    
    $('.icofont-navigation-menu').click(function(){
        $('.container').toggleClass('containerSlide');
    });
//  Slide-ovanje celog container-a na otvaranje sidemenu-a
    
    $('.slider_image').ready(function(){
    let moved=false;
        if(moved==false){
            setInterval(function(){
                $('.slider_image').toggleClass('slider_image_move');
            }, 500);
            moved==true;
        } //end of first if
        if(moved==true){
            
        }    
    });
//  Pomeranje slike preko slidera
    
    
    $('.single-item').slick({
        autoplay:true,
        autoplaySpeed:1500,
        fade:true,
        arrows:true,
        waitForAnimate:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        
    });
//Implementacija slick-a
    
});