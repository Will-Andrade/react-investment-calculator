import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App component", () => {
  it("should render a title on the page", () => {
    render(<App />)

    const title = screen.getByRole("heading", {
      name: /Investment Calculator/i,
    })

    expect(title).toBeInTheDocument()
  })
})
