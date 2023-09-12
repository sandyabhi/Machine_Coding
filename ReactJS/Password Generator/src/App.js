import { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import PasswordStrengthIndicator from "./components/StrengthIndicator";
import usePasswordGenerator from "./hooks/use-password-generator";
import "./styles.css";

export default function App() {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Upper Case", state: false },
    { title: "Include Lower Case", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbol", state: false }
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <hr />
        {password && (
          <div className="header">
            <div className="title">{password}</div>

            <Button
              text={copied ? "Copied" : "Copy"}
              customClass="copy_btn"
              onClick={handleCopy}
            />
          </div>
        )}

        <div className="char_length">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min="0"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="checkbox_main">
          {checkboxData.map((checkbox, i) => {
            return (
              <Checkbox
                title={checkbox.title}
                state={checkbox.state}
                onChange={() => handleCheckboxChange(i)}
                key={i}
              />
            );
          })}
        </div>

        <PasswordStrengthIndicator password={password} />

        {errorMessage && <div className="error_msg">{errorMessage}</div>}

        <Button
          text="Generate Password"
          customClass="generate_btn"
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>
    </>
  );
}
