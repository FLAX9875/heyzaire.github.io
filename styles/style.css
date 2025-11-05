/* styles/style.css - global */
:root{
  --bg: #0d0d10;
  --panel: rgba(255,255,255,0.02);
  --text: #e9e9ea;
  --muted: #9c9c9c;
  --accent: #b380ff;
  --accent-dark: #6e4fcf; /* darker purple for light mode */
  --nav-bg: rgba(0,0,0,0.45);
  --overlay-bg: rgba(0,0,0,0.7);
  --transition: 480ms;
  --focus-ring: 0 6px 20px rgba(179,128,255,0.12);
}

/* Light mode variable overrides */
body.light-mode{
  --bg: #faf9fb;
  --panel: rgba(0,0,0,0.04);
  --text: #111114;
  --muted: #616161;
  --accent: #7d63cc;
  --nav-bg: rgba(255,255,255,0.85);
  --overlay-bg: rgba(255,255,255,0.9);
  --focus-ring: 0 6px 20px rgba(124,95,204,0.08);
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;padding:0}
body{
  background:var(--bg);
  color:var(--text);
  font-family: "Courier New", monospace;
  -webkit-font-smoothing:antialiased;
  transition: background var(--transition) ease, color var(--transition) ease;
  overflow-y:auto;
  -webkit-overflow-scrolling:touch;
}

/* header */
.site-header{
  width:100%;
  position:fixed;
  top:0;
  left:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  padding:14px 20px;
  z-index:40;
}
.site-link{
  color:var(--muted);
  text-decoration:none;
  font-size:14px;
  letter-spacing:1px;
}
body.light-mode .site-link{ color: #6b4fae }

/* theme toggle icon */
.theme-toggle{
  background:none;border:0;padding:6px;border-radius:8px;cursor:pointer;
}
#theme-icon{
  width:28px;height:28px;transition: transform 600ms ease, filter 600ms ease, opacity 400ms ease;
  filter:drop-shadow(0 0 10px rgba(179,128,255,0.22));
}
/* ensure visible in light mode */
body.light-mode #theme-icon{
  filter: drop-shadow(0 0 8px rgba(125,99,204,0.12));
}

/* main area */
.main-wrap{ min-height:100vh; display:flex; align-items:center; justify-content:center; padding:110px 20px 120px; }
.hero{ text-align:center; max-width:960px; padding:18px; }

/* alive heading */
.alive-heading{
  font-size:36px;
  letter-spacing:1.4px;
  color:var(--accent);
  display:inline-block;
  padding:12px 26px;
  border-radius:12px;
  border:2px solid rgba(179,128,255,0.12);
  box-shadow:var(--focus-ring);
  transition: box-shadow 400ms ease, transform 400ms ease, border-color var(--transition);
  margin-bottom:12px;
}
body.light-mode .alive-heading{
  color:var(--accent);
  border-color: rgba(125,99,204,0.18);
  box-shadow: 0 0 10px rgba(0,0,0,0.06);
}
.alive-heading:hover{ transform:scale(1.02) }

/* blinking caret through pseudo */
.alive-heading::after{
  content: "▌";
  margin-left:8px;
  color: var(--accent);
  opacity:1;
  animation: blink 1.1s steps(2) infinite;
}
@keyframes blink{50%{opacity:0}}

/* description */
.description{ color:var(--muted); margin-top:8px; font-size:15px; max-width:720px; margin-left:auto;margin-right:auto; }

/* CTA row */
.cta-row{ margin-top:18px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
.cta{ padding:9px 18px; border-radius:8px; text-decoration:none; font-size:14px; transition: all 220ms ease; }
.cta.outline{ border:1px solid rgba(179,128,255,0.22); color:var(--accent); background:transparent; }
body.light-mode .cta.outline{ border:1px solid rgba(125,99,204,0.22) }
.cta.outline:hover{ background:var(--accent); color:#0a0a0a; transform:translateY(-4px); box-shadow:var(--focus-ring) }

/* read blog */
.read-blog{ display:inline-block; margin-top:12px; border:1px solid rgba(179,128,255,0.16); padding:8px 18px; border-radius:8px; color:var(--accent); text-decoration:none; transition:all 220ms;}
.read-blog:hover{ background:var(--accent); color:#070707; }

/* stats (scrobble / commit / latest) */
.stats-row{ margin-top:18px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-bottom:6px; }
.stat{ min-width:150px; display:flex; justify-content:space-between; align-items:center; gap:8px; padding:8px 12px; border-radius:8px; border:1px solid rgba(179,128,255,0.12); background:var(--panel); color:var(--accent); font-size:13px; }
body.light-mode .stat{ border-color: rgba(125,99,204,0.12); background: rgba(0,0,0,0.02); color:var(--accent); }

/* bottom nav */
.bottom-nav{ position:fixed; left:50%; transform:translateX(-50%); bottom:18px; display:flex; gap:26px; z-index:60; padding:8px 14px; border-radius:12px; backdrop-filter: blur(6px); background:var(--nav-bg); transition:background var(--transition); }
body.light-mode .bottom-nav{ background:var(--nav-bg) }
.nav-btn img{ width:28px;height:28px; transition: transform 240ms, filter 240ms; filter: invert(1); }
body.light-mode .nav-btn img{ filter: invert(0) }
.bottom-nav .nav-btn:hover img{ transform:scale(1.12); filter: drop-shadow(0 0 10px rgba(179,128,255,0.3)) }

/* fade-in utility */
.fade-in{ opacity:0; transform:translateY(12px); transition: opacity 900ms ease, transform 900ms ease; }
.fade-in.appear{ opacity:1; transform:translateY(0) }

/* overlay helper (archive screens will use) */
.overlay{
  background: var(--overlay-bg);
  transition: background var(--transition);
}

/* responsive */
@media (max-width:640px){
  .alive-heading{ font-size:26px; padding:10px 14px; }
  .description{ font-size:14px; padding:0 20px; }
  .nav-btn img{ width:22px;height:22px }
  .bottom-nav{ gap:18px; padding:8px 10px }
  .stat{ min-width:120px; font-size:13px; padding:8px 10px; }
}
