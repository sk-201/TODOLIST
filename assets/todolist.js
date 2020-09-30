$("ul").on("click","li",function(){
$(this).toggleClass("select");

});
$("ul").on("click",".delete", function(event){
$(this).parent().fadeOut(function(){
	$(this).remove();
	
})
event.stopPropagation();
})
$("input").keypress(function(event){
	
if(event.which === 13)
{  var t=$(this).val();                     

$("ul").append('<li><span class="iconify delete" data-icon="octicon:trashcan" data-inline="false"></span>' + t + '</li>');
$(this).val("");
}
});
$("#hel").on("click", function(){
$("input").slideToggle();

});