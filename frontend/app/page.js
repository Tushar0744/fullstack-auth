export default function HomePage() {
  return (
    <main className="home-page">
      <div className="home-container">
        <h1 className="home-title">Welcome to the Fullstack Auth App</h1>
        <p className="home-subtitle">Please login or signup to access protected content.</p>
        <div className="action-buttons">
          <a href="/login">
            <button className="home-button">Login</button>
          </a>
          <a href="/signup">
            <button className="home-button">Sign Up</button>
          </a>
        </div>
      </div>
    </main>
  );
}
