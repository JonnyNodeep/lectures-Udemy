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
// и поместить ее в строку терминала Не забываем про git pull
// Можно на прямую в  в GitHubе добавмть или изменить файлы и после этого обязательно нужно его смарджить с основной веткой