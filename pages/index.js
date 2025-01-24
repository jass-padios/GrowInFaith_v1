import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GrowInFaith - Available on Google Play</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" />
      </Head>

      <header style={headerStyle}>
        <h1 style={headerH1Style}>GrowInFaith</h1>
        <p style={headerPStyle}>Your journey of spiritual growth starts here</p>
      </header>

      <nav style={navStyle}>
        <ul style={navUlStyle}>
          <li><a href="#features" style={navLinkStyle}>Features</a></li>
          <li><a href="#plans" style={navLinkStyle}>Plans</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>

      <section style={heroStyle}>
        <h2 style={heroH2Style}>Faith that Moves Mountains</h2>
        <p style={heroPStyle}>Join thousands on a journey to spiritual growth with GrowInFaith, available on Google Play.</p>
        <button style={heroButtonStyle}>Download on Google Play</button>
      </section>

      <section id="features" style={sectionStyle}>
        <h3 style={sectionH3Style}>What Makes Us Unique</h3>
        <div style={featuresStyle}>
          <div style={featureStyle}>
            <h4 style={featureH4Style}>Engaging Content</h4>
            <p>Interactive materials designed for every age group.</p>
          </div>
          <div style={featureStyle}>
            <h4 style={featureH4Style}>Bible Challenges</h4>
            <p>Daily quizzes to strengthen your knowledge of scripture.</p>
          </div>
          <div style={featureStyle}>
            <h4 style={featureH4Style}>Guided Devotionals</h4>
            <p>Reflect and connect with God through daily guides.</p>
          </div>
        </div>
      </section>

      <section id="plans" style={ctaStyle}>
        <h3 style={ctaH3Style}>Choose Your Plan</h3>
        <p>Affordable subscriptions starting at ₱100 per quarter.</p>
        <button style={ctaButtonStyle}>Subscribe Now</button>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2025 GrowInFaith. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// Styles
const headerStyle = {
  background: "linear-gradient(135deg, #00C9FF, #92FE9D)",
  color: "#fff",
  padding: "2rem 1rem",
  textAlign: "center",
};

const headerH1Style = {
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const headerPStyle = {
  fontSize: "1.2rem",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  background: "#fff",
  borderBottom: "2px solid #00C9FF",
  padding: "1rem 0",
};

const navUlStyle = {
  listStyle: "none",
  display: "flex",
  gap: "2rem",
};

const navLinkStyle = {
  color: "#333",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
  transition: "color 0.3s",
};

const heroStyle = {
  background: "url('https://via.placeholder.com/1500x500') no-repeat center/cover",
  color: "white",
  textAlign: "center",
  padding: "5rem 1rem",
};

const heroH2Style = {
  fontSize: "3.5rem",
  marginBottom: "1rem",
};

const heroPStyle = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
};

const heroButtonStyle = {
  background: "#92FE9D",
  color: "#fff",
  border: "none",
  padding: "0.75rem 2rem",
  fontSize: "1.2rem",
  fontWeight: "bold",
  borderRadius: "25px",
  cursor: "pointer",
  transition: "all 0.3s",
};

const sectionStyle = {
  padding: "4rem 1rem",
  textAlign: "center",
};

const sectionH3Style = {
  fontSize: "2.5rem",
  color: "#00C9FF",
  marginBottom: "2rem",
};

const featuresStyle = {
  display: "flex",
  justifyContent: "space-around",
  gap: "2rem",
  flexWrap: "wrap",
};

const featureStyle = {
  background: "#fff",
  padding: "2rem",
  borderRadius: "20px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "300px",
  flex: "1",
  maxWidth: "300px",
};

const featureH4Style = {
  fontSize: "1.5rem",
  color: "#333",
  marginBottom: "1rem",
};

const ctaStyle = {
  background: "linear-gradient(135deg, #00C9FF, #92FE9D)",
  color: "white",
  textAlign: "center",
  padding: "3rem 1rem",
  borderRadius: "20px",
  margin: "2rem auto",
  width: "90%",
  maxWidth: "800px",
};

const ctaH3Style = {
  fontSize: "2rem",
  marginBottom: "1rem",
};

const ctaButtonStyle = {
  background: "white",
  color: "#00C9FF",
  border: "none",
  padding: "0.75rem 1.5rem",
  fontSize: "1.2rem",
  fontWeight: "bold",
  borderRadius: "25px",
  cursor: "pointer",
  transition: "all 0.3s",
};

const footerStyle = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "2rem 1rem",
};
