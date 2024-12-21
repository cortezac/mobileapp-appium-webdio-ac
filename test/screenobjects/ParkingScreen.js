class ParkingScreen{

    reminderButton = () => $("~Yes, I understand");
    
    // Dynamic selector
    dynamicCalendarButton = (month) => $(`~${month}`); // October
    dynamicCalendar = (day) => $(`~${day}`); // Sunday, October 13, 2024
    dynamicParkedCalendarButton = (month) => $(`//android.view.View[contains(@content-desc, "${month}")]`);

    //Parking slot
    parkingSlot = () => $("//android.view.View[@content-desc='Parking Slot 1']//android.view.View[@content-desc='Available all day.  ']");
    
    //Parking booking
    parkBookingOkButton = () => $('~OK');
    parkBookingCancelButton = () => $('~Cancel');
    
    //Cancel parking
    cancelParking = () => $('~Cancel');

    //Parking cancel booking
    parkedCancelButton = () => $('~Cancel now');
    parkedGoBackButton = () => $('~Go back');

    //summary
    dynamicParkingDate = (date) => $(`~${date}`); // Sun, October 13

    goBackButton = () => $("//android.view.View[@content-desc='Parking']/preceding-sibling::android.widget.Button");
    addButton = () => $("//android.view.View[@content-desc='Parking']/following-sibling::android.widget.Button");
}

export default new ParkingScreen();