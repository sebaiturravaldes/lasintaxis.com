import Link from 'next/link'
import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  const language = 'sass'

  return (
    <div>
      <h1>
        <Link href="/">Sass</Link>
      </h1>
      <div className="syntax">
        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_de_comparaci%C3%B3n"
              target="_blank"
              rel="noreferrer">
              Operadores de comparación
            </a>
          </h2>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>==</td>
                <td>Igual</td>
              </tr>
              <tr>
                <td>!=</td>
                <td>No es igual</td>
              </tr>
              <tr>
                <td>===</td>
                <td>Estrictamente Igual</td>
              </tr>
              <tr>
                <td>!==</td>
                <td>Desigualdad estricta</td>
              </tr>
              <tr>
                <td>{'>'}</td>
                <td>Mayor que</td>
              </tr>
              <tr>
                <td>{'>='}</td>
                <td>Mayor o igual que</td>
              </tr>
              <tr>
                <td>{'<'}</td>
                <td>Menor que</td>
              </tr>
              <tr>
                <td>{'<='}</td>
                <td>Menor o igual que</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos"
              target="_blank"
              rel="noreferrer">
              Operadores lógicos
            </a>
          </h2>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&&</td>
                <td>AND (y)</td>
              </tr>
              <tr>
                <td>||</td>
                <td>OR (o)</td>
              </tr>
              <tr>
                <td>!</td>
                <td>Not (negación)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a
              href="https://sass-lang.com/documentation/operators/numeric"
              target="_blank"
              rel="noreferrer">
              Operadores aritméticos
            </a>
          </h2>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>+</td>
                <td>Suma</td>
              </tr>
              <tr>
                <td>-</td>
                <td>Resta</td>
              </tr>
              <tr>
                <td>*</td>
                <td>Multiplicación</td>
              </tr>
              <tr>
                <td>/</td>
                <td>División</td>
              </tr>
              <tr>
                <td>%</td>
                <td>Módulo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions"
              target="_blank"
              rel="noreferrer">
              Funciones
            </a>
          </h2>
          <CopyBlock
            text={`function square(number) {
  return number * number;
}`}
            language={language}
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://sass-lang.com/documentation/at-rules/control/if#else"
              target="_blank"
              rel="noreferrer">
              if / else if / else
            </a>
          </h2>
          <CopyBlock
            text={`if(x > 50) {
  // do something
} else if(x > 5) {
  // do another thing
} else {
  // do some default thing
}`}
            language={language}
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"
              target="_blank"
              rel="noreferrer">
              Switch
            </a>
          </h2>
          <CopyBlock
            text={`switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");`}
            language={language}
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for"
              target="_blank"
              rel="noreferrer">
              for Loop
            </a>
          </h2>
          <CopyBlock
            text={`for (let number = 0; number <= 4; number++) {
  console.log(number);
} 
console.log('End');

//0
//1
//2
//3
//4
//End
`}
            language={language}
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while"
              target="_blank"
              rel="noreferrer">
              While Loop
            </a>
          </h2>
          <CopyBlock
            text={`let number = 0;
while (number < 4) {
  console.log(number);
  number = number + 1; // number++;
} 

//0
//1
//2
//3
`}
            language={language}
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
