export const convertToDayId = (date) => {
    const ONE_DAY_IN_SECONDS = 86400;
    return parseInt(date / ONE_DAY_IN_SECONDS / 1000);
}