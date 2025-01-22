export default class CircularProgress {
	constructor(
		circularProgress,
		emptyCircularProgress,
		hiddenSwitch,
		animateSwitch,
		inputValue
	) {
		this.circularProgress = circularProgress
		this.emptyCircularProgress = emptyCircularProgress
		this.hiddenSwitch = hiddenSwitch
		this.animateSwitch = animateSwitch
		this.inputValue = inputValue

		this.start = 1
		this.end = 100
	}

	initEvents() {
		this.inputValue.addEventListener('input', () => {
			this.setValue(this.inputValue.value)
		})

		this.hiddenSwitch.addEventListener('change', () => {
			if (this.hiddenSwitch.checked) {
				this.circularProgress.style.background = 'transparent'
			} else {
				this.circularProgress.style.background = `conic-gradient(#005dff ${
					this.start * 3.6
				}deg, #eef3f6 0deg)`
			}
		})

		this.animateSwitch.addEventListener('change', () => {
			if (this.animateSwitch.checked) {
				this.circularProgress.classList.add('animate-progress')
			} else {
				this.circularProgress.classList.remove('animate-progress')
				this.circularProgress.style.background = `conic-gradient(#005dff ${
					this.start * 3.6
				}deg, #eef3f6 0deg)`
			}
		})
	}

	setValue(value) {
		if (isNaN(Number(value))) {
			value = 0
		}

		if (typeof value === 'string' && value.startsWith('0') && value.length > 1) {
			value = value.slice(1)
		}

		if (value < 0 || value > this.end) {
			value = Math.min(Math.max(value, 0), this.end)
		}

		this.start = value
		this.inputValue.value = value
		this.circularProgress.style.background = `conic-gradient(#005dff ${
			this.start * 3.6
		}deg, #eef3f6 0deg)`
	}

	toggleVisibility() {
		this.hiddenSwitch.checked = !this.hiddenSwitch.checked
		this.hiddenSwitch.dispatchEvent(new Event('change'))
	}

	toggleAnimation() {
		this.animateSwitch.checked = !this.animateSwitch.checked
		this.animateSwitch.dispatchEvent(new Event('change'))
	}
}
