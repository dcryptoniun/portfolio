import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        Copyright {year} Mayank Meena. Developer portfolio for web, blockchain,
        mobile apps, and indie games.
      </p>
      <div className="footer-links">
        <a href="https://www.gerstudio.com" target="_blank" rel="noreferrer">
          GerStudio
        </a>
        <a
          href="https://github.com/dcryptoniun"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="https://x.com/0xmynk" target="_blank" rel="noreferrer">
          X
        </a>
        <a
          href="https://discord.gg/Xp4KHCTp6V"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
        <a href="mailto:dcryptoniun+folio@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
