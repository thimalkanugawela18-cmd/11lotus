export default function Home() {
  return (
    <main style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
      color: "white",
      fontFamily: "serif"
    }}>

      {/* HERO SECTION */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "70px",
          letterSpacing: "10px",
          color: "#f5d28e"
        }}>
          11LOTUS
        </h1>

        <p style={{
          maxWidth: "500px",
          marginTop: "20px",
          color: "#ccc",
          lineHeight: "1.8"
        }}>
          A luxury anonymous digital sanctuary where two souls
          connect beyond identity.
        </p>

        <a href="#experience">
          <button style={{
            marginTop: "40px",
            padding: "15px 50px",
            borderRadius: "30px",
            border: "1px solid #f5d28e",
            background: "transparent",
            color: "#f5d28e",
            letterSpacing: "3px",
            cursor: "pointer"
          }}>
            DISCOVER
          </button>
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section style={{
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#f5d28e", fontSize: "40px" }}>Our Vision</h2>
        <p style={{
          maxWidth: "700px",
          margin: "30px auto",
          color: "#aaa",
          lineHeight: "2"
        }}>
          11LOTUS is crafted as an exclusive experience platform.
          No names. No faces. Just presence. A refined digital
          environment built for meaningful anonymous connection.
        </p>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" style={{
        padding: "120px 20px",
        textAlign: "center",
        background: "rgba(255,255,255,0.03)"
      }}>
        <h2 style={{ color: "#f5d28e", fontSize: "40px" }}>
          The Experience
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "30px auto",
          color: "#aaa",
          lineHeight: "2"
        }}>
          Step into a minimal and elegant interface designed
          for calm interaction. Initiate connection with a
          single action and enter a private pairing sequence.
        </p>

        <a href="/scan">
          <button style={{
            marginTop: "40px",
            padding: "15px 50px",
            borderRadius: "30px",
            border: "none",
            background: "#f5d28e",
            color: "#000",
            letterSpacing: "3px",
            cursor: "pointer"
          }}>
            ENTER PORTAL
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        marginTop: "60px",
        color: "#777"
      }}>
        © 2026 11LOTUS. Crafted with precision.
      </footer>

    </main>
  );
}
