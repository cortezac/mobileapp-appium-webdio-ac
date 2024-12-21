class AccountScreen{

    signOutButton = () => $("//*[@content-desc='Sign out']");
    confirmationSignOutButton = () => $("//android.widget.Button[@content-desc='Sign out']");

}

export default new AccountScreen();