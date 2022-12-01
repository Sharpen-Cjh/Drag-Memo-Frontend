import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import MyMemos from "../pages/MyMemos";

describe("<MyMemos />", () => {
  it("MemoCard", async () => {
    render(<MyMemos />);
    const memoCardTitle = await screen.findAllByTestId("memo-card-title");
    const memoCardDescription = await screen.findAllByTestId(
      "memo-card-description"
    );
    const memoDeleteButton = await screen.findAllByTestId("memo-delete-button");

    expect(memoCardTitle).toHaveLength(2);
    expect(memoCardTitle[0]).toHaveTextContent("강아지");
    expect(memoCardTitle[1]).toHaveTextContent("고양이");

    expect(memoCardDescription).toHaveLength(2);
    expect(memoCardDescription[0]).toHaveTextContent("영어로는 Puppy");
    expect(memoCardDescription[1]).toHaveTextContent("영어로는 cat");

    expect(memoDeleteButton).toHaveLength(2);
    expect(memoDeleteButton[0]).toHaveTextContent("삭제");
    expect(memoDeleteButton[1]).toHaveTextContent("삭제");
  });

  it("searchBar", () => {
    render(<MyMemos />);
    const searchButton = screen.getByTestId("search-bar-button");
    const searchInput = screen.getByTestId("search-bar-input");

    expect(searchButton).toHaveTextContent("검색");
    expect(searchInput).toHaveTextContent("");
  });

  it("navBar", () => {
    render(<MyMemos />);
    const memoTitleInput = screen.getByTestId("memo-create-title-input");
    const memoCreateButton = screen.getByTestId("memo-create-button");
    const logoutButton = screen.getByTestId("logout-button");

    expect(memoTitleInput).toHaveTextContent("");
    expect(memoCreateButton).toHaveTextContent("메모 만들기");
    expect(logoutButton).toHaveTextContent("로그아웃");
  });

  it("메모 삭제 버튼 클릭 테스트", async () => {
    render(<MyMemos />);
    const memoDeleteButton = await screen.findAllByTestId("memo-delete-button");
    const confirmSpy = jest.spyOn(window, "confirm");
    confirmSpy.mockImplementation(jest.fn(() => true));

    userEvent.click(memoDeleteButton[0]);
    expect(confirmSpy).toBeCalledTimes(1);
  });
});
