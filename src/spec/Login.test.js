import { render, screen } from "./test-utils";
import Login from "../pages/Login";

describe("<Login />", () => {
  it("Login", () => {
    render(<Login />);
    const loginButton = screen.getByTestId("login-button");
    const loginHeader = screen.getByTestId("login-header");

    expect(loginButton).toHaveTextContent("Google Login");
    expect(loginHeader).toHaveTextContent("Hello-word!");
  });
});
