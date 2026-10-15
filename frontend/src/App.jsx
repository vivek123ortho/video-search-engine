
import { useEffect, useState } from "react";

const API_URL = "http://localhost:8000";

function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend unavailable"));
  }, []);

  return (
    <main style={{ padding: "32px", fontFamily: "Arial, sans-serif" }}>
      <h1>Video Search Engine</h1>
      <p>
        Backend status: <strong>{status}</strong>
      </p>
    </main>
  );
}

export default App;
