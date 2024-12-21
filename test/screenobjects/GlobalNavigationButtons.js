class GlobalNavigationButtons{

    homeButton = () => $("//android.view.View[contains(@content-desc,'Home')]");
    notificationsButton = () => $("//android.view.View[contains(@content-desc,'Notifications')]");
    accountButton = () => $("//android.view.View[contains(@content-desc,'Account')]");
   
}

export default new GlobalNavigationButtons();