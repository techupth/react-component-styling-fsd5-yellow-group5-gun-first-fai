import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <div className="App">
        <div className="button-components-section">
          {/* Render ตัว Button 2 แบบ */}
          <Button type="primary" />
          <br></br>
          <Button type="secondary" />
        </div>
        <hr />
        <div className="alert-components-section">
          {/* Render ตัว Alert 4 แบบ */}
          <Alert type="error" />
          <br></br>
          <Alert type="warning" />
          <br></br>
          <Alert type="info" />
          <br></br>
          <Alert type="success" />
        </div>
      </div>
    </>
  );
}

export default App;
