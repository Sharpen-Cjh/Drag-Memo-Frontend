import { render } from "@testing-library/react";
import { TestProvider } from "./TestProvider";

const customRender = (ui) => {
  render(ui, { wrapper: TestProvider });
};

export * from "@testing-library/react";

export { customRender as render };
