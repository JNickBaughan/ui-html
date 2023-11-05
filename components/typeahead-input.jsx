
import * as React from 'react';
// https://codepen.io/JNickBaughan/pen/yKyZQd
export function TypeaheadInput() {
    const [input, setInput] = React.useState("");
    const [hasFocus, setHasFocus] = React.useState(false);
  let inputRef = React.useRef(null);

  const _keyInput = (e) => {
    e.preventDefault();
    const inputKey = e.key;
    setInput(`${input}${inputKey}`)
  }
  
  return (
  <>
    <label className="input-label" for="amount">Amount:</label>
    <div onClick={() => inputRef?.current.focus()} className="input" >{input}</div>
    <input ref={inputRef} 
    className={"hidden"}
    id="amount" 
    onKeyUp={_keyInput}
    // onBlur={this._onBlur}
    name="amount" ></input>
    
  </>
  );
}


/*
class FancyInput extends React.Component {
  constructor(props) {
    super(props);
    this._onFocus = this._onFocus.bind(this);
    this._KeyInput = this._KeyInput.bind(this);
    this._onBlur = this._onBlur.bind(this);

    this.hasUserInput = false;
    this.state = {
      text: "",
      hasFocus: false
    };
  }

  componentDidMount() {
    const text = this.props.watermarkText;
    this.mockInput.innerHTML = text;
  }

  _onFocus() {
    this.textInput.focus();
    this.setState({ hasFocus: true });
    this.mockInput.innerHTML = `${this.state.text}<span id='blink'>||</span>`;
    document.getElementById("blink").classList.remove("hideBlink");
  }

  _onBlur() {
    this.setState({ hasFocus: false });
    document.getElementById("blink").classList.add("hideBlink");
  }

  //todo: handle holding down delete key
  //todo: only handle 1-0, a -z , space, ignore all other special keys - don't want to add 'tab' or something to the text
  _KeyInput(e) {
    e.preventDefault();
    const input = e.key;
    if(input === "Enter"){
      this._onBlur();
    }
    else if (input === "Backspace") {
      const innerText =
        this.hasUserInput || this.state.length > 1
          ? `${this.state.text.substring(
              0,
              this.state.text.length - 1
            )}<span id='blink'>||</span>`
          : `<span id='blink'>||</span>`;
      this.mockInput.innerHTML = innerText;

      this.setState(prevState => ({
        text:
          this.hasUserInput || prevState.text.length > 1
            ? prevState.text.substring(0, prevState.text.length - 1)
            : ""
      }));
      this.hasUserInput = true;
    } else {
      const innerText =
        this.hasUserInput || this.state.text.length > 1
          ? `${
              this.state.text
            }<span class='newChar'>${input}</span><span id='blink'>||</span>`
          : `<span class='newChar'>${input}</span><span id='blink'>||</span>`;
      this.mockInput.innerHTML = innerText;
      this.setState(prevState => ({
        text:
          this.hasUserInput || prevState.text.length > 1
            ? prevState.text + input
            : input
      }));
      this.hasUserInput = true;
    }
  }

  render() {
    const classes = this.state.hasFocus ? "input focused" : "input";
    return (
      <div>
        <input
          ref={input => {
            this.textInput = input;
          }}
          onKeyUp={this._KeyInput}
          onBlur={this._onBlur}
          className="hiddenInput"
        />
        <div
          onClick={this._onFocus}
          ref={mockInput => {
            this.mockInput = mockInput;
          }}
          className={classes}
        />
      </div>
    );
  }
}

ReactDOM.render(<FancyInput watermarkText={"click to begin typing"}/>, document.getElementById("root"));


*/