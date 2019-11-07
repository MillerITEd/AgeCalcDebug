var ms_per_day = 1000 * 3600 * 24;
var birthday = new Date(2000, 1, 1);
var today = new Date();
//console.log(today);
console.log("Got the current date");
var daysOld = (today.getTime() - birthday.getTime())/ms_per_day;
console.log("Calculated days old");
daysOld = Math.round(daysOld);
document.write("You are " + daysOld + " days old");


