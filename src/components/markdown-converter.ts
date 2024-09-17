import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import jsPDF from 'jspdf'

function MarkdownConverter(buffer : string) {
  unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(buffer)
  .then((file) => {
    const htmlContent = String(file);
    console.log(htmlContent)

    const doc = new jsPDF("p", "pt", [500, 600]);

    doc.html(`<div style="width:1350px">${htmlContent}</div>`, {
      callback: (pdf) => {
        pdf.save("MarkdownToPdf.pdf");

      },
      margin: [10, 10, 10, 10],
    });
  })
  .catch((e) => { 
    console.error("Error generating PDF", e);
  })
}

export default MarkdownConverter;
