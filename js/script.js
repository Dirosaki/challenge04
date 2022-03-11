const form = document.querySelector('form')

const handleSubmit = (event) => {
	event.preventDefault()

	let formResult
	Array.from(event.target).map((item) => {
		if (item.tagName === 'INPUT') {
			const inputValue = item.type !== 'checkbox' ? item.value : item.checked
			formResult = { ...formResult, [item.name]: inputValue }
		}
	})

	console.log(formResult)
}
