const getCalendarDate = (date: Date, lang: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const newLang = lang === 'en' ? 'en-Gb' : 'ru';
    const newDate = date.toLocaleDateString(newLang, options);
    return newDate;
};

export default getCalendarDate;
