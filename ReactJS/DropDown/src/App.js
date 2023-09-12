import DropDown from "./DropDown";
import "./styles.css";

export default function App() {
  const options = ["profile", "dashboard", "setting", "log out"];
  return (
    <div className="App">
      <DropDown options={options} />
    </div>
  );
}
