import { useEffect, useState } from "react";
import axios from "axios";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/api/matches")
      .then(res => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching matches:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ 
      padding: "20px", 
      fontFamily: "Arial, sans-serif", 
      backgroundColor: "#f9f9f9", 
      minHeight: "100vh", 
      color: "#333" 
    }}>
      <h1>Upcoming Soccer Matches</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {matches.map((match, idx) => (
          <li key={idx} style={{ marginBottom: "12px" }}>
            <strong>{match.title}</strong><br />
            {new Date(match.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
  
}
