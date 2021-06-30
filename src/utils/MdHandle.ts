// interface HandleType{
//   ctx: string
// }

class MdHandle {
  ctx: string

  constructor(ctx: string) {
    this.ctx = ctx
  }

  getContent(): string {
    const split = this.ctx.split('---')
    if (split.length === 1) {
      return split[0]
    }

    return split[split.length - 1]
  }

  getDate(): string {
    const split = this.ctx.split('---')
    if (split.length === 1) {
      return ''
    }
    const arr = split[1].match(getYamlReg('date'))
    if (arr) {
      return arr[2]
    }
    return ''
  }
}

function getYamlReg(name: string): RegExp {
  const reg = new RegExp(`(^|)${name}: ([^\\n]*)(\\n|$)`)

  return reg
}

export default MdHandle
