export default function Page() {
  return (
    <div>
      <h1>Javascript</h1>
      <h2>Operadores de comparación</h2>
      <table>
        <thead>
          <th>Operador</th>
          <th>Significado</th>
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

      <h2>if / else if / else</h2>
      <pre>
        const age = 26 if(age > 18)
        {
          // ...
        }
        else if(age === 18)
        {
          //...
        }
        else
        {
          // ...
        }
      </pre>
    </div>
  )
}
