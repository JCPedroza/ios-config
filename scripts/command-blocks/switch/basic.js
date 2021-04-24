import inText from '../../html-templates/inputs/text.js'

const prefix = 'swt-basic-'

const hostname = (name) => `hostname ${name}\n`
const enablePsw = (psw) => `enable secret ${psw}\n`
const motd = (motd) => `banner motd #${motd}#\n`

const pswEncrypt = (checked) => checked ? 'service password-encryption\n' : ''
const noIpLook = (checked) => checked ? 'no ip domain-lookup\n' : ''

const lineConsole = (psw) => {
  return `
    line console 0
    password ${psw}
    login
    exit
  `
}

const inHostname = {
  element: inText(`${prefix}'hostname'`, 'hostname'),
  command: hostname
}

export default inHostname
