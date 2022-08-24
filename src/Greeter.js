import React from "react";

const LocalizedGreeting = ({ locale, localeOptions }) => {
  const greeting = localeOptions.find((option) => locale === option.locale);
  console.log(greeting);
  return <h1 id="greeting">{greeting ? greeting.greeting : ""}!</h1>;
};

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocale: "English",
      localeOptions: [
        { locale: "English", greeting: "Hello" },
        { locale: "Spanish", greeting: "Hola" },
        { locale: "French", greeting: "Bonjour" },
        { locale: "German", greeting: "Guten Tag" },
      ],
    };
    this.selectLocale = this.selectLocale.bind(this);
  }

  selectLocale = (e) => {
    const locale = e.target.innerText;
    this.setState({ selectedLocale: locale });
  };

  render() {
    return (
      <div>
        <LocalizedGreeting
          locale={this.state.selectedLocale}
          localeOptions={this.state.localeOptions}
        />
        <h2>Select a language to be greeted in</h2>
        {this.state.localeOptions.map((option) => (
          <button key={option.greeting} onClick={this.selectLocale}>
            {option.locale}
          </button>
        ))}
      </div>
    );
  }
}

export default Greeter;
