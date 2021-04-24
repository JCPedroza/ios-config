const lineConsole = {
  type: 'text',
  id: 'line-console',
  label: 'line console ',
  template: (psw) => {
    const line1 = 'line console 0\n'
    const line2 = `password ${psw}\n`
    const rest = 'login\nexit\n'
    return `${line1}${line2}${rest}`
  }
}

const commands = [
  lineConsole
]

export default commands
