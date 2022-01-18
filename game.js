let random1 = Math.floor((Math.random())*6) +1 ;

let image1 = "images/img-" + random1 + ".jpeg";

document.getElementById("ans-1").setAttribute("src", image1);





let random2 = Math.floor((Math.random())*6) +1 ;

let image2 = "images/img-" + random2 + ".jpeg";

document.getElementById("ans-2").setAttribute("src", image2);



prompt("Who will Win this match??");
if(random1>random2){
    document.getElementById("final").innerHTML="Player-1 Wins!!"
    
}
else if(random1<random2){
    document.getElementById("final").innerHTML="Player-2 Wins!!"
    // alert("kailash wins!!")
}
else{
    document.getElementById("final").innerHTML="Match Draw!!!!!"
    
}