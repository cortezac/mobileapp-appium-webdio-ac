class DTRScreen{

    logTimeButton = () => $("//android.view.View[@content-desc='Log time']");
    backButton = () => $("//android.view.View[@content-desc='Daily Time Record']/preceding-sibling::android.widget.Button");

}

export default new DTRScreen();