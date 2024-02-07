import { ChangeEvent, useState } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"

export type FormDataState = {
  initialInvestment: string
  annualInvestment: string
  expectedReturn: string
  duration: string
}

export default function App() {
  const [formData, setFormData] = useState<FormDataState>({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
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
  return (
    <>
      <Header />
      <UserInput formData={formData} handleInputChange={handleInputChange} />
    </>
  )
}
