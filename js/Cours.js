'use strict'; 
// Деректива, которая ставится в начале документа и означающая, что мы 
//работем в стандарте es6. Некоторые ошибки прошлого стандарта работать не будут.





// Классификация типов данных в JavaScript
 let person = {
	name: 'Jim',
	age: 35,
	inMarried: false

 };
 console.log(person.age);
 console.log(person['name']);
 let messi =['plamp.png','aplle.jpg','melon.bmp'];
 console.log(messi[0]);

//  alert('Приветики!!!');
//  let answer = confirm('Are you ready?');
//  console.log(answer);

 let answer = prompt('Are you 18 years old?', 'Yes/No');
 console.log(typeof(messi));

 let incr = 10,
	  decr = 10;

// incr++;
// decr--;	  
// console.log (++incr); // префиксный инкремент
// console.log (--decr);  //  префиксный декремент
console.log (incr++); // постфиксный инкремент
console.log (decr--);  //  постфиксный декремент
console.log(5%2);  // выводит целый остаток (в двном случае 1);
console.log('2'== 2); // оператор сравнения по значению ( в консоль выведется true);
console.log('2'=== 2); // оператор сравнения по типам данных ( в консоль выведется false);

let isChacked = true,
	 isClosed = true;
	 
// console.log(isChacked && isClosed);  
// оператор "И" выведет в консоль true только
//  если "и" первая "и" вторая переменная имеют одинаковое значение (иначе false)!!!
// console.log(isChacked || isClosed); 
// оператор "ИЛИ" выведет в консоль true тоg
//  если одна из переменных имеет  значение true.
console.log(isChacked || !isClosed); // оператор отрицания "!" меняет значение переменной на противоположное

// Д/з Изучить таблицу приоритетного использования операторов

//Работа с GITHUB http://gitnowto курс обучения ПРОЙТИ!!!!
// Чтобы открыть Git в папке с проектом нежно открыть окно команд (SHIFT+ ПКМ) 
//git add -A > git commit -a -m"...">git status> git push
// При необходимости работы с репозиторием с другого компьютера нужно взять ссылку с GitHub (clone or download)
// и поместить ее в строку терминала  в виде git clone "ссылка".
// Можно на прямую в  в GitHubе добавмть или изменить файлы и после этого обязательно нужно его смарджить с основной веткой


//Условия 
//Помогают отаправить программу по правильному пуити в зависимости от обстоятельств.
//любое условие начинается с оператора if(условие){действие} если это действие не выполняется, то можно добавить оператор else {}
if (2+4==7) {
	console.log("Верно");
} 
else {
	console.log("Подумай!!!");
}
// if преобразует значение в скобках в логический или булиновый тип данных(true/false)


let num = 50;
if (num < 49) {
console.log('Не достаточно');
}
//  //любое условие начинается с оператора if(условие){действие} если это действие не выполняется, то можно добавить оператор else {}, 
//  // также можно использовать else if - вложенность условий..
else if (num > 100) {
	console.log('Too much!!!');
} else {
	console.log ('IT is enough!!!');
};
// тернарный оператор, в скобочках указывается условие, после знака ? и : указывается одно из возвращаемых значений.
(num==50) ? console.log('Не достаточно'): console.log ('IT is enough!!!');

let num = 50;
switch (num) {
	case num < 49:
		console.log('Ещё!!');
		break;
	case num > 100:
		console.log('Себе!!');
		break;	
	case num > 80:
        console.log('Ещё ceбе!!');
		break;
	case 50:
		// если мы хотим в swich-е сравнить точные значения, то нужно записывать без перемнной и ==
		console.log ('Харэ');
		break;
	default :
		console.log ('problems!!!')	
		break;
	}


//TODO: ЦИКЛЫ   3 вида циклов
//1) while самый простой, сразу проверяет..
let num = 50;
while (num < 55) {
	console.log(num);
	num++;
}

//2) do (призыв к действию)сначала делает, затем проверяет и если нужно завершает цикл( выходит из цикла)
let num = 50;
do {
	console.log(num);
	num++;
}
while(num < 55);
// Самый часто используемый цикл FOR 

for (i = 1; i <8; i++) {
	if (i == 6) {
		continue
	}
	console.log(i);
}
