// alert('JS File is connected');

// ADDRESSES TO INDEX ITEMS
var timeNow  = document.getElementById("currentDay");
var tb_9am   = document.getElementById("eventEntryBox_9am");
var tb_10am  = document.getElementById("eventEntryBox_10am");
var tb_11am  = document.getElementById("eventEntryBox_11am");
var tb_12pm  = document.getElementById("eventEntryBox_12pm");
var tb_1pm   = document.getElementById("eventEntryBox_1pm");
var tb_2pm   = document.getElementById("eventEntryBox_2pm");
var tb_3pm   = document.getElementById("eventEntryBox_3pm");
var tb_4pm   = document.getElementById("eventEntryBox_4pm");
var tb_5pm   = document.getElementById("eventEntryBox_5pm");

// LOCAL STORAGE VARIABLES
const event9am  = localStorage.getItem("eventEntryBox_9am");
const event10am = localStorage.getItem("eventEntryBox_10am");
const event11am = localStorage.getItem("eventEntryBox_11am");
const event12pm = localStorage.getItem("eventEntryBox_12pm");
const event1pm  = localStorage.getItem("eventEntryBox_1pm");
const event2pm  = localStorage.getItem("eventEntryBox_2pm");
const event3pm  = localStorage.getItem("eventEntryBox_3pm");
const event4pm  = localStorage.getItem("eventEntryBox_4pm");
const event5pm  = localStorage.getItem("eventEntryBox_5pm");

// FORMATTING STUFF -------------------------------------------------
// FUNCTION TO REVEAL BY SECTION (CLASS)
function reveal (section) {
    // console.log("ran reveal()");
    section.style.display = "block";
}

// FUNCTION TO HIDE BY SECTION (CLASS)
function hide (section) {
    // console.log("ran hide()");
    section.style.display = "none";
}

// LOCAL STORAGE STUFF -------------------------------------------------
// GET LOCAL STORAGE SPECIFIC EVENT
function getScheduledEvents(entryAddress, getLocalStorage) {

    if (getLocalStorage == null) {
        entryAddress.innerHTML = "";
    } else {
        entryAddress.innerHTML = getLocalStorage;
    }

}

// GET ALL LOCAL STORAGE EVENTS
function getAllScheduledEvents() {

    getScheduledEvents(tb_9am, event9am);
    getScheduledEvents(tb_10am, event10am);
    getScheduledEvents(tb_11am, event11am);
    getScheduledEvents(tb_12pm, event12pm);
    getScheduledEvents(tb_1pm, event1pm);
    getScheduledEvents(tb_2pm, event2pm);
    getScheduledEvents(tb_3pm, event3pm);
    getScheduledEvents(tb_4pm, event4pm);
    getScheduledEvents(tb_5pm, event5pm);

}

// RESET ALL LOCAL STORAGE EVENTS
function resetAllScheduledEvents() {

    localStorage.clear("eventEntryBox_9am");
    localStorage.clear("eventEntryBox_10am");
    localStorage.clear("eventEntryBox_11am");
    localStorage.clear("eventEntryBox_12pm");
    localStorage.clear("eventEntryBox_1pm");
    localStorage.clear("eventEntryBox_2pm");
    localStorage.clear("eventEntryBox_3pm");
    localStorage.clear("eventEntryBox_4pm");
    localStorage.clear("eventEntryBox_5pm");

    getAllScheduledEvents();

}

