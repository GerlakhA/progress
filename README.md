# Управление состоянием кругового прогресса

Этот скрипт управляет состоянием кругового прогресса с помощью нескольких переключателей и полей ввода. Он включает три основных компонента:

1. Поле ввода для задания значения прогресса.
2. Переключатель для включения/выключения анимации.
3. Переключатель для скрытия/показания индикатора прогресса.

## Структура проекта

Файл состоит из HTML-кода, содержащего элементы интерфейса, и JavaScript-кода, управляющего взаимодействием с этими элементами.

## Основные функции

### Поле ввода значения

Поле ввода позволяет задать значение, которое будет использоваться для расчета угла заполнения кругового прогресса. При изменении значения в поле ввода индикатор прогресса мгновенно обновляется.

### Переключатель анимации

Этот переключатель включает или выключает анимацию.

### Переключатель видимости

Этот переключатель скрывает блок с прогрессом.

## Установка и запуск

1. Склонировать репозиторий:

```bash
git clone https://github.com/GerlakhA/progress.git && cd progress
```

2. открыть index.html файл в любом браузере или с помощью расширения Live Server:

## Примечания

- Значение поля ввода должно быть числом в пределах допустимого диапазона (например, от 0 до 100).

### Как использовать API класса `CircularProgress`:

Чтобы использовать API класса `CircularProgress`, выполните следующие шаги:

1. Импортируйте модуль `CircularProgress`:

```javascript
import CircularProgress from './circularProgress.js'
```

2. Создайте экземпляр класса `CircularProgress`:

```javascript
const progressBar = new CircularProgress(
	circularProgress,
	emptyCircularProgress,
	hiddenSwitch,
	animateSwitch,
	inputValue
)
```

3. Вызовите нужные методы API:

```javascript
- progressBar.initEvents(): Этот метод автоматически подключает события к элементам интерфейса
- progressBar.setValue(value): Устанавливайте значение прогресса.
- progressBar.toggleVisibility(): Скрывайте или показывайте прогрессбар.
- progressBar.oggleAnimation(): Включайте или выключайте анимацию прогресса.
```

4. Пример использования:

```javascript
import CircularProgress from './circularProgress.js'

window.onload = () => {
	let circularProgress = document.querySelector('.circular-progress')
	let emptyCircularProgress = document.querySelector('.circular-progress-empty')
	let hiddenSwitch = document.querySelector('#hidden')
	let animateSwitch = document.querySelector('#animate')
	let inputValue = document.querySelector('#value')

	const progressBar = new CircularProgress(
		circularProgress,
		emptyCircularProgress,
		hiddenSwitch,
		animateSwitch,
		inputValue
	)

	progressBar.initEvents()
}
```
