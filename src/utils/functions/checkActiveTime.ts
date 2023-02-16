const checkActiveTime = (date: Date, time: number) => {
    const bookingYear = date.getFullYear();
    const bookingMonth = date.getMonth();
    const bookingHour = time;
    const bookingDay = date.getDate();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentHour = new Date().getHours();
    const currentDay = new Date().getDate();

    console.log('Year', bookingYear, currentYear);
    console.log('Month', bookingMonth, currentMonth);
    console.log('Hour', bookingHour, currentHour);
    console.log('day', bookingDay, currentDay);
    if (
        bookingYear <= currentYear &&
        bookingMonth <= currentMonth &&
        bookingDay <= currentDay &&
        bookingHour < currentHour + 1
    ) {
        return false;
    }
    return true;
};

export default checkActiveTime;
