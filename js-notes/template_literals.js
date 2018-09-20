const name = 'Aleks';
const age = 35;

function hello(name) {
  return 'Hello ' + name;
}

let html;

// ES5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li></ul>';

// ES6

html =  `<ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>${hello(name)}!</li>
        `;

document.body.innerHTML = html;
