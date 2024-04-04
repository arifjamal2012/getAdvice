import { useState } from 'react'
import './App.css';

function App() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  async function getAdvice() {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setLoading(false);
    setAdvice(data.slip.advice);
  }

  return (
    <div className="advice-area">
      <div className="advice-inner">
        {loading ?
          <div class="loader"></div> :
          <h1>{advice ? advice : "Please click the get advice button.Your advice gonna surprise you!"}</h1>
        }
        <button onClick={getAdvice}>Get Advice</button>
        </div>
    </div>
  )
}

export default App;
