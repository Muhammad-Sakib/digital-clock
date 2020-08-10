
function DateAndTime(){
    var days = new Date();
    
    //for time
    
    document.getElementById("minutes").innerHTML = days.getMinutes();
    document.getElementById("seconds").innerHTML = days.getSeconds();
    var hours = days.getHours();
    if( hours <12){
        document.getElementById("session").innerHTML = "AM";
    }
    else{
        document.getElementById("session").innerHTML = "PM";
        document.getElementById("hours").innerHTML = days.getHours()-12;
    }
    //for date
    document.getElementById("days").innerHTML = days.getDate();
    document.getElementById("months").innerHTML = days.getMonth()+1;
    document.getElementById("years").innerHTML = days.getFullYear();
    setTimeout('DateAndTime()',500);
}
