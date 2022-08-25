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
        {/* <Form/> */}
      </div>
    );
  }
}

const Form = () => {
    return (
    <div id='body'>
    <h1>Select your favorite colors</h1>
    <form data-testid='check-form'>
        <input 
        class='general-input' 
        type='checkbox' 
        id='red' 
        name='color-red' 
        value='red'
        />
        <label forHTML='red'>Red</label>
        <input 
        class='general-input' 
        type='checkbox' 
        id='orange' 
        name='color-orange' 
        value='orange'
        />
        <label forHTML='orange'>Orange</label>
        <input 
        class='general-input' 
        type='checkbox' 
        id='yellow' 
        name='color-yellow' 
        value='yellow'
        />
        <label forHTML='yellow'>Yellow</label>
        <input 
        class='general-input' 
        type='checkbox' 
        id='green' 
        name='color-green' 
        value='green'
        />
        <label forHTML='green'>Green</label>
        <input 
        class='general-input' 
        type='checkbox' 
        id='blue' 
        name='color-blue' 
        value='blue'
        />
        <label forHTML='blue'>Blue</label>
        <input 
        class='general-input' 
        type='checkbox' 
        id='indigo' 
        name='color-indigo' 
        value='indigo'
        />
        <label forHTML='indigo'>Indigo</label>
        <input 
        class='general-input' 
        type='checkbox' 
        id='violet' 
        name='color-violet' 
        value='violet'
        />
        <label forHTML='violet'>Violet</label>
        <input type='submit' value='submit'/>
    </form>
    </div>
        )
    }

export default Greeter;
