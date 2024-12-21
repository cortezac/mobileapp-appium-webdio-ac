class LogTimeScreen{

    startShiftButton = () => $("//android.widget.Button[contains(@content-desc,'work')]");
    confirmationStartShiftButton = () => $("//android.widget.Button[@content-desc='Start shift']");
    confirmationCancelShiftButton = () => $("//android.widget.Button[@content-desc='Cancel']");
    endShiftButton = () => $("//android.widget.Button[contains(@content-desc,'End')]");
    confirmationEndShiftButton = () => $("//android.widget.Button[@content-desc='End shift']");
    backButton = () => $("//android.view.View[@content-desc='Daily Time Record']/preceding-sibling::android.widget.Button");

}

export default new LogTimeScreen();