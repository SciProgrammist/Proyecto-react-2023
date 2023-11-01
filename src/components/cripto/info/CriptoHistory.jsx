import {parseFloatNumber} from "../../../helpers/numbers.js"
const CriptoHistory = ({history}) => {

  return (
  <div className="history">
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {history.map(({date, priceUsd, time}) => {
          return (
            <tr key={time}>
              <td className="label">{new Date(date).toDateString()}</td>
              <td className="price">{parseFloatNumber(priceUsd, 3)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  )}

export default CriptoHistory