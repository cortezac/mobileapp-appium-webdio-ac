import AccountScreen from "../screenobjects/AccountScreen";
import DtrScreen from "../screenobjects/DTRScreen";
import GlobalNavigationButtons from "../screenobjects/GlobalNavigationButtons";
import HomeScreen from "../screenobjects/HomeScreen";
import LoginScreen from "../screenobjects/LoginScreen";
import LogTimeScreen from "../screenobjects/LogTimeScreen";
import OfflineScreen from "../screenobjects/OfflineScreen";
import ParkingScreen from "../screenobjects/ParkingScreen";
import SeatScreen from "../screenobjects/SeatScreen";
import Configs from "../configs/Configs";

describe("Smoke Test", () => {

    before('Setup & Login',async () => {
        await Configs.setup();
    });

    after('Remove App', async()=>{
        await Configs.removeApp();
    });

    it("Start Shift - End Shift", async () => {
        await expect(GlobalNavigationButtons.homeButton()).toBeExisting();
        await GlobalNavigationButtons.homeButton().click();
        await HomeScreen.dtrButton().click();
        await DtrScreen.logTimeButton().click();
        await driver.pause(6000);
        await LogTimeScreen.startShiftButton().click();
        await LogTimeScreen.confirmationStartShiftButton().click();
        await driver.pause(6000);
        await LogTimeScreen.endShiftButton().click();
        await LogTimeScreen.confirmationEndShiftButton().click();
        await driver.pause(6000);
        await LogTimeScreen.backButton().click();
        await DtrScreen.backButton().click();
    });

    it('Offline Start Shift - End Shift', async () => {
        await expect(GlobalNavigationButtons.homeButton()).toBeExisting();
        await GlobalNavigationButtons.homeButton().click();
        await HomeScreen.dtrButton().click();
        await driver.toggleWiFi();
        await DtrScreen.logTimeButton().click();
        await expect(OfflineScreen.offlineSnackBar()).toBeExisting();
        await driver.toggleWiFi();
        await driver.pause(6000);
        await DtrScreen.logTimeButton().click();
        await driver.pause(6000);
        await driver.toggleWiFi();
        await LogTimeScreen.startShiftButton().click();
        await expect(OfflineScreen.offlineSnackBar()).toBeExisting();
        await driver.pause(6000);
        await LogTimeScreen.endShiftButton().click();
        await expect(OfflineScreen.offlineSnackBar()).toBeExisting();
        await driver.pause(6000);
        await driver.toggleWiFi();
        await LogTimeScreen.backButton().click();
        await DtrScreen.backButton().click();
    });

    it('Seat Reservation', async () => {
        await expect(HomeScreen.seatButton()).toBeExisting();
        await HomeScreen.seatButton().click();
        await SeatScreen.calendarBtn().click();
        await SeatScreen.selectBookingDate('31, Thursday, October 31, 2024').click();
        await SeatScreen.selectBookingDateSelectBtn().click();
        await driver.pause(3000);
        await SeatScreen.searchBtn().click();
        await SeatScreen.reminderBtn().click();
        //reserve a seat
        await SeatScreen.specificSeat().click();
        await driver.pause(3000);
        await SeatScreen.reserveSeatGesture();
        await driver.pause(6000);
        await SeatScreen.goBack().click();
        await driver.back();
        await HomeScreen.seatSummary().click();
        await expect(SeatScreen.dynamicSeatReservationDate('Tomorrow')).toBeExisting();
        await driver.back();
        //navigate back to seat reservation
        await HomeScreen.seatButton().click();
        await SeatScreen.calendarBtn().click();
        await SeatScreen.selectBookingDate('31, Thursday, October 31, 2024').click();
        await SeatScreen.selectBookingDateSelectBtn().click();
        await driver.pause(3000);
        await SeatScreen.searchBtn().click();
        //unreserve a seat
        await SeatScreen.specificSeat().click();
        await driver.pause(3000);
        await SeatScreen.reserveSeatGesture();
        await driver.pause(6000);
        //back to home
        await SeatScreen.goBack().click();
        await driver.back();
        
    });

    it('Parking Reservation',async () => {
        await HomeScreen.parkingButton().click();
        await ParkingScreen.reminderButton().click();
        await ParkingScreen.dynamicCalendar('October').click();
        await driver.pause(3000);
        await ParkingScreen.dynamicCalendarButton('Thursday, October 31, 2024').click();
        await ParkingScreen.parkingSlot().click();
        await ParkingScreen.parkBookingCancelButton().click();
        await ParkingScreen.parkingSlot().click();
        await ParkingScreen.parkBookingOkButton().click();
        await driver.pause(6000);
        await ParkingScreen.goBackButton().click();
        await HomeScreen.parkingSummary().click();
        await expect(ParkingScreen.dynamicParkingDate('Tomorrow')).toBeExisting();
        await ParkingScreen.addButton().click();
        await driver.pause(3000);
        await ParkingScreen.dynamicCalendar('October').click();
        await driver.pause(3000);
        await ParkingScreen.dynamicParkedCalendarButton('Thursday, October 31, 2024').click();
        await ParkingScreen.cancelParking().click();
        await ParkingScreen.parkedCancelButton().click();
        await driver.pause(6000);
        await ParkingScreen.goBackButton().click();
        await driver.back();
    });

    it('Logout', async () => {
        await GlobalNavigationButtons.accountButton().click();
        await AccountScreen.signOutButton().click();
        await AccountScreen.confirmationSignOutButton().click();
    });
});