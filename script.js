4+3;
if(4+3===7){
	alert("you are smart!");
	console.log("helloooooo");
}
function sale(){
	console.log("sale is on!");
}
sale();
function sing(song){
	console.log(song);
}
sing("laaaaaa diiii daaaa");
sing("heeeeeeee heeeee ");
function multiply(a,b){
	console.log(a*b);
}
multiply(5,10);
function subtract(a,b){
	if(a>10 || b>10){
		return "thats tooo hard";
	}else{
		return a-b;
	}
	return a-b;
}
subtract(5,10);
var total=multiply(4,5);
alert(total);
var list=["tiger","cat","bear","bird"];
console.log(list[1]);
//var list=[["tiger","cat","bear","bird"]];
//console.log(list[0][2]);
list.shift();
list.pop();
list.push("elephant");
console.log(list);
list.concat(["bee","deer"]);
list.sort();
var mylist=["cat","bear","elephant","bee","dear"];
var myNewlist=mylist.concat(["monkey"]);
console.log(myNewlist);
console.log(mylist);
