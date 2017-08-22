var runReg =  true;
var runAge = 25;
let raceNumber = Math.floor(Math.random()*1000);
if (runAge > 18 && runReg == true && raceNumber < 1000) {
    console.log("You will run race at 9:30 am " + raceNumber);
    
    }else if(runReg == true || raceNumber < 1000 ) {
      console.log("you will race at 11:00 am");
      
    }else if(runAge < 18 && raceNumber > 1000) {
      console.log("You will race at 12:30 pm"); 
    }else{
        console.log(" If unsure when you are running check registration desk");
         
 }
