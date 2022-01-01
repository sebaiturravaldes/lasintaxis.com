import Link from 'next/link'
import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  return (
    <div>
      <h1>
        <Link href="/">Java</Link>
      </h1>
      <div className="syntax">
        <div>
          <h2>
            <a
              href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html"
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
              href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html"
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
              href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html"
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
                <td>
                  <a href="" target="_blank" rel="noreferrer">
                    Residuo
                  </a>
                </td>
              </tr>
              <tr>
                <td>++</td>
                <td>
                  <a href="" target="_blank" rel="noreferrer">
                    Incremento
                  </a>
                </td>
              </tr>
              <tr>
                <td>--</td>
                <td>
                  <a href="" target="_blank" rel="noreferrer">
                    Decremento
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
            text={`public class Main {
  static void myMethod() {
    // code to be executed
  }
}`}
            language="java"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a href="" target="_blank" rel="noreferrer">
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
            language="java"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a href="" target="_blank" rel="noreferrer">
              Switch
            </a>
          </h2>
          <CopyBlock
            text={`int day = 4;
switch (day) {
  case 6:
    System.out.println("Today is Saturday");
    break;
  case 7:
    System.out.println("Today is Sunday");
    break;
  default:
    System.out.println("Looking forward to the Weekend");
}
// Outputs "Looking forward to the Weekend"
`}
            language="java"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>For Loop</h2>
          <CopyBlock
            text={`for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

//0
//1
//2
//3
//4
`}
            language="java"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <div>
          <h2>While Loop</h2>
          <CopyBlock
            text={`int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}

//0
//1
//2
//3
//4
`}
            language="java"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>try...catch</h2>
          <CopyBlock
            text={`public class Main {
  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    } finally { // optional
      System.out.println("The 'try catch' is finished.");
    }
  }
}`}
            language="java"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>Class</h2>
          <CopyBlock
            text={`public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`}
            language="java"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
