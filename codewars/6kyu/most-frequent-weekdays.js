function mostFrequentDays(year) {
    let weekdays = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        0: 'Sunday',
    };
    let weekdDayIndex = new Date(year, 0, 1).getDay();

    return year % 4 === 0
        ? (weekdDayIndex === 0 ?
            [weekdays[(weekdDayIndex + 1) % 7], weekdays[weekdDayIndex]] :
            [weekdays[weekdDayIndex], weekdays[(weekdDayIndex + 1) % 7]])
        : [weekdays[weekdDayIndex]];
}