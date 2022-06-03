

let time =document.getElementById("time");
let date =document.getElementById("date")
 setInterval (()=>{
     tody()
 },1000)

//  this built in funtion allow me to call the funtion after avery second. 

function tody(){
    let timeInTheComputer =new Date()
    // let me declare the number i have written her after the arrays 
    // of days and months doesn't mean its index but 
    // we would have function that will generate a them and give us back a number starting 
    // from zero upto the end of both.... so, we will exract from the functions and array as index 
    // to donate us the day or the month on that positon. 
    let days =["Sat","Sun", "Mon","Tue", "Wed","Thur","Fri"]
    //          1       2      3    4       5       6   7
    let months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    //             1    2       3   4       5     6     7     8     9    10     11  12
    
    let completeTime =`${timeInTheComputer.getHours()<=9? "0"+timeInTheComputer.getHours():timeInTheComputer.getHours()} :
     ${timeInTheComputer.getMinutes()<=9?"0"+timeInTheComputer.getMinutes():timeInTheComputer.getMinutes()} :
      ${timeInTheComputer.getSeconds()<=9?timeInTheComputer.getSeconds():timeInTheComputer.getSeconds()}`
    

    let completeDate =`${days[timeInTheComputer.getDay()+1]},
     ${timeInTheComputer.getDate()} ${months[timeInTheComputer.getMonth()]} ${timeInTheComputer.getFullYear()}`

    // the function getDay returns the a number of days starting from Monday and we need to tackle that problem
    // and start it from Starday as we are muslims. our week  starts from there.
    // ok let's do it .

    time.innerHTML =completeTime;
    date.innerHTML =completeDate;
}



// This simple Project i will post it on my GitHub 
// my GitHub-just write on   any prowser (himadwise/github)
// and you will see me soon.
// thanks for more.....😍😘🥰😍(❁´◡`❁)