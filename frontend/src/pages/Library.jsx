import { useQuery } from "@tanstack/react-query";
import { fetchEpisodes } from "../api/endpoints";
import { useAuth } from "../auth/AuthContext";

export default function Library() {
  const { user, logout } = useAuth();
  const { data: episodes, isLoading, error } = useQuery({
    queryKey: ["episodes"],
    queryFn: fetchEpisodes,
  });

  return (
    <div className="container">
      <div className="header">
        <h1>My Library</h1>
        <div>
          <span>{user.email} </span>
          <button onClick={logout}>Log out</button>
        </div>
      </div>

      <div className="card">
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error.message}</p>}
        {episodes?.length === 0 && (
          <p>No episodes yet. Uploading comes in Phase 2.</p>
        )}
        <ul>
          {episodes?.map((ep) => (
            <li key={ep.id}>{ep.title} ({ep.status})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}