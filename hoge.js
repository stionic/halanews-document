const puppeteer = require('puppeteer');
const { PDFRStreamForBuffer, createWriterToModify, PDFStreamForResponse } = require('hummus');
const { WritableStream } = require('memory-streams');
const fs = require('fs');
const config = require('./docusaurus.config');

const mergePdfBlobs = (pdfBlobs) => {
  const outStream = new WritableStream();
  const [firstPdfRStream, ...restPdfRStreams] = pdfBlobs.map(pdfBlob => new PDFRStreamForBuffer(pdfBlob));
  const pdfWriter = createWriterToModify(firstPdfRStream, new PDFStreamForResponse(outStream));

  restPdfRStreams.forEach(pdfRStream => pdfWriter.appendPDFPagesFromPDF(pdfRStream));

  pdfWriter.end();
  outStream.end();

  return outStream.toBuffer();
};


let generatedPdfBlobs = [];

(async () => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  let nextPageUrl = 'http://localhost:3000/halanews-document/docs/introduction';

  while (nextPageUrl) {
    await page.goto(`${nextPageUrl}`, { waitUntil: 'networkidle2' });

    try {
      nextPageUrl = await page.$eval('.pagination-nav__item--next > a', (element) => {
        return element.href;
      });
    } catch (e) {
      nextPageUrl = null;
    }

    let html = await page.$eval('article', (element, config) => {
      let i;
      let aTag = element.querySelectorAll('a');
      if (aTag) {
        for (i = 0; i < aTag.length; i++) {
          if (aTag[i].getAttribute('href') && aTag[i].getAttribute('href').startsWith(config.baseUrl)) {
            aTag[i].setAttribute('href', config.url + aTag[i].getAttribute('href'));
          }
          if (aTag[i].classList.contains('anchor') || aTag[i].classList.contains('hash-link') || !aTag[i].getAttribute('href')) continue;
          aTag[i].innerText += ' [' + aTag[i].getAttribute('href') + '] ';
        }
      }

      return element.outerHTML;
    }, config);


    await page.setContent(html);
    await page.addStyleTag({ url: 'http://localhost:3000/halanews-document/styles.css' });
    await page.addScriptTag({ url: 'http://localhost:3000/halanews-document/styles.js' });
    const pdfBlob = await page.pdf({ path: "", format: 'A4', printBackground: true, margin: { top: 20, right: 15, left: 15, bottom: 20 } });

    generatedPdfBlobs.push(pdfBlob);
  }
  await browser.close();

  const mergedPdfBlob = mergePdfBlobs(generatedPdfBlobs);
  fs.writeFileSync('hoge-final.pdf', mergedPdfBlob);
})();