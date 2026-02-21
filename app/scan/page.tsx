export default function Scan() {
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
        fontSize: "40px",
        letterSpacing: "4px",
        color: "#f5d28e"
      }}>
        Rabbit Pair Portal
      </h1>

      <p style={{
        marginTop: "20px",
        color: "#aaa"
      }}>
        Searching for a compatible presence...
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "14px 40px",
          background: "#f5d28e",
          border: "none",
          color: "black",
          letterSpacing: "2px",
          cursor: "pointer"
        }}
        onClick={() => alert("Connection Established 💕")}
      >
        INITIATE
      </button>

    </main>
  );
}
