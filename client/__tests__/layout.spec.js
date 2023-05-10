const { renderDOM } = require('./helpers');

let dom;
let document;

describe('index.html', () => {
    beforeEach(async() => {
        dom = await renderDOM('./index.html');
        document = await dom.window.document;
    })

    it('has a button', () => {
        const btn = document.querySelector('button');
        expect(btn).toBeTruthy()
    })


})
