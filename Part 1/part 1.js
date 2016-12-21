//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
function makefriend(name,age,education,nationality){
	return{
		name:name,
		age:age,
		education:education,
		nationality:nationality
	}
}
var friend1=makefriend('ahmad',26,'it','jordanian')
var friend2=makefriend('moamar',40,'math','syrian')
function showFriend(friend){
	return friend.name+ ' '+'with the age of '+friend.age+' '+'and with '+friend.education+' '+'education'
}
var friends=[friend1,friend2]
function averageStudents(friends){
	var res=0
	for(var i=0;i<friends.length;i++){
      res+=friends[i].age/friends.length
	}
	return res
}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function squared(x){
	return x*x
}
function rangeSquared(a,b){
	var arr=[]

	for( var i=a;i<=b;i++){
		if(i%2===0)
		arr.push(squared(i))
		
	}
	
return arr
}




/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function leaders(array){
	var lead=[]
	var l=array.length
	for(var i=0;i<l;i++){
		

		if(array[i]>array[i+1]){
	   lead.push(array[i])

		
			
		}

	}
				return lead

}
