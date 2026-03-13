// EMI calculation utility
// Calculates monthly EMI along with total payment and total interest

export interface EmiResult {
  emi: number
  totalPayment: number
  totalInterest: number
  months: number
}

export function calculateEmi(
  principal: number,
  annualRate: number,
  years: number
): EmiResult {
  if (principal <= 0 || years <= 0) {
    throw new Error("Principal and years must be greater than 0")
  }

  const months = years * 12

  // Convert annual rate to monthly rate
  const monthlyRate = annualRate / 12 / 100

  let emi = 0

  if (monthlyRate === 0) {
    emi = principal / months
  } else {
    emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
  }

  const totalPayment = emi * months
  const totalInterest = totalPayment - principal

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    months,
  }
}