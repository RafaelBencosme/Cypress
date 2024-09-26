import LoginPage from "../page-objects/LoginPage";
import WelcomePage from "../page-objects/WelcomePage";
import SideBar from "../page-objects/SideBar";
import StudentForm from "../page-objects/StudentForm";
import Automaty from '../page-objects/Automaty';

describe("Automaty Tests", () => {

  beforeEach(() => {
    const automaty = new Automaty();
    automaty.open();
  });

  describe('Login', () => {
    const login = new LoginPage();
    const welcomePage = new WelcomePage();

    it("should be able to log in with valid credentials", () => {
      login.signIn("admin", "admin");

      welcomePage.welcomeText.should("exist");
    });

    it("should not be able to log in with invalid credentials", () => {
      login.signIn("admin1", "admin1");

      login.invalidCredentials.should("exist");
    });

    it("should be able to log out", () => {
      login.signIn("admin", "admin");
      welcomePage.logout();

      login.title.should("exist");
    });
  });

  describe('Students', () => {
    const sideBar = new SideBar();
    const studentForm = new StudentForm();

    it("should be able to complete the Student Form", () => {
      sideBar.gotoStudents();
      studentForm.fill(
        "rafael",
        "bencosme",
        "rafaelabencosmed@gmail.com",
        'other',
        "8494720978",
        "09/27/1995"
      );
      studentForm.register();

      studentForm.registeredMessage.should("exist");
    });

    it("should display Student Form warnings", () => {
      sideBar.gotoStudents();
      studentForm.clearBirthDate();
      studentForm.register()

      studentForm.warnings.forEach(warning => warning.should('exist'));
    });
  });
});
