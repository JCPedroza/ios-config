const text = (id, labelText) => {
  const container = document.createElement('div')
  container.classList.add('form-floating')
  container.classList.add('form-text-field')

  const input = document.createElement('input')
  input.classList.add('form-control')
  input.type = 'text'
  input.id = id
  input.placeholder = ''

  const label = document.createElement('label')
  label.htmlFor = id
  label.innerText = labelText

  container.appendChild(input)
  container.appendChild(label)

  return container
}

export default text
