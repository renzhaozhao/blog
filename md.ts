import type { Plugin } from 'vite'
import MarkdownIt from 'markdown-it'

function VitePluginMarkdown(): Plugin {
  return {
    name: 'vite-plugin-md',
    enforce: 'pre',
    transform(raw, id) {
      if (id.endsWith('.md')) {
        return `export default ()=>(<>${new MarkdownIt().render(raw)}</>)`
      }
    },
    async handleHotUpdate(ctx) {
      if (ctx.file.endsWith('.md')) {
        const defaultRead = ctx.read
        ctx.read = async function () {
          return `export default ()=>(<>${new MarkdownIt().render(
            await defaultRead()
          )}</>)`
        }
      }
    },
  }
}

export default VitePluginMarkdown
