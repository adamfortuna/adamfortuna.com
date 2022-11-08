export const getYearDiffWithMonth = (startDate: Date, endDate: Date) => {
  const ms = endDate.getTime() - startDate.getTime()

  const date = new Date(ms)

  return Math.abs(date.getUTCFullYear() - 1969)
}
