import { ChangeEvent, useState } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"
import InvestmentResults from "./components/InvestmentResults/InvestmentResults"

export type FormDataState = {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

export default function App() {
  const [formData, setFormData] = useState<FormDataState>({
    initialInvestment: 150,
    annualInvestment: 350,
    expectedReturn: 5.5,
    duration: 6,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    const valueAsNumber = parseFloat(value)

    if (isNaN(valueAsNumber)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: 0,
      }))
      return
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: Math.max(valueAsNumber, 0),
    }))
  }

  const inputIsValid = formData.duration >= 1

  return (
    <>
      <Header />
      <UserInput formData={formData} handleInputChange={handleInputChange} />
      {!inputIsValid ? (
        <p className="center" data-cy="results-error">
          Please enter a duration greater than zero
        </p>
      ) : (
        <InvestmentResults formData={formData} />
      )}
    </>
  )
}
