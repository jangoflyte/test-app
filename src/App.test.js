import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App2 from './App2';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  let app;
  beforeEach(() => {
    app = render(<App2 />);
  });

  // it("renders a PersonList", () => {
  //   // `getByText` select text from the imported component
  //   const childElement = app.getByText("Bob Smith");
  //   expect(childElement).toBeInTheDocument();
  // });
  it('renders a user', () => {
    const user = app.getByText('Name: Jim');
    const email = app.getByText('Email: jim@galvanize.com');
    expect(user).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  })
  it('test the app contain a text field for the user to input a nickname', () => {
    const text = app.getByLabelText('Nickname:');
    userEvent.type(text, 'Jimmy');
    expect(text).toHaveValue('Jimmy');
  });
    it("updates the user's nickname when the submit button is clicked", () => {
      const text = app.getByLabelText("Nickname:");
      const submit = app.getByRole("button");
      userEvent.type(text, "Jimmy");
      userEvent.click(submit);
      const nickname = app.getByText("Nickname: Jimmy");
      expect(nickname).toBeInTheDocument();
    });
});

