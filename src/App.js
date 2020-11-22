const { default: Lists } = require("./components/Lists");

function App() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text"></input>
      <Lists />
    </div>
  );
}

export default App;
