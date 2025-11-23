let myArray=[];
function listArray(){
	document.getElementById("main").innerHTML=myArray.toString();
}
function addNumber(){
	let num=Number(prompt("Enter number to array: "));
	myArray.push(num);
	listArray();
}

function arraySum(){
	sum=0;
	for(i=0;i<myArray.length;i++){
		sum+=myArray[i];
	}
	alert("Array sum is "+sum);
}

function arrayMean(){
	if (myArray.length===0){
		alert("Array is empty! Please add numbers to calculate mean.");
        return;
	}
	else{
		sum=0;
		for(i=0;i<myArray.length;i++){
		sum+=myArray[i];
		}
		mean=sum/myArray.length;
		alert("Array mean is "+mean);
	}
}