import { FormDataState } from "src/App"
import { calculateInvestmentResults, formatter } from "../../util/investment"

interface InvestmentResultsProps {
  formData: FormDataState
}

export default function InvestmentResults({
  formData,
}: InvestmentResultsProps) {
  const annualData = calculateInvestmentResults(formData)

  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map(
          ({ year, interest, valueEndOfYear, annualInvestment }, id) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment
            const totalAmountInvested = valueEndOfYear - totalInterest

            return (
              <tr key={id}>
                <td>{formatter.format(year)}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          },
        )}
      </tbody>
    </table>
  )
}
