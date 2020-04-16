//toggling task completion

$('li').click(function(){
    $(this).toggleClass('completed');
});

//deleting to dos by clicking x

$("span").click(function(e){
    $(this).parent().fadeOut("500", function(){
        $(this).remove();
    })
    e.stopPropagation();
});

