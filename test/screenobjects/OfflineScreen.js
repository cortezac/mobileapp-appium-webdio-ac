class OfflineScreen{
    offlineSnackBar = () => $("//*[contains(@content-desc,'Please make sure you are connected to the internet.')]");
    
}
export default new OfflineScreen();