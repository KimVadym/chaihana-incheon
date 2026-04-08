const config = {
  bg: "#000000",
  text: "#ffffff",
  accent: "#c9a24a",
  font: "Arial"
};

// APPLY CONFIG
const root = document.documentElement;
root.style.setProperty("--bg", config.bg);
root.style.setProperty("--text", config.text);
root.style.setProperty("--accent", config.accent);
root.style.setProperty("--font", config.font);