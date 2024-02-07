import { ChangeEvent } from "react"
import { FormDataState } from "src/App"

interface UserInputProps {
  formData: FormDataState
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function UserInput({
  formData,
  handleInputChange,
}: UserInputProps) {
  return (
    <section className="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment-input">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial-investment-input"
            name="initialInvestment"
            value={formData.initialInvestment}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <label htmlFor="annual-investment-input">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual-investment-input"
            name="annualInvestment"
            value={formData.annualInvestment}
            onChange={handleInputChange}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return-input">EXPECTED RETURN</label>
          <input
            type="number"
            id="expected-return-input"
            name="expectedReturn"
            value={formData.expectedReturn}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <label htmlFor="duration-inputs">DURATION</label>
          <input
            type="number"
            id="duration-inputs"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </p>
      </div>
    </section>
  )
}
