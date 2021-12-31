import Link from 'next/link'
import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  return (
    <div>
      <h1>
        <Link href="/">Python</Link>
      </h1>
      <div className="syntax">
        <div>
          <h2>
            <a href="" target="_blank" rel="noreferrer">
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
            <a href="" target="_blank" rel="noreferrer">
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
                <td>and</td>
                <td>AND (y)</td>
              </tr>
              <tr>
                <td>or</td>
                <td>OR (o)</td>
              </tr>
              <tr>
                <td>not</td>
                <td>Not (negación)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a href="" target="_blank" rel="noreferrer">
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
                <td>
                  <a href="" target="_blank" rel="noreferrer">
                    Residuo
                  </a>
                </td>
              </tr>
              <tr>
                <td>**</td>
                <td>
                  <a href="" target="_blank" rel="noreferrer">
                    Exponente
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a href="" target="_blank" rel="noreferrer">
              Funciones
            </a>
          </h2>
          <CopyBlock
            text={`def square(number):
  return number * number`}
            language="python"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a href="" target="_blank" rel="noreferrer">
              if / elif / else
            </a>
          </h2>
          <CopyBlock
            text={`if x > 50:
  // do something
elif x == 50:
  // do another thing
else:
  // do some default thing
`}
            language="python"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>For Loop</h2>
          <CopyBlock
            text={`fruits = ["apple", "banana", "cherry"]
for element in fruits:
  print(element)
  
for element in range(6):
  print(element)`}
            language="python"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <div>
          <h2>While Loop</h2>
          <CopyBlock
            text={`index = 1
while index < 6:
  print(index)
  index += 1`}
            language="python"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>Class</h2>
          <CopyBlock
            text={`class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)`}
            language="python"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
