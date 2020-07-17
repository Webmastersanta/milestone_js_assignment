/*......feetToMile program start......*/
function feetToMile(feet) {
    if(feet>0){
   var mile= feet*0.00018939;
   return mile;
  } 
  else{
    console.log("Sorry!The distance value should be a positive number.");
  }
}
var result= feetToMile(10);
console.log("The result is:");
console.log(result);
/*......feetToMile program end......*/

/*......woodCalculator program start......*/
function woodCalculator(chairamount,tableamount,bedamount) {
    var wood_for_chair= chairamount*1;
    var wood_for_table= tableamount*3;
    var wood_for_bed= bedamount*5;
    return total_wood= wood_for_chair+wood_for_table+wood_for_bed;
   } 
 var result= woodCalculator(1,2,3);
 console.log("The number of wood you have needed :");
 console.log(result);
/*......woodCalculator program end......*/

/*......brickCalculator program start......*/
 function brickCalculator(n) {
   
    if (n<=10)
    {
        brickamount= n*15*1000;
    }
    else if(n>10 && n<20)
    {
     brickamount_tenfloor= 10*15*1000;
     brickamount_twentyfloor= (n-10)*12*1000;
     brickamount=brickamount_tenfloor+brickamount_twentyfloor;
    }
    else{
     brickamount_tenfloor= 10*15*1000;
     brickamount_twentyfloor= 10*12*1000;
     brickamount_thirtyfloor= (n-20)*10*1000;
     brickamount=brickamount_tenfloor+brickamount_twentyfloor+ brickamount_thirtyfloor;
    }
    
    return brickamount;
   } 
 var result= brickCalculator(25);
 console.log("The result of brick calculator is :");
 console.log(result);
/*......brickCalculator program end......*/

/*......tinyFriend program start......*/
 var my_arry = ["shimu", "titu", "hossain", "altaf mahmud"];

function tinyFriend(arry) {
	return arry.reduce(function(previousname,currentname) {
		if (currentname.length < previousname.length) {
			return currentname;
		}
		else 
			return previousname;
    })
}
var result= tinyFriend(my_arry);
 console.log("The tiny name is :");
 console.log(result);
/*......tinyFriend program end......*/

