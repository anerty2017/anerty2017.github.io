//	числа
var numbers = document.getElementsByClassName('numbers');
//	операции
var operations = document.getElementsByClassName('operations');
//	очистка
var clear = document.getElementById('clear');
//	поле инпут
var entries = document.getElementById('entries');
//	кнопка равно
var calculate = document.getElementById('calculate');

var oper = "";
var firstNumber = 0;
var secondNumber = 0;
var operPress = false;


for(var i=0; i<numbers.length; i++){
	numbers[i].addEventListener("click", function(event){
		secondNumber = entries.value.substr(entries.value.indexOf(oper)+1,1)
		if (operPress) {
			entries.value += event.target.textContent;
			secondNumber += event.target.textContent;
			console.log(firstNumber);
			console.log(secondNumber);
			console.log(oper);
		} else {
			entries.value += event.target.textContent;
		}
	});
}

for(var i=0; i<operations.length; i++){
	operations[i].addEventListener("click", function(event){
		if(!hasMathSymbol() && entries.value){
			firstNumber = entries.value;
			oper = event.target.textContent;
			entries.value += oper;
			operPress = true;
		}
	});
}

clear.addEventListener("click", function(event){
		entries.value = "";		// очищает поле ввода
});

entries.addEventListener("click", function(event){
		console.log(event.target.textContent)
});

calculate.addEventListener("click", function(event){
	entries.value = "";
	switch (oper) {
		case '+': entries.value = parseFloat(firstNumber) + parseFloat(secondNumber);
			break;
		case '-': entries.value = parseFloat(firstNumber) - parseFloat(secondNumber);
			break;
		case '/': entries.value = parseFloat(firstNumber) / parseFloat(secondNumber);
			break;
		case '*': entries.value = parseFloat(firstNumber) * parseFloat(secondNumber);
			break;
		default: entries.value = "error";
			break;
	}
});

function hasMathSymbol(){
	var val = entries.value;
	if((val.indexOf('+') + 1) || (val.indexOf('-') +1)
		|| (val.indexOf('*')+1) || (val.indexOf('/')+1))
			return true;
	return false;
}