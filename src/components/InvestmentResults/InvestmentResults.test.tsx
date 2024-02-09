import { render, screen } from "@testing-library/react"
import InvestmentResults from "./InvestmentResults"

const mockFormData = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5,
  duration: 2,
}

it("should display a table of investment results based on received formData", () => {
  render(<InvestmentResults formData={mockFormData} />)

  const resultsTable = screen.getByRole("table")
  const rows = screen.getAllByRole("row")

  expect(resultsTable).toBeInTheDocument()
  expect(rows).toHaveLength(3)
})
