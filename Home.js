// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 265 || document.documentElement.scrollTop > 265) {
//     document.getElementsByClassName("service1").style.top = "0";
//   } else {
//     document.getElementsByClassName("service1").style.top = "-85px";
//   }
// }
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 285 || document.documentElement.scrollTop > 285) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  } 


  $(document).ready(function(){
    $('.Whatforyou').waypoint(function(direction){
      $('.Whatforyou').addClass('animated lightSpeedIn')
    },{
      offset: '300px'
    })

    $('.flip-card-ani1').waypoint(function(direction){
      $('.flip-card-ani1').addClass('animated fadeInLeft')
    },{
      offset: '50%'    
    })

    $('.flip-card-ani1').waypoint(function(direction){
      $('.flip-card-ani1').addClass('animated fadeInLeft')
    },{
      offset: '50%'    
    })

    $('.flip-card-2-ani').waypoint(function(direction){
      $('.flip-card-2-ani').addClass('animated fadeInRight')
    },{
      offset: '50%'    
    })

    $('.flip-card-2-ani').waypoint(function(direction){
      $('.flip-card-2-ani').addClass('animated fadeInRight')
    },{
      offset: '50%'    
    })


    $('.Student-animate').waypoint(function(direction){
      $('.Student-animate').addClass('animated fadeInRight')
    },{
      offset: '70%'    
    })
    $('.Student-Img-animate').waypoint(function(direction){
      $('.Student-Img-animate').addClass('animated fadeInUp')
    },{
      offset: '70%'    
    })
    // $('.Soc-animate').waypoint(function(direction){
    //   $('.Soc-animate').addClass('animated fadeInRight')
    // },{
    //   offset: '50%'    
    // })
    // $('.Tech-animate').waypoint(function(direction){
    //   $('.Tech-animate').addClass('animated fadeInRight')
    // },{
    //   offset: '60%'    
    // })
    // $('.Manage-animate').waypoint(function(direction){
    //   $('.Manage-animate').addClass('animated fadeInRight')
    // },{
    //   offset: '70%'    
    // })
    // $('.resp-animate').waypoint(function(direction){
    //   $('.resp-animate').addClass('animated fadeInRight')
    // },{
    //   offset: '80%'    
    // })




  })