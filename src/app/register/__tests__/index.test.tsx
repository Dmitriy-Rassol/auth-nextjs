import mockRouter from "next-router-mock";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Register from "../page";
import "@testing-library/jest-dom";

const setup = () => {
  const handler = jest.fn();

  const utils = render(<Register />);
  // Assertion, так как мы уверенны, что здесь будет input-элемент,
  // а тип по умолчанию HTMLElement не содержит свойства value, необходимого нам в 3м тесте

  return {
    handler,
    ...utils,
  };
};

// jest.mock('next/navigation', () => require('next-router-mock'));
jest.mock("next/navigation", () => {
  return {
    useRouter: () => {},
  };
});

describe("Register Page", () => {
  it("should match snapshot", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("displays error message for required login field on blur and removes it on input", () => {
    render(<Register />);

    const loginInput = screen.getByPlaceholderText("Your login");

    // Эмулируем событие Blur на поле Login
    fireEvent.blur(loginInput);

    // Проверяем, что текст ошибки присутствует в документе
    expect(
      screen.getByText("The login field is required.")
    ).toBeInTheDocument();

    // Эмулируем ввод текста в поле Login
    fireEvent.change(loginInput, { target: { value: "testlogin" } });

    // Проверяем, что текст ошибки более не присутствует в документе
    expect(
      screen.queryByText("The login field is required.")
    ).not.toBeInTheDocument();
  });
});
