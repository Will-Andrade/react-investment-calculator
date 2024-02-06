import InvestmentCalculatorLogo from "@assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <header className="header">
      <img src={InvestmentCalculatorLogo} alt="Investment Calculator Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  )
}
