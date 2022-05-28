export const convertToDate = (day) => {
    return new Date(day * 86400 * 1000).toDateString()
}