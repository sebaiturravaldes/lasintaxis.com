import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  return (
    <div>
      <h1>Javascript</h1>
      <div className="syntax">
        <div>
          <h2>Operadores de comparación</h2>
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
          <h2>Operadores lógicos</h2>
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
          <h2>if / else if / else</h2>
          <CopyBlock
            text={`const age = 26;
if(age > 18) {
  // ...
} else if(age === 18) {
  //...
} else {
  // ...
}`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>Funciones</h2>
          <CopyBlock
            text={`function square(number) {
  return number * number;
}`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>For Loop</h2>
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
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <div>
          <h2>While Loop</h2>
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
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>Class</h2>
          <CopyBlock
            text={`class Rectangle {
  height;
  width;
  
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
