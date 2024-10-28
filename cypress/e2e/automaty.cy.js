import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import SideBar from "./components/SideBar";
import Student from "./pages/Student";
import Automaty from './pages/Automaty';

describe("Automaty Tests", () => {

  beforeEach(() => {
    const automaty = new Automaty();
    automaty.navigate();
  });

  describe('Login', () => {
    const login = new Login();
    const welcome = new Welcome();

    it("Should be able to log in with valid credentials", () => {
      login.signIn("admin", "admin");

      welcome.title.should("exist");
    });

    it("Should not be able to log in with invalid credentials", () => {
      login.signIn("admin1", "admin1");

      login.alert.should("exist");
    });

    it("Should be able to log out", () => {
      login.signIn("admin", "admin");

      welcome.logOut();

      login.title.should("exist");
    });

  });

  describe('Students', () => {
    const student = new Student();
    const sideBar = new SideBar();

    it("Should be able to complete the Student Form", () => {
      sideBar.selectStudents();

      student.fill(
        "rafael",
        "bencosme",
        "rafaelabencosmed@gmail.com",
        "male",
        "8494720978",
        "09/27/1995"
      );
      student.register();

      student.toast.should("exist");
    });

    it("Should display Student Form helper text", () => {
      sideBar.selectStudents();

      student.clearBirthDate();
      student.register();

      student.alerts.forEach(alert => alert.should("exist"));
    });

  });

});
