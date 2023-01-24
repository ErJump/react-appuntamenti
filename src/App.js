import List from "./components/List"

function App() {
  return (
    <div className="App bg-dark pt-5">
      <div className="container-lg">
        <h1 className="text-primary mb-3 text-center">Appuntamenti:</h1>
        <List/>
      </div>
    </div>
  );
}

export default App;
