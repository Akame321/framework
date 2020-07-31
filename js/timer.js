
$(function() {
   setTime();
   function setTime() {
      var date = new Date().getTime();
      var string = "Timestamp: "+date;
      setTimeout(setTime, 3000);
      $('#setTime').html(string);
   }
 });