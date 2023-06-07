export function formatValue(value: number) {
  const valueFormatted = Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value)

  return valueFormatted
}
