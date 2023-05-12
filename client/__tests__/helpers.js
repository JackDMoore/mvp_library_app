const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const renderDOM = async (filename) => {
    const filePath = path.join(process.cwd(), filename);
    const dom = await JSDOM.fromFile(filePath, {
      runScripts: 'dangerously',
      resources: 'usable'
    });
    return { dom, document: dom.window.document };
  };
module.exports = { renderDOM };
