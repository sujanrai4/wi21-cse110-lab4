/*
        @Author: Sujan Rai
        Date: 1/28/2021
        Purpose: Created to print out the local time(HH:MM:SS) 
        every second
*/
function printTimeEverySecond() {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
        
}
setInterval(printTimeEverySecond, 1000);
