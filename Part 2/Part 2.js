




function each(coll, f) {
if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
         f(coll[i], i);
    }
} else {
    for (var key in coll) {
         f(coll[key], key);
    }
 }
}


//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....
function player(name){
	var play={}
play.name=name,
	play.addInfo=addInfo,
	play.increaseLevel=increaseLevel,
	play.isAvailable=isAvailable
return play

}

var addInfo=function(age, position, level, availability ){
	return {
		name:this.name,
		age:age,
		position:position,
		level:level,
		availability:availability
	}
}
var increaseLevel=function(n){
	
	return this.name +' has a level equal to '+n
}
var isAvailable=function(str){
	if(str===this.name){
		return true
	}
	return false
}
var arrayOfPlayers=[p1,p2]
var p1=player('hsan')
p1.addInfo(25,'goaler',2,'true')
 var p2=player('mohammad')
 p2.addInfo(32,'defenser',3,'false')

function declevel(arrayOfPlayers){
	each(arrayOfPlayers,function(player){
if(player.age>30){
	player.level-1
}
	})
	return player
}
function sortPlayerBy(arrayOfPlayers,key){
	each(arrayOfPlayers,function(player){
		return player.key
	})
}



	//this.name+' ,old is'+age +' and he is '+position+' and  his level is'+level+','+availability;//

