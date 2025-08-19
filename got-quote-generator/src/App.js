import './App.css';

  const quote = "Der Winter naht.";
  const character = "Ned Stark";

  const quoteStyle = {
    fontStyle: 'italic',
    color: '#4832d9ff', // "Der Winter naht" ist in blau
    fontSize: '1.5em',
    marginBottom: '10px',
    borderLeft: '4px solid #262c16ff', //Ramen Strich vorne 
    paddingLeft: '15px'
  };

  const characterStyle = {
    fontSize: '0.8em',
    color: '#550404ff',// Ned Stark unten ist rot
    marginTop: '5px',
    display: 'block'
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <blockquote style={quoteStyle}>
          "{quote}"
        </blockquote>
      </main>
      <footer style={characterStyle}>
        - {character}
      </footer>
    </div>
  );
}

export default App;