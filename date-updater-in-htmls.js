

<script>

// Скрипт для публикации в конец страницы об актуальной публикации материала каждые 10 дней согласно требованию по приказу "сведения об образовательной организации"
// В тело страницы вставляем элемент с id "date": 
//  <div id="date">Дата обновления: 29.3.2024</div>

// создаем переменную currentDate в ней вызывает функцию date; Далее в строке currentDate.setDate отнимаем пять дней (немножечко "состариваем" пост)
// далее объявляем перменные конкретно на год, месяц, день  и в переменной currentd через join, сливаем их точкой
// после чего в элемент getElementById с ИД date вставляем данные двух переменных: text + currentd
// Чтобы не вызывалась ошибка отсутствующего элемента  с ИД date, выполняем проверку, его наличиия на страничке, если есть, то выполняем или выдаем в  console.log("Element DOES NOT exist!"). "else" можно удалить (используется для отработки скарипта)
  
if (document.getElementById("date")) {
  const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() - 5);
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();
	const text = "Дата обновления: ";
	const currentd = [day, month, year].join('.');
	document.getElementById("date").innerHTML = text + currentd; //  "Дата обновления: 29.3.2024"
} else {
  console.log("Element DOES NOT exist!");
}	
</script>
