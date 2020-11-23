let openMenu = true; //меню открыто или закрыто
let lengthMas; //кол-во элементов в массиве
let mas = []; //массив чисел
let selectedAction; //выбранный пункт меню
let newElement; //новый добавляемый элемент в массив
let newElements = []; //массив новых элементов
let countElements; //кол-во добавляемых элементов в массив
let startPosition; //позиция, с которой начинаем добавление/удаление элементов
let endPosition; //позиция, до которой вырезаем
let addedElements = true; //добавляем или нет элементы
let deletedElements = false; //удаляем или нет элементы
let deleteCount; //кол-во элементов, которые удаляем
let i; //счётчик в цикле

do {	
	selectedAction = prompt(`Выберите операцию:\n
0. Создать массив;\n
1. Вывести массив;\n
2. Удалить 1-й элемент из массива;\n
3. Удалить последний элемент из массива;\n
4. Добавить элементы в начало;\n
5. Добавить элементы в конец;\n
6. Вырезать элементы;\n
7. Универсальный метод (удаление/добавление);\n
8. Завершить.`, "8");
	
	switch(selectedAction) {
		case "0" : lengthMas = +prompt("Кол-во элементов в массиве?");
							 for(i = 0; i < lengthMas; i++) {
							 		mas[i] = +prompt(`${i + 1}-й эл-т массива`);
							 }
							 break;
		case "1" : alert(`Массив: [${mas}]`);
							 break;
		case "2" : mas.shift();
							 break;
		case "3" : mas.pop();
							 break;
		case "4" : countElements = +prompt("Сколько добавляем элементов?");
							 for(i = 0; i < countElements; i++) {
								 newElement = +prompt(`${i + 1}-й эл-т`);
								 mas.unshift(newElement);
							 }
							 break;
		case "5" : countElements = +prompt("Сколько добавляем элементов?");
							 for(i = 0; i < countElements; i++) {
								 newElement = +prompt(`${i + 1}-й эл-т`);
								 mas.push(newElement);
							 }
							 break;
		case "6" : startPosition = +prompt("С какого по счёту элемента в массиве вырезаем?");
							 endPosition = +prompt("До какого элемента вырезаем?");
							 mas = mas.slice(startPosition, endPosition);
							 break;
		case "7" : startPosition = +prompt("С какого по счёту элемента начинаем?");
							 addedElements = confirm("Добавляем элементы?");
			 				 if(addedElements) {
									deletedElements = confirm("Удаляем элементы?");
							 		(deletedElements)? deleteCount = +prompt("Сколько удаляем?"): deleteCount = 0;
								 
								 	countElements = +prompt("Сколько добавляем?");
								  for(i = 0; i < countElements; i++) {
								 		newElements[i] = +prompt(`${i + 1}-й эл-т`);
										mas.splice(startPosition, 0, newElements[i]);
							 		}
								  mas.splice(startPosition, deleteCount);	 
							 }
							 else {
							 		deletedElements = confirm("Удаляем элементы?");
							 		(deletedElements)? deleteCount = +prompt("Сколько удаляем?"): deleteCount = 0;
								 	mas.splice(startPosition, deleteCount);
							 }
							 break;
		case "8" : openMenu = false;
							 break;
	}
} while(openMenu);