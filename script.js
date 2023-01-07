
setInterval(() => {
    // Get data from Date Class:
    const now = new Date();

    //  Parse Time to specs
    const hour = normalizeHour(now.getHours());
    const minutes = addZeroInFront(now.getMinutes());
    const seconds = addZeroInFront(now.getSeconds());

    // Parse Days (Clock should show current date in format Day, Month Date Year (eg. Monday, August 12th 2021))
    const dayOfTheWeek = getDayName(now.getDay());
    const d = addOrdinal(now.getDate());
    const m = getMonthName(now.getMonth());
    const y = String(now.getFullYear());

    /* Get the elements we want and send parsed data to DOM
    */
    const runningClock = document.getElementById("clock");
    runningClock.textContent = `${hour}:${minutes}:${seconds} ${now.getHours() <= 12 ? 'AM' : 'PM'}`;
    const runningDate = document.getElementById("current-date");
    runningDate.textContent = `${dayOfTheWeek}, ${m} ${d} ${y}`;
}, 1000);

// Helper Functions and Arrays

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function addZeroInFront(input) {
    if (input < 10) {
        return "0" + String(input);
    } else {
        return String(input);
    }
}

function normalizeHour(input) {
    if (input > 12) {
        return input - 12;
    } else if (input === 0) {
        return 12;
    } else return input;


};

function getDayName(input) {
    return days[input];
}

function getMonthName(input) {
    return months[input];
}

function addOrdinal(input) {
    if (input === 1 || input === 21 || input === 31) {
        return String(input) + "st";
    } else if (input === 2 || input === 22) {
        return String(input) + "nd";
    } else if (input === 3 || input === 23) {
        return String(input) + "rd";
    } else return String(input) + "th";
}

