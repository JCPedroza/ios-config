import commands from './basic.commands.js'
import input from '../../../html-templates/inputs/input.js'

const mapCmdToField = (cmd) => {
  return {
    element: input(cmd),
    template: cmd.template
  }
}

const fields = commands.map(mapCmdToField)
