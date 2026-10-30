'use strict';

const readline = require('readline-sync');

/**
 * The year for the reference point.
 * @type {number}
 */
const EPOCH_YEAR = 1800;

/**
 * The month for the reference point.
 * @type {number}
 */
const EPOCH_MONTH = 1;

/**
 * The first day index for the reference point.
 * @type {number}
 */
const EPOCH_FIRST_DAY = 3;
    
/**
 * @typedef {object} DatePoint
 * @property {number} day
 * @property {number} month
 * @property {number} year
 */

/**
 * Parse the given str into DatePoint
 * @param {number} str 
 * @returns {DatePoint}
 */
function parseDate(str) {
    const [day, month, year] = str.split('/').map(Number);
    return {day, month, year};
}

const point = parseDate('');
point.year;

/**
 * Get the number of days in the given year and month
 * @param {number} year 
 * @param {number} month 
 * @returns {number}
 */
function getDaysInMonth(year, month) {
    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return isLeapYear(year) ? 29 : 28;
    }
}

/**
 * Get the number of days in a given year.
 * @param {number} year 
 * @returns {number}
 */
function getDaysinYear(year) {
    return isLeapYear(year) ? 366 :365
}

/**
 * Determine whether a given year is a leap year.
 * @param {number} year 
 * @returns {boolean}
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !==0);
}

/**
 * Calculate the number of days between the given date and epoch
 * @param {DatePoint} date 
 */
function getNumberOfDaysSinceEpoch(date) {
    let days = 0;

    for (let year = EPOCH_YEAR; year <= date.year; year++) {
        days += getDaysinYear(year);
    }

    for (let month = EPOCH_MONTH; month <= date.month; month++) {
        days += getDaysInMonth(date.year, month);
    }

    days += date.day;

    return days;
}

/**
 * Get the day index for the given date.
 * @param {DatePoint} date 
 * @returns {1|2|3|4|5|6|7} - date index
 */
function getDayForDate(date) {
    return (EPOCH_FIRST_DAY + getNumberOfDaysSinceEpoch(date)) % 7
}

/**
 * Get day name in English for the given day index
 * @param {1|2|3|4|5|6|7} day
 * @returns {string}
 */
function getDayName(day) {
    switch (day) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
    }
}

const input = readline.question('Input date (d/m/y): ');
const date = parseDate(input);
const dayName = getDayName(getDayForDate(date));

console.log(`The day for ${input} is ${dayName}`);