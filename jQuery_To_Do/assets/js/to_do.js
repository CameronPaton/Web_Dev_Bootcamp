//toggling task completion

$("ul").on("click", "li",  function(){
    $(this).toggleClass('completed');
});

//deleting to dos by clicking x

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut("500", function(){
        $(this).remove();
    })
    e.stopPropagation();
});

// creating to dos

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //grabbing new to do text from input
       var todotext = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span> X </span> " + todotext + "</li>");    
    }
});

