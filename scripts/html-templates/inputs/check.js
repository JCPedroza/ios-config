const checkbox = (id, labelText) => {
  const container = document.createElement('div')
  container.classList.add('form-check')
  container.classList.add('form-switch')
  container.classList.add('form-checkbox-field')

  const input = document.createElement('input')
  container.classList.add('form-check-input')
  input.id = id
  input.type = 'checkbox'
  input.checked = true

  const label = document.createElement('label')
  label.classList.add('form-check-label')
  label.htmlFor = id
  label.innerText = labelText

  container.appendChild(input)
  container.appendChild(label)

  return container
}

export default checkbox
