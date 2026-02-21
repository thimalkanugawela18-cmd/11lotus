export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0f0f0f",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "serif"
    }}>
      
      <h1 style={{
        fontSize: "60px",
        letterSpacing: "8px",
        marginBottom: "20px",
        color: "#f5d28e"
      }}>
        11LOTUS
      </h1>

      <p style={{
        fontSize: "18px",
        color: "#ccc",
        maxWidth: "500px",
        textAlign: "center",
        lineHeight: "1.8"
      }}>
        An exclusive anonymous connection experience.
        Enter a private digital space where two souls meet without identity.
      </p>

      <a href="/scan">
        <button style={{
          marginTop: "40px",
          padding: "14px 40px",
          background: "transparent",
          border: "1px solid #f5d28e",
          color: "#f5d28e",
          letterSpacing: "2px",
          cursor: "pointer",
          transition: "0.3s"
        }}>
          ENTER EXPERIENCE
        </button>
      </a>

    </main>
  );
}
