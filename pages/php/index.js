import Link from 'next/link'
import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  return (
    <div>
      <h1>
        <Link href="/">PHP</Link>
      </h1>
      <div className="syntax">
        <div>
          <h2>
            <a
              href="https://www.php.net/manual/es/language.operators.comparison.php"
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
                <td>{'<>'}</td>
                <td>Diferente</td>
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
              <tr>
                <td>??</td>
                <td>Fusión de null</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a
              href="https://www.php.net/manual/es/language.operators.logical.php"
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
                <td>And (y)</td>
              </tr>

              <tr>
                <td>and</td>
                <td>And (y)</td>
              </tr>
              <tr>
                <td>||</td>
                <td>Or (o inclusivo)</td>
              </tr>
              <tr>
                <td>or</td>
                <td>Or (o inclusivo)</td>
              </tr>
              <tr>
                <td>xor</td>
                <td>Xor (o exclusivo)</td>
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
              href="https://www.php.net/manual/es/language.operators.arithmetic.php"
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
                  <a
                    href="https://www.php.net/manual/es/language.operators.increment.php"
                    target="_blank"
                    rel="noreferrer">
                    Incremento
                  </a>
                </td>
              </tr>
              <tr>
                <td>--</td>
                <td>
                  <a
                    href="https://www.php.net/manual/es/language.operators.increment.php"
                    target="_blank"
                    rel="noreferrer">
                    Decremento
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
            <a
              href="https://www.php.net/manual/es/functions.user-defined.php"
              target="_blank"
              rel="noreferrer">
              Funciones
            </a>
          </h2>
          <CopyBlock
            text={`<?php
function square($number) {
  return $number * $number;
}
?>`}
            language="php"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://www.php.net/manual/es/control-structures.if.php"
              target="_blank"
              rel="noreferrer">
              if / elif / else
            </a>
          </h2>
          <CopyBlock
            text={`<?php
if ($a > $b) {
    echo "a es mayor que b";
} elseif ($a == $b) {
    echo "a es igual que b";
} else {
    echo "a es menor que b";
}
?>`}
            language="php"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://www.php.net/manual/es/control-structures.switch.php"
              target="_blank"
              rel="noreferrer">
              Switch
            </a>
          </h2>
          <CopyBlock
            text={`<?php
switch ($i) {
  case 0:
      echo "i es igual a 0";
      break;
  case 1:
      echo "i es igual a 1";
      break;
  default:
      echo "i no es igual a 0 ni 1";
}
?>`}
            language="php"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://www.php.net/manual/es/control-structures.for.php"
              target="_blank"
              rel="noreferrer">
              For Loop
            </a>
          </h2>
          <CopyBlock
            text={`<?php
for ($i = 1; $i <= 4; $i++) {
    echo $i;
}
?>`}
            language="php"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <div>
          <h2>
            <a
              href="https://www.php.net/manual/es/control-structures.while.php"
              target="_blank"
              rel="noreferrer">
              While Loop
            </a>
          </h2>
          <CopyBlock
            text={`<?php
/* ejemplo 1 */

$i = 1;
while ($i <= 10) {
    echo $i++;  /* el valor presentado sería
                   $i antes del incremento
                   (post-incremento) */
}

/* ejemplo 2 */

$i = 1;
while ($i <= 10):
    echo $i;
    $i++;
endwhile;
?>`}
            language="php"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://www.php.net/manual/es/language.oop5.php"
              target="_blank"
              rel="noreferrer">
              Class
            </a>
          </h2>
          <CopyBlock
            text={`<?php
class SimpleClass
{
    // property declaration
    public $var = 'a default value';

    // method declaration
    public function displayVar() {
        echo $this->var;
    }
}
?>`}
            language="php"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
