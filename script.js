$(function() {
    $('#toggleThis').click(function(){
        $('#content').slideToggle(300, callback);
    });
});
window.i = 0;
function callback(){
    ++i;
    console.log('slide toggled'+i+'times');
}