$(document).ready(function(){
  $( "#hamb" ).click(function() {
    $(".menuResp").toggle().css("flex-direction", "column")
  });
});

$(document).ready(function(){
  $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
        $(subMenu)
        .each(function(i,el){
            $(this).append(data[i].name);
           $(this).prop("title",data[i].address.city );
       });
 
         });
         
     $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
       $('.descr')
       .each(function(i,el){
           $(this).append(data[i].address.street);
         
       });
 
         });

         $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
           $('.price').each(function(i,el){
             var price = (data[i].address.suite).replace( /^\D+/g, '');
               $(this).append(price);
             
           });
          
             });

             

 })

 $(function(){  
  $('.content').fadeIn('slow');
});

$(document).ready(function() {

    $(window).scroll( function(){
 
        $('figure').each( function(i){
            
            var sottoImm = $(this).position().top + $(this).outerHeight();
            var fineFinestra = $(window).scrollTop() + $(window).height();
 
            if( fineFinestra > sottoImm ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
   
});

