// JavaScript File
$( document ).ready(function() {
$(function() {
    var  checkout = [];
    $('a').click(function() {
      var item = this.innerText;
      $(`#${item}`).removeClass('hide');
      checkout.push(item);
      console.log(checkout);
    });
    $('img').click(function() {
      var index = checkout.indexOf(this.id);
      $(this).addClass('hide');
      checkout.splice(index, 1);
      console.log(checkout);
    });
    $('button').click(function() {
       if (this.id === "no") {
           $('#result').text("Pay Me!");
       } else {
           $('#result').text(checkout.join(', ') + " coming right at ya!");
       }
    });
    
});
});
