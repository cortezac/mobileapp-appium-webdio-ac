class SeatScreen{

    calendarBtn = () => $('~Today');
    searchBtn = () => $('~Search');
    reminderBtn = () => $('~Yes, I understand');

    //Select Booking Date pop up
    selectBookingDate = (date) => $(`~${date}`); // 30, Wednesday, October 30, 2024
    selectBookingDateSelectBtn = () => $("~Select");
    selectBookingDateCancelBtn = () => $("~Cancel");

    //Seat selection view
    dynamicCalendarButton = (month) => $(`~${month}`); // October
    dynamicCalendar = (day) => $(`~${day}`); // Sunday, October 13, 2024

    //specific seat, no other way to locate except for xpath
    specificSeat = () => $('//android.widget.ScrollView/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[1]');

    dynamicSeatReservationDate = (date) => $(`~${date}`); // Sun, October 13

    goBack = () => $("//android.view.View[contains(@content-desc, 'Seats')]/preceding-sibling::android.widget.Button");

    async reserveSeatGesture(){
        await driver.action('pointer')
        .move({ duration: 0, x: 188, y: 1996 })
        .down({ button: 0 })
        .move({ duration: 1000, x: 987, y: 2001 })
        .up({ button: 0 })
        .perform();
    };
}

export default new SeatScreen();