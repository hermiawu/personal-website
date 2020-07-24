$(function () {
    
    // recentPro box emphasize effect
    $('#box1').mouseenter(function () {
        $(".recentPro:not(#box1)").stop().fadeTo(100,0.5);
    }).mouseleave(function () {
        $(".recentPro:not(#box1)").stop().fadeTo(100,1); 
    });
    
    $('#box2').mouseenter(function () {
        $(".recentPro:not(#box2)").stop().fadeTo(100,0.5);
    }).mouseleave(function () {
        $(".recentPro:not(#box2)").stop().fadeTo(100,1); 
    });
    
    $('#box3').mouseenter(function () {
        $(".recentPro:not(#box3)").stop().fadeTo(100,0.5);
    }).mouseleave(function () {
        $(".recentPro:not(#box3)").stop().fadeTo(100,1); 
    });
    
    $('#box4').mouseenter(function () {
        $(".recentPro:not(#box4)").stop().fadeTo(100,0.5);
    }).mouseleave(function () {
        $(".recentPro:not(#box4)").stop().fadeTo(100,1); 
    });
    
    $('#box5').mouseenter(function () {
        $(".recentPro:not(#box5)").stop().fadeTo(100,0.5);
    }).mouseleave(function () {
        $(".recentPro:not(#box5)").stop().fadeTo(100,1); 
    });
    
    //like button click animation
    $(".likeBtn").click(function(){
        $(".likeAnm").toggleClass("likeAnmC");
    });
    $(".likeAnm").on('animationend',function(){
        $(".likeAnm").toggleClass("likeAnmC");
    });

    //architecture page marker effect
    $("#leftColCh .chMarker span").delay(500).animate({
        left:"0"
    },350,"easeOutQuint");
    
    $("#rightLef .chMarker span").delay(1200).animate({
        left:"0"
    },500,"easeOutQuint");
    
    //homepage notes and strokes animation after two blocks animation
    $("#designbutton").on("animationend",function(){
        
        $("#stroke1 p").delay(200).animate({
            left:'50px',
            opacity:'1'
        }, 500,"linear");
        $("#stroke1 svg").css("display","block");
        TweenMax.staggerFromTo(".path1",0.15, {drawSVG:"0"}, {drawSVG:"100%",ease:"linear",delay:0.6},0.1);

        $("#stroke2 p").delay(1000).animate({
            top:'20px',
            opacity:'1'
        }, 500,"linear");
        $("#stroke2 svg").css("display","block");
        TweenMax.staggerFromTo(".path2",0.2, {drawSVG:"0"}, {drawSVG:"100%",ease:"linear",delay:1.5},0.15);

        $("#stroke3 p").delay(2000).animate({
            right:'30px',
            opacity:'1'
        }, 500,"linear");
        $("#stroke3 svg").css("display","block");
        TweenMax.staggerFromTo(".path3",0.15, {drawSVG:"0"}, {drawSVG:"100%",ease:"linear",delay:2.2},0.1);
    
        //homepage two blocks hover effect
        /* $("#left_arch").mouseenter(function(){
            $("#left_arch hgroup").toggleClass("enlarge");
        }).mouseleave(function(){
            $("#left_arch hgroup").toggleClass("enlarge");
        }); */
                           
    });
    
    //introduction accordion panels
    $("#accordion").accordion({
        collapsible: true,
        heightStyle:"fill",
        clearStyle:true,
        autoHeight:false
        
    });
    
    //introduction drawSVG animation on scrolling
    
    //on scrolling

});

     



    