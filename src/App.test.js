import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  let app;
  beforeEach(() => {
    app = render(<App />);
  });
  it("renders a PersonList", () => {
    // `getByText` select text from the imported component
    const childElement = app.getByText("Bob Smith");
    expect(childElement).toBeInTheDocument();
  });
  it('test the app contain a text field for the user to input a nicname', () => {
    const textInput = app.getByLabelText('Nickname:');
    userEvent.type(text, 'Jimmy');
    expect(text).toHaveValue('Jimmy');
  });
});

