const fs = require('fs')
const path = require('path')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

console.log(html)


describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html.toString(), { url: 'http://localhost' });
    global.document = dom.window.document;
  });

describe('form', () => {
  let loginButton;
  let signUpButton;

  beforeEach(() => {
    loginButton = document.querySelector('button:nth-of-type(1)');
    signUpButton = document.querySelector('button:nth-of-type(2)');
  });

  describe('buttons', () => {
    test('login button exists', () => {
      expect(loginButton).toBeTruthy();
    });

    test('sign up button exists', () => {
      expect(signUpButton).toBeTruthy();
    });
  });

  test('login button has correct text', () => {
    expect(loginButton.textContent).toBe('Login');
  });

  test('sign up button has correct text', () => {
    expect(signUpButton.textContent).toBe('Sign up');
  });

  test('page title is correct', () => {
    expect(document.title).toBe('Florin Library');
  });

  test('login form exists', () => {
    const loginForm = document.querySelector('#post-form');
    expect(loginForm).toBeTruthy();
  });
});

  })
