import LoginScreen from "../screenobjects/LoginScreen";


class Configs{

    async setup(){
        if(process.env.PLATFORMTYPE === 'Android'){
            await this.setupAndroid();
        }else{
            await this.setupIOS();
        }
    }
    async setupAndroid(){
        await driver.execute('mobile: installApp', {appPath: process.env.APP, grantPermissions: true});
        await driver.execute('mobile: clearApp', {appId: 'com.android.chrome'});
        await driver.execute('mobile: changePermissions',{appPackage: process.env.APPID , permissions: 'android.permission.ACCESS_FINE_LOCATION', action: 'revoke'});
        await driver.execute('mobile: activateApp', {appId: process.env.APPID });
        await LoginScreen.login();
    }

    async setupIOS(){
        await driver.execute('mobile: launchApp', {bundleId: process.env.BUNDLEID });
        await LoginScreen.loginiOS();
    }
    
    async removeApp(){
        if(process.env.PLATFORMTYPE === 'Android'){
            await driver.execute('mobile: removeApp', {appId: APPID });
            return
        }
    }
    
}

export default new Configs();