import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import App from "./App"

it("should update the input value when a valid value is typed in", async () => {
  const user = userEvent.setup()
  render(<App />)

  const input = await screen.findByRole("spinbutton", {
    name: /initial investment/i,
  })

  await user.clear(input)
  await user.type(input, "200")

  expect(input.value).toBe("200")
})

it("should not accept a negative number when typed in", async () => {
  const user = userEvent.setup()
  render(<App />)

  const input = await screen.findByRole("spinbutton", {
    name: /expected return/i,
  })

  await user.clear(input)
  await user.type(input, "-1")

  expect(input.value).toBe("1")
})
