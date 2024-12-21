class HomeScreen{
    
    dtrButton = () => $("//android.view.View[contains(@content-desc,'DTR')]//android.widget.Button");
    parkingButton = () => $("//*[contains(@content-desc,'Parking')]//android.widget.Button");
    seatButton = () => $("(//android.view.View[contains(@content-desc,'Seat')]//android.widget.Button)[1]")
    parkingSummary = () => $("(//android.view.View[@content-desc='Parking'])[2]"); // specific for demo
    seatSummary = () => $("(//android.view.View[@content-desc='Seat'])[2]"); // specific for demo

}

export default new HomeScreen();