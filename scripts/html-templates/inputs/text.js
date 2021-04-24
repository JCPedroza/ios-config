const text = (id, labelText) => {
  const container = document.createElement('div')
  container.classList.add('form-text-field')
  container.classList.add('form-floating')

  const label = document.createElement('label')
  label.htmlFor = id
  label.innerText = labelText

  const inText = document.createElement('input')
  inText.classList.add('form-control')
  inText.type = 'text'
  inText.id = id
  inText.placeholder = ''

  container.appendChild(inText)
  container.appendChild(label)

  return container
}

export default text
