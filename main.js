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
