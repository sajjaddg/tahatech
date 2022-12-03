import './App.css';

function App() {
  return (
    <>
      <div>
        {process.env.REACT_APP_SECRET_KEY}
      </div>
      
    </>
  );
}

export default App;
