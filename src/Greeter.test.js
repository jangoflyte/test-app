import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeter from './Greeter'

test("the button causes the correct greeting to display", () => {
  const greeterWrapper = render(<Greeter />);
  userEvent.click(greeterWrapper.getByText("English"));
  userEvent.click(greeterWrapper.getByText("German"));
});
