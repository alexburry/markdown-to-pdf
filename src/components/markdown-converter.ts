import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

function MarkdownConverter(buffer : string) {
  unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(buffer)
  .then((file) => {
    const htmlContent = String(file);

    const markdownStyles = `
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
          }
          h1 {
            color: #00509e;
            font-size: 24px;
          }
          p {
            font-size: 14px;
            line-height: 1.6;
          }
          code {
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
          }
        </style>
      `;
    const container = document.createElement('div');
    container.innerHTML = `
      <html>
        <head>${markdownStyles}</head>
        <body>
          <div>${htmlContent}</div>
        </body>
      </html>`
      container.style.position = 'absoulte';
      container.style.left = '-9999px'
      document.body.appendChild(container);

    html2canvas(container).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF("p", "pt", [500, 600]);

      doc.addImage(imgData, 'PNG', 10, 10, canvas.width /2, canvas.height /2);
      doc.save('MarkdownToPdf.pdf')

      document.body.removeChild(container)
    }).catch((e) => {
      console.error('Error rendering canvas', e)
    });
  })
  .catch((e) => { 
    console.error("Error generating PDF", e);
  });
}

export default MarkdownConverter;
