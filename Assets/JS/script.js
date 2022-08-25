// alert('JS File is connected');

// ADDRESSES TO INDEX ITEMS
var dayNow   = document.getElementById("currentDay");

var tb_9am   = document.getElementById("eventEntryBox_9am");
var tb_10am  = document.getElementById("eventEntryBox_10am");
var tb_11am  = document.getElementById("eventEntryBox_11am");
var tb_12pm  = document.getElementById("eventEntryBox_12pm");
var tb_1pm   = document.getElementById("eventEntryBox_1pm");
var tb_2pm   = document.getElementById("eventEntryBox_2pm");
var tb_3pm   = document.getElementById("eventEntryBox_3pm");
var tb_4pm   = document.getElementById("eventEntryBox_4pm");
var tb_5pm   = document.getElementById("eventEntryBox_5pm");

var svBtn_9am   = document.getElementById("saveBtn9am");
var svBtn_10am  = document.getElementById("saveBtn10am");
var svBtn_11am  = document.getElementById("saveBtn11am");
var svBtn_12pm  = document.getElementById("saveBtn12pm");
var svBtn_1pm   = document.getElementById("saveBtn1pm");
var svBtn_2pm   = document.getElementById("saveBtn2pm");
var svBtn_3pm   = document.getElementById("saveBtn3pm");
var svBtn_4pm   = document.getElementById("saveBtn4pm");
var svBtn_5pm   = document.getElementById("saveBtn5pm");

var okBtn_9am   = document.getElementById("okBtn9am");
var okBtn_10am  = document.getElementById("okBtn10am");
var okBtn_11am  = document.getElementById("okBtn11am");
var okBtn_12pm  = document.getElementById("okBtn12pm");
var okBtn_1pm   = document.getElementById("okBtn1pm");
var okBtn_2pm   = document.getElementById("okBtn2pm");
var okBtn_3pm   = document.getElementById("okBtn3pm");
var okBtn_4pm   = document.getElementById("okBtn4pm");
var okBtn_5pm   = document.getElementById("okBtn5pm");

// LOCAL STORAGE VARIABLES
var todayLS   = localStorage.getItem("todayLS");
var event9am  = localStorage.getItem("eventEntryBox_9am");
var event10am = localStorage.getItem("eventEntryBox_10am");
var event11am = localStorage.getItem("eventEntryBox_11am");
var event12pm = localStorage.getItem("eventEntryBox_12pm");
var event1pm  = localStorage.getItem("eventEntryBox_1pm");
var event2pm  = localStorage.getItem("eventEntryBox_2pm");
var event3pm  = localStorage.getItem("eventEntryBox_3pm");
var event4pm  = localStorage.getItem("eventEntryBox_4pm");
var event5pm  = localStorage.getItem("eventEntryBox_5pm");

// TIME VARIABLES
var currentTime = moment();
var pastTime    = "past";
var presentTime = "present";
var futureTime  = "future";

// console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
// console.log("CURRENT TIME: " + moment(currentTime).format("MMMM Do, YYYY"));
// console.log("CURRENT TIME: " + moment(currentTime).format("H"));

// ADD EVENT LISTENERS TO BUTTONS ---------------------------------------
svBtn_9am.addEventListener("click",function() {setLocalStorageEvent(tb_9am,"eventEntryBox_9am",event9am, svBtn_9am, okBtn_9am)});
svBtn_10am.addEventListener("click",function() {setLocalStorageEvent(tb_10am,"eventEntryBox_10am",event10am, svBtn_10am, okBtn_10am)});
svBtn_11am.addEventListener("click",function() {setLocalStorageEvent(tb_11am,"eventEntryBox_11am",event11am, svBtn_11am, okBtn_11am)});
svBtn_12pm.addEventListener("click",function() {setLocalStorageEvent(tb_12pm,"eventEntryBox_12pm",event12pm, svBtn_12pm, okBtn_12pm)});
svBtn_1pm.addEventListener("click",function() {setLocalStorageEvent(tb_1pm,"eventEntryBox_1pm",event1pm, svBtn_1pm, okBtn_1pm)});
svBtn_2pm.addEventListener("click",function() {setLocalStorageEvent(tb_2pm,"eventEntryBox_2pm",event2pm, svBtn_2pm, okBtn_2pm)});
svBtn_3pm.addEventListener("click",function() {setLocalStorageEvent(tb_3pm,"eventEntryBox_3pm",event3pm, svBtn_3pm, okBtn_3pm)});
svBtn_4pm.addEventListener("click",function() {setLocalStorageEvent(tb_4pm,"eventEntryBox_4pm",event4pm, svBtn_4pm, okBtn_4pm)});
svBtn_5pm.addEventListener("click",function() {setLocalStorageEvent(tb_5pm,"eventEntryBox_5pm",event5pm, svBtn_5pm, okBtn_5pm)});

// FUNCTIONS TO DO ON OPEN ----------------------------------------------
getDate();
checkDate();
updateTimeSlots();
getAllScheduledEvents()

// TIME STUFF AND DATE CONTROL ------------------------------------------
// UPDATE IF TIME IS PRESENT, PAST, OR FUTURE
function updateTimeSlots () {
    var thisHour = moment(currentTime).format("H");

    // UNCOMMENT OUT TO TEST ALL COLORS IF PAST THE TIME FRAME OF SCHEDULER
    // thisHour = "13";

    if (thisHour < 9) {
        // console.log("< 9");
        updateAllClasses (
            futureTime,futureTime,futureTime,futureTime,futureTime,futureTime,futureTime,futureTime,futureTime
            );

    } else if (thisHour == 9) {
        // console.log("== 9");
        updateAllClasses (
            presentTime,
            futureTime,futureTime,futureTime,futureTime,futureTime,futureTime,futureTime,futureTime
            );

    } else if (thisHour == 10) {
        // console.log("== 10");
        updateAllClasses (
            pastTime,
            presentTime,
            futureTime,futureTime,futureTime,futureTime,futureTime,futureTime,futureTime
            );

    } else if (thisHour == 11) {
        // console.log("== 11");
        updateAllClasses (
            pastTime,pastTime,
            presentTime,
            futureTime,futureTime,futureTime,futureTime,futureTime,futureTime
            );

    } else if (thisHour == 12) {
        // console.log("== 12");
        updateAllClasses (
            pastTime,pastTime,pastTime,
            presentTime,
            futureTime,futureTime,futureTime,futureTime,futureTime
            );

    } else if (thisHour == 13) {
        // console.log("== 13");
        updateAllClasses (
            pastTime,pastTime,pastTime,pastTime,
            presentTime,
            futureTime,futureTime,futureTime,futureTime
            );

    } else if (thisHour == 14) {
        // console.log("== 14");
        updateAllClasses (
            pastTime,pastTime,pastTime,pastTime,pastTime,
            presentTime,
            futureTime,futureTime,futureTime
            );

    } else if (thisHour == 15) {
        // console.log("== 15");
        updateAllClasses (
            pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,
            presentTime,
            futureTime,futureTime
            );

    } else if (thisHour == 16) {
        // console.log("== 16");
        updateAllClasses (
            pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,
            presentTime,
            futureTime
            );

    } else if (thisHour == 17) {
        // console.log("== 17");
        updateAllClasses (
            pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,
            presentTime
            );

    } else if (thisHour > 17) {
        // console.log("> 17");
        updateAllClasses (
            pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,pastTime,pastTime
            );

    }

}

// GET TODAYS DATE AND SET IT TO THE PAGE HTML
function getDate() {
    dayNow.innerHTML = moment(currentTime).format("MMMM Do, YYYY");
}

// KEEP TODAY'S DATE ACCURATE
function checkDate() {
    // TODAY'S ACTUAL DATE
    var todayActual = moment(currentTime).format("MMMM Do, YYYY");

    // MOST RECENT DATE SAVED TO LOCAL STORAGE
    var todayLS = JSON.parse(localStorage.getItem("todayLS"));

    // console.log("todayActual is " + todayActual);
    // console.log("Local storage date is " + JSON.parse(localStorage.getItem("todayLS")) + " & " + todayLS);

    // UNCOMMENT OUT BELOW TO FORCE A FALSE RESULT AND TEST ELSE PATH
    // todayLS = "";

    // COMPARE ACTUAL DATE VS LAST SAVED DATE
    if (todayLS == todayActual) {

        console.log("TRUE: dates are the same! Actual is "+ todayActual + " and LS is " + todayLS);

    } else {

        console.log("FALSE: dates are NOT the same! Actual is "+ todayActual + " and LS is " + todayLS);
    
        // SAVE TODAY'S ACTUAL DATE OVER THE LOCAL STORAGE DATE
        localStorage.setItem("todayLS", JSON.stringify(todayActual));

        todayLS = JSON.parse(localStorage.getItem("todayLS"));
        console.log("New local storage date is " + todayLS);
    
        // MAYBE ADD AN OPTION TO KEEP LOCAL STORAGE?
        resetAllScheduledEvents();
    
        // UPDATE PAGE DISPLAYED DATE TO TODAY
        getDate();

    }

}

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

// UPDATE ALL CLASSES TO APPLY PAST, PRESENT, AND FUTURE COLORING
function updateAllClasses (c9,c10,c11,c12,c13,c14,c15,c16,c17) {
    addClass(c9, tb_9am);
    addClass(c9, okBtn_9am);

    addClass(c10, tb_10am);
    addClass(c10, okBtn_10am);

    addClass(c11, tb_11am);
    addClass(c11, okBtn_11am);

    addClass(c12, tb_12pm);
    addClass(c12, okBtn_12pm);

    addClass(c13, tb_1pm);
    addClass(c13, okBtn_1pm);

    addClass(c14, tb_2pm);
    addClass(c14, okBtn_2pm);

    addClass(c15, tb_3pm);
    addClass(c15, okBtn_3pm);

    addClass(c16, tb_4pm);
    addClass(c16, okBtn_4pm);

    addClass(c17, tb_5pm);
    addClass(c17, okBtn_5pm);
}

// ADD CLASS TO HTML TO ADD PAST, PRESENT, AND FUTURE COLORING
function addClass (classToAdd,address) {
    if (classToAdd === pastTime) {
        address.classList.add(pastTime);
        removeClass(presentTime,address);
        removeClass(futureTime,address);
    } else if (classToAdd === presentTime) {
        removeClass(pastTime,address);
        address.classList.add(presentTime);
        removeClass(futureTime,address);
    } else if (classToAdd === futureTime) {
        removeClass(pastTime,address);
        removeClass(presentTime,address);
        address.classList.add(futureTime);
    }
}

// REMOVE CLASS TO HTML TO REMOVE COLORING FOR PAST, PRESENT, OR FUTURE
function removeClass (classToRemove,address) {
    address.classList.remove(classToRemove);
}

// LOCAL STORAGE STUFF -------------------------------------------------
// GET LOCAL STORAGE SPECIFIC EVENT
function getScheduledEvents(entryAddress, getLocalStorage) {

    if (getLocalStorage == null || getLocalStorage === "") {
        entryAddress.innerHTML = "";
    } else {
        entryAddress.innerHTML = JSON.parse(getLocalStorage);
    }

}

// SET TEXT FOR LOCAL STORAGE EVENT TIME SLOT
function setLocalStorageEvent (entryAddress, localStorageName, getLocalStorage, svBtn, okBtn) {

    console.log("The " + localStorageName + " btn was clicked");

    var curText = entryAddress.value;

    localStorage.setItem(localStorageName, JSON.stringify(curText));
    getLocalStorage = localStorage.getItem(localStorageName);

    compareScheduledEvents(entryAddress, getLocalStorage, svBtn, okBtn);
    getLocalStorageParsed = JSON.parse(getLocalStorage);

    console.log(localStorageName+" in local storage is "+getLocalStorage+" & curText is "+curText);
}


// GET ALL LOCAL STORAGE EVENTS TO FILL SLOTS
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

// UNCOMMENT OUT TO CLEAR THE EVENTS FOR CLEAN SLATE
// resetAllScheduledEvents()

// RESET ALL LOCAL STORAGE EVENTS
function resetAllScheduledEvents() {

    localStorage.removeItem("eventEntryBox_9am");
    localStorage.removeItem("eventEntryBox_10am");
    localStorage.removeItem("eventEntryBox_11am");
    localStorage.removeItem("eventEntryBox_12pm");
    localStorage.removeItem("eventEntryBox_1pm");
    localStorage.removeItem("eventEntryBox_2pm");
    localStorage.removeItem("eventEntryBox_3pm");
    localStorage.removeItem("eventEntryBox_4pm");
    localStorage.removeItem("eventEntryBox_5pm");

    getAllScheduledEvents();

}

// COMPARE IF CURRENT TEXT IN BOX DIFFERS FROM LOCAL STORAGE
function compareAllScheduledEvents() {

    console.log("compareALLScheduledEvents ran");

    event9am  = localStorage.getItem("eventEntryBox_9am");
    event10am = localStorage.getItem("eventEntryBox_10am");
    event11am = localStorage.getItem("eventEntryBox_11am");
    event12pm = localStorage.getItem("eventEntryBox_12pm");
    event1pm  = localStorage.getItem("eventEntryBox_1pm");
    event2pm  = localStorage.getItem("eventEntryBox_2pm");
    event3pm  = localStorage.getItem("eventEntryBox_3pm");
    event4pm  = localStorage.getItem("eventEntryBox_4pm");
    event5pm  = localStorage.getItem("eventEntryBox_5pm");

    compareScheduledEvents(tb_9am, event9am, svBtn_9am, okBtn_9am);
    compareScheduledEvents(tb_10am, event10am, svBtn_10am, okBtn_10am);
    compareScheduledEvents(tb_11am, event11am, svBtn_11am, okBtn_11am);
    compareScheduledEvents(tb_12pm, event12pm, svBtn_12pm, okBtn_12pm);
    compareScheduledEvents(tb_1pm, event1pm, svBtn_1pm, okBtn_1pm);
    compareScheduledEvents(tb_2pm, event2pm, svBtn_2pm, okBtn_2pm);
    compareScheduledEvents(tb_3pm, event3pm, svBtn_3pm, okBtn_3pm);
    compareScheduledEvents(tb_4pm, event4pm, svBtn_4pm, okBtn_4pm);
    compareScheduledEvents(tb_5pm, event5pm, svBtn_5pm, okBtn_5pm);
    
}

// FUNCTION TO COMPARE A SINGLE EVENT SLOT TO LOCAL STORAGE
function compareScheduledEvents(entryAddress, getLocalStorage, svBtn, okBtn) {

    var getLocalStorageParsed = JSON.parse(getLocalStorage);
    var curText = entryAddress.value;

    // console.log("compareScheduledEvents ran");
    // console.log("curText is " + curText);
    // console.log("getLocalStorageParsed is " + getLocalStorageParsed);

    if (getLocalStorageParsed == null) {
        if(curText == "" || curText == null) {
            // console.log("getLocalStorage is " + getLocalStorageParsed + ", curText is "+curText);
            
            // check mark on, hide save
            okBtn.style.display = "inline-block";
            svBtn.style.display = "none";

        } else {
            // console.log("getLocalStorage is " + getLocalStorageParsed + ", curText is "+curText);

            // save on, hide checkmark
            okBtn.style.display = "none";
            svBtn.style.display = "inline-block";

        }

    } else {

        if (curText == getLocalStorageParsed) {
            // console.log("getLocalStorage is " + getLocalStorageParsed + ", curText is "+curText);

            // check mark on, hide save
            okBtn.style.display = "inline-block";
            svBtn.style.display = "none";

        } else {
            // console.log("getLocalStorage is " + getLocalStorageParsed + ", curText is "+curText);

            // save on, hide checkmark
            okBtn.style.display = "none";
            svBtn.style.display = "inline-block";

        }
    }
}

// INTERVALS TO KEEP THINGS UP TO DATE ----------------------------------
// CHECKS FOR CHANGES TO EVENTS
myInterval1 = setInterval(compareAllScheduledEvents, 2000);
myInterval2 = setInterval(checkDate, 4000);

