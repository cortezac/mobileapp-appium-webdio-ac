class LoginScreen {

    termsPrivacyCheckBox = () => $("~Terms and privacy checkbox");
    signInMicrosoft = () => $("~Sign in with Microsoft");
    
    //Android chrome browser
    emailEditText = () => $("//android.widget.EditText[@text='@cambridge.org']");
    nextButton = () => $("//android.widget.Button[@text='Next']");
    passwordEditText = () => $("//android.widget.EditText");
    verifyButton = () => $("//android.widget.Button[@text='Verify']");
    useWithoutAccountButton = () => $("//android.widget.Button[contains(@text, 'Use without an account')]");
    //IOS browser
    emailEditTextiOS = () => $('//XCUIElementTypeTextField[@value="@cambridge.org"]');
    goButtoniOS = () => $("~Go");
    passwordEditTextiOS = () => $("//XCUIElementTypeSecureTextField");

    //Scenario

    async login(){
        await expect(this.termsPrivacyCheckBox()).toBeExisting();
        await this.termsPrivacyCheckBox().click();
        await expect(this.signInMicrosoft()).toBeExisting();
        await this.signInMicrosoft().click();
        await this.useWithoutAccountButton().click();
        await driver.pause(5000);
        await expect(this.emailEditText()).toBeExisting();
        await this.emailEditText().click();
        await this.emailEditText().addValue(process.env.EMAIL);
        await expect(this.nextButton()).toBeExisting();
        await this.nextButton().click();
        await driver.pause(5000);
        await expect(this.passwordEditText()).toBeExisting();
        await this.passwordEditText().click();
        await this.passwordEditText().addValue(process.env.PASSWORD);
        await expect(this.verifyButton()).toBeExisting();
        await this.verifyButton().click();
        await driver.pause(10000);
    }

    async loginiOS(){
        await expect(this.termsPrivacyCheckBox()).toBeExisting();
        await this.termsPrivacyCheckBox().click();
        await expect(this.signInMicrosoft()).toBeExisting();
        await this.signInMicrosoft().click();
        await driver.pause(5000);
        await expect(this.emailEditTextiOS()).toBeExisting();
        await this.emailEditTextiOS().click();
        await this.emailEditTextiOS().addValue(process.env.EMAIL);
        await expect(this.goButtoniOS()).toBeExisting();
        await this.goButtoniOS().click();
        await driver.pause(5000);
        await expect(this.passwordEditTextiOS()).toBeExisting();
        await this.passwordEditTextiOS().click();
        await this.passwordEditTextiOS().addValue(process.env.PASSWORD);
        await expect(this.goButtoniOS()).toBeExisting();
        await this.goButtoniOS().click();
        await driver.pause(10000);
    }
}

export default new LoginScreen();
