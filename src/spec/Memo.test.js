import { render, screen } from "./test-utils";
import Memo from "../pages/Memo";

describe("<Memo />", () => {
  it("Memo", () => {
    render(<Memo />);
    const memoTitle = screen.getByPlaceholderText("제목을 입력해주세요");
    const memoDescription = screen.getByPlaceholderText("내용을 입력해주세요");
    const memoCloseButton = screen.getByTestId("memo-close-button");

    expect(memoTitle).toHaveTextContent("");
    expect(memoDescription).toHaveTextContent("");
    expect(memoCloseButton).toHaveTextContent("뒤로가기");
  });
});
