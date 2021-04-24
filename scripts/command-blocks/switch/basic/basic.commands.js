const hostname = {
  type: 'text',
  id: 'switch-basic-hostname',
  label: 'hostname',
  template: (hostname) => `hostname ${hostname}\n`
}

const enableSecret = {
  type: 'text',
  id: 'switch-basic-enable-secret',
  label: 'enable secret',
  template: (psw) => `enable secret ${psw}\n`
}

const bannerMotd = {
  type: 'text',
  id: 'switch-basic-banner-motd',
  label: 'banner motd',
  template: (motd) => `banner motd #${motd}#\n`
}

const pswEncrypt = {
  type: 'check',
  id: 'switch-basic-psw-encrypt',
  label: 'service password-encryption',
  template: (isOn) => isOn ? 'service password-encryption\n' : ''
}

const noIpLookup = {
  type: 'check',
  id: 'switch-basic-no-ip-lookup',
  label: 'no ip domain-lookup',
  template: (isOn) => isOn ? 'no ip domain-lookup\n' : ''
}

const commands = [
  hostname,
  enableSecret,
  bannerMotd,
  pswEncrypt,
  noIpLookup
]

export default commands
