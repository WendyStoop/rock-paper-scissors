document.querySelector(".game-grid").addEventListener("click",function(event){  
 //console.log (event)
 var option = event.target.id;
  //alert (option)

var computerChoices = ["rock","paper","scissors"];
var randomNr = Math.floor(Math.random()*3);
var computerChoice = computerChoices [randomNr];
//alert (computerChoice)

    console.log(computerChoice)
if (option === computerChoice){
    alert("draw")
   
}
else if((option === "rock" && computerChoice === "scissors") 
|| (option === "paper" && computerChoice === "rock" )
|| (option === "scissors" && computerChoice === "paper" )
){
    alert("You won")
    }

else

alert ("You lose!!!")


 
})