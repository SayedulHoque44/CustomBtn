import { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="rootDiv">
      {/* With html element */}
      <CustomButton
        text="Menu"
        InnerContent={
          <ul
            style={{
              display: "flex",
              width: "200px",
              margin: "0",
              // padding: "0",
              flexDirection: "column",
              gap: "3px",
            }}>
            {["list 1", "list 2", "list 3"].map((item, index) => (
              <li
                key={index}
                style={{ padding: "2px 5px", background: "green" }}>
                {item}
              </li>
            ))}
          </ul>
        }
      />
      {/* with only text */}
      <CustomButton text="Menu" InnerContent={"hoverd me!"} />
    </div>
  );
}

export default App;
