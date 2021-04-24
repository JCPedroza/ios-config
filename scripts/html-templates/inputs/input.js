import text from './text.js'
import check from './check.js'

const input = ({ type, id, label }) => {
  if (type === 'text') {
    return text(id, label)
  } else if (type === 'check') {
    return check(id, label)
  }
}

export default input
