

//dropdown

define(['jquery'],function($){

   
   console.log('dropdown js ..');

  var topNav = {
  	visible : false ,
  	dropContainer : 'h5#sub-menu-head',

  	hasSubmenu : function(clzz){
  		if(clzz === 'h-menu') return true;
  		else return false;
  	}
  };

   
 topNav.toggleDropDown =  function(){
      
      $('#dropdown').on( {
	   'mouseenter':function() { console.log(""); },
	   'mouseleave':function() { 
			   	$(this).css({
	           	"opacity":'0',
	           	"visibility":"hidden"
	           });
			   	topNav.visible =false; 
			   }
            
	});
      	 

	$('ul#nav-desktop li a').on({

		'mouseenter':function(){
			var clz = $(this).attr('class');

			if(topNav.hasSubmenu(clz)){
				if(!topNav.visible)  {     
				$('#dropdown').css({ "opacity":'1',"visibility":"visible" });
				topNav.visible =true;
				}

			}
			else{
			  $('#dropdown').css({"opacity":'0', "visibility":"hidden"  });
			  topNav.visible =false; 
			}

		}

	});




  };

 return topNav;
});