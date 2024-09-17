import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

function MarkdownConverter(buffer : string) {
  unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(buffer)
  .then((file) => {
    console.log(String(file))
  })
}

export default MarkdownConverter;
