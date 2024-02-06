import { render, screen } from "@testing-library/react"
import Header from "./Header"

it("should render the app logo and main header of the page", () => {
  render(<Header />)

  const pageLogo = screen.getByAltText(/Investment Calculator/i)
  const mainHeader = screen.getByRole("heading", {
    name: /Investment Calculator/i,
  })

  expect(pageLogo).toBeInTheDocument()
  expect(mainHeader).toBeInTheDocument()
})
