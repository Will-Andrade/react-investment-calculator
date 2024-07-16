import { calculateInvestmentResults } from "./investment"

it("should result in error if any of the expected values is a string", () => {
  const invalidMockFormData = {
    initialInvestment: "1000",
    annualInvestment: 100,
    expectedReturn: 5,
    duration: 2,
  }

  const result = () => calculateInvestmentResults(invalidMockFormData as any)

  expect(result).toThrow(/All properties must be numbers./i)
})

it("should result in a valid object if the input is an object of numbers", () => {
  const validMockFormData = {
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 5,
    duration: 1,
  }

  const result = calculateInvestmentResults(validMockFormData)

  expect(result).toEqual([
    {
      annualInvestment: 100,
      interest: 50,
      valueEndOfYear: 1150,
      year: 1,
    },
  ])
})
