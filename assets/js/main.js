function showTime() {
   let date = new Date();
   let h = date.getHours();
   let m = date.getMinutes();
   let s = date.getSeconds();
   let session = "PM";

   h = (h<10)?"0"+h:h;
   m = (h<10)?"0"+m:m;
   s = (h<10)?"0"+s:s;

   document.getElementById("DigitalClock").innerHTML = h + ":" + m + ":" + s + "" + session;
   setTimeout(showTime,1000)
}
showTime();