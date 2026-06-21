<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shxwn — CODM Settings & Loadouts</title>
<style>
:root{--bg:#1a0f24;--bg2:#2a1838;--card:rgba(60,35,85,0.55);--border:rgba(220,174,255,0.18);--primary:#dcaeff;--primary-dark:#b87adf;--primary-deep:#8a4fb3;--text:#f5ecff;--muted:#c9b8da;--subtle:#8a7a9c}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui,-apple-system,sans-serif;background:radial-gradient(circle at 20% 0%,var(--bg2) 0%,var(--bg) 60%);color:var(--text);min-height:100vh;position:relative;overflow-x:hidden}
body::before{content:'';position:fixed;top:20vh;left:10vw;width:18rem;height:18rem;border-radius:50%;opacity:.2;filter:blur(4rem);background:var(--primary);pointer-events:none;z-index:0}
body::after{content:'';position:fixed;top:50vh;right:0;width:24rem;height:24rem;border-radius:50%;opacity:.1;filter:blur(4rem);background:var(--primary-dark);pointer-events:none;z-index:0}

header{position:sticky;top:0;z-index:40;background:rgba(26,15,36,.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.hdr{max-width:72rem;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:.75rem}
.logo-i{width:2.5rem;height:2.5rem;border-radius:.75rem;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.125rem;background:linear-gradient(135deg,var(--primary),var(--primary-deep));color:#fff;box-shadow:0 0 20px rgba(220,174,255,.25)}
.logo-t{font-size:1rem;font-weight:800;letter-spacing:.2em;color:var(--primary)}
.logo-s{font-size:.625rem;letter-spacing:.15em;color:var(--subtle)}
.tabs{display:flex;gap:.25rem;padding:.25rem;border-radius:9999px;background:rgba(220,174,255,.08);border:1px solid var(--border)}
.tb{padding:.25rem 1rem;border-radius:9999px;border:none;cursor:pointer;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:.2s;background:transparent;color:var(--muted)}
.tb.act{background:var(--primary);color:var(--bg)}
.tb:hover:not(.act){color:var(--text)}
main{max-width:72rem;margin:0 auto;padding:2rem 1.5rem;position:relative;z-index:10}
.tc{display:none}.tc.act{display:block}
.sec{border-radius:1rem;padding:1.5rem;transition:.2s;background:var(--card);border:1px solid var(--border);backdrop-filter:blur(10px);margin-bottom:1.5rem}
.sh{display:flex;align-items:center;gap:.75rem;margin-bottom:.25rem}
.si{width:2.25rem;height:2.25rem;border-radius:.75rem;display:flex;align-items:center;justify-content:center;background:rgba(220,174,255,.125);border:1px solid rgba(220,174,255,.25);box-shadow:0 0 16px rgba(220,174,255,.2);color:var(--primary);flex-shrink:0}
.st{font-size:.875rem;font-weight:900;letter-spacing:.15em;color:var(--primary)}
.ss{font-size:.75rem;color:var(--muted)}
.sb{margin-top:1rem}
.hero{text-align:center;padding:2.5rem 0}
.hero h1{font-size:clamp(3rem,8vw,4.5rem);font-weight:900;letter-spacing:.3em;margin-bottom:.75rem;background:linear-gradient(135deg,var(--primary),var(--primary-dark));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero p{font-size:.875rem;letter-spacing:.4em;text-transform:uppercase;color:var(--muted)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem;max-width:32rem;margin-left:auto;margin-right:auto}
.sc{border-radius:1rem;padding:1rem;transition:.2s;background:var(--card);border:1px solid var(--border);backdrop-filter:blur(10px)}
.sc:hover{transform:translateY(-.125rem)}
.sc .n{font-size:1.875rem;font-weight:900;color:var(--primary)}
.sc .l{font-size:.625rem;letter-spacing:.2em;margin-top:.25rem;color:var(--subtle)}
.bo{padding:.5rem 1.25rem;border-radius:9999px;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:.2s;cursor:pointer;background:transparent;color:var(--primary);border:1px solid rgba(220,174,255,.4);display:inline-flex;align-items:center;gap:.375rem}
.bo:hover{background:rgba(220,174,255,.1);border-color:var(--primary)}
.bo:disabled{opacity:.4;cursor:not-allowed}
.bf{padding:.5rem 1.25rem;border-radius:9999px;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:.2s;cursor:pointer;background:var(--primary);color:var(--bg);border:none;box-shadow:0 4px 16px rgba(220,174,255,.25);display:inline-flex;align-items:center;gap:.375rem}
.bf:hover{background:#e6c2ff}
.bs{width:3rem;height:3rem;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;transition:.2s;cursor:pointer;background:transparent;color:var(--primary);border:1px solid rgba(220,174,255,.4)}
.bs:hover{background:rgba(220,174,255,.1);transform:translateY(-2px)}
.bs:disabled{opacity:.4;cursor:not-allowed}
.cr{border-radius:.75rem;padding:1rem;transition:.2s;cursor:pointer;background:rgba(220,174,255,.05);border:1px solid var(--border);margin-bottom:.75rem}
.cr:hover{border-color:rgba(220,174,255,.4);background:rgba(220,174,255,.1)}
.cr .cl{font-size:.625rem;font-weight:700;letter-spacing:.15em;margin-bottom:.5rem;color:var(--primary)}
.cr .cv{font-family:monospace;font-size:.875rem;word-break:break-all;color:var(--text)}
.ch{font-size:.625rem;margin-top:.5rem;display:flex;align-items:center;gap:.25rem;letter-spacing:.1em;color:var(--subtle)}
.pk{border-radius:.75rem;padding:1rem;background:rgba(220,174,255,.05);border:1px solid var(--border)}
.pk h4{font-size:1rem;font-weight:900;letter-spacing:.1em;color:var(--primary)}
.pk .ps{font-size:.625rem;letter-spacing:.1em;margin-bottom:.75rem;color:var(--subtle)}
.pk li{display:flex;align-items:center;gap:.5rem;font-size:.875rem;padding:.25rem 0;color:var(--text);list-style:none}
.fv{border-radius:.75rem;padding:1.25rem;text-align:center;background:rgba(220,174,255,.05);border:1px solid var(--border)}
.fv .fv-v{font-size:2.25rem;font-weight:900;color:var(--primary)}
.fv .fv-l{font-size:.625rem;letter-spacing:.15em;margin-top:.5rem;color:var(--muted)}
.hs{border-radius:1rem;padding:1rem;transition:.2s;background:var(--card);border:1px solid var(--border)}
.hs:hover{transform:translateY(-.125rem)}
.hn{width:2.25rem;height:2.25rem;border-radius:.75rem;display:flex;align-items:center;justify-content:center;font-weight:900;margin-bottom:.75rem;background:rgba(220,174,255,.15);color:var(--primary);border:1px solid rgba(220,174,255,.3)}
.ls{position:relative;max-width:28rem;margin-bottom:1rem}
.ls input{width:100%;padding:.625rem .75rem .625rem 2.5rem;border-radius:9999px;font-size:.875rem;outline:none;background:var(--card);border:1px solid var(--border);color:var(--text);backdrop-filter:blur(10px)}
.ls input::placeholder{color:var(--subtle)}
.ls svg{position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:var(--subtle)}
.fc{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem}
.chip{padding:.25rem 1rem;border-radius:9999px;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:.2s;cursor:pointer;background:rgba(220,174,255,.05);color:var(--muted);border:1px solid var(--border)}
.chip.act{background:var(--primary);color:var(--bg);border-color:var(--primary)}
.lg{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem}
.lc{border-radius:1rem;padding:1.25rem;transition:.2s;background:var(--card);border:1px solid var(--border);backdrop-filter:blur(10px)}
.lc:hover{transform:translateY(-.25rem)}
.lch{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:.75rem}
.lcat{font-size:.5625rem;font-weight:700;letter-spacing:.2em;padding:.125rem .5rem;border-radius:.375rem;display:inline-block}
.limg{height:6rem;border-radius:.75rem;display:flex;align-items:center;justify-content:center;margin-bottom:.75rem;background:linear-gradient(135deg,rgba(220,174,255,.08),rgba(220,174,255,.02));border:1px solid rgba(220,174,255,.12);font-size:2rem;color:var(--primary);opacity:.3}
.ln{font-weight:900;font-size:1.125rem;letter-spacing:.1em;color:var(--text)}
.ld{font-size:.75rem;margin:.25rem 0 .75rem;color:var(--muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.5rem}
.la{font-size:.625rem;line-height:1.5;margin-bottom:.75rem;padding-bottom:.75rem;border-bottom:1px dashed var(--border);color:var(--subtle)}
.la strong{color:var(--primary);letter-spacing:.1em}
.lact{display:flex;gap:.5rem}
.lco{flex:1;display:flex;align-items:center;justify-content:center;gap:.375rem;padding:.5rem;border-radius:9999px;font-size:.75rem;font-weight:700;letter-spacing:.1em;transition:.2s;cursor:pointer;border:none;color:var(--bg)}
.lfv{background:none;border:none;cursor:pointer;color:var(--subtle);transition:transform .15s;padding:.25rem}
.lfv:hover{transform:scale(1.15)}
.toast{position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);z-index:100;padding:.625rem 1.25rem;border-radius:9999px;font-size:.875rem;font-weight:600;background:var(--primary);color:var(--bg);box-shadow:0 8px 32px rgba(220,174,255,.3);display:none;align-items:center;gap:.5rem}
.toast.show{display:flex;animation:fadeInUp .2s ease-out}
footer{text-align:center;padding:3rem 0 1rem;font-size:.6875rem;letter-spacing:.15em;color:var(--subtle)}
.dt{display:flex;gap:.25rem;padding:.25rem;border-radius:9999px;background:rgba(220,174,255,.08);border:1px solid var(--border)}
.db{padding:.25rem .75rem;border-radius:9999px;font-size:.75rem;font-weight:600;transition:.2s;cursor:pointer;background:transparent;color:var(--muted);border:none}
.db.act{background:var(--primary);color:var(--bg)}
svg.ic{width:14px;height:14px}
.fg2{display:flex;gap:.5rem;flex-wrap:wrap}

/* Admin Login Modal */
.al-overlay{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(10,5,20,0.85);backdrop-filter:blur(8px)}
.al-overlay.show{display:flex}
.al-box{text-align:center;padding:2.5rem;border-radius:1.5rem;background:rgba(60,35,85,0.95);border:1px solid rgba(220,174,255,0.25);max-width:22rem;width:90%;box-shadow:0 0 40px rgba(220,174,255,0.15)}
.al-box .al-icon{width:3rem;height:3rem;border-radius:1rem;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#dcaeff,#8a4fb3);color:#fff;font-size:1.25rem;margin-bottom:1rem}
.al-box h3{font-size:.875rem;font-weight:900;letter-spacing:.2em;color:#dcaeff;margin-bottom:.25rem}
.al-box p{font-size:.625rem;letter-spacing:.15em;color:#8a7a9c;margin-bottom:1.5rem}
.al-box input{width:100%;padding:.75rem 1rem;border-radius:9999px;font-size:.875rem;outline:none;background:rgba(60,35,85,0.55);border:1px solid rgba(220,174,255,0.18);color:#f5ecff;text-align:center;letter-spacing:.1em;transition:.2s}
.al-box input:focus{border-color:#dcaeff;box-shadow:0 0 20px rgba(220,174,255,.15)}
.al-box button{margin-top:1rem;width:100%;padding:.75rem;border-radius:9999px;font-size:.75rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;cursor:pointer;transition:.2s;background:#dcaeff;color:#1a0f24;border:none}
.al-box button:hover{background:#e6c2ff}
.al-box .al-err{font-size:.75rem;margin-top:.75rem;color:#ff7a99;min-height:1.25rem}
.al-close{position:absolute;top:1rem;right:1rem;background:none;border:none;color:#8a7a9c;cursor:pointer;font-size:1.25rem;padding:.25rem}
.admin-only{display:none}
.admin-only.show{display:block}
.tb.admin-only{display:none}
.tb.admin-only.show{display:inline-block}

@keyframes fadeInUp{from{opacity:0;transform:translateY(8px) translateX(-50%)}to{opacity:1;transform:translateY(0) translateX(-50%)}}
@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
@media(max-width:640px){.hdr{flex-direction:column;gap:.75rem}.lg{grid-template-columns:1fr}.dt{width:100%}.db{flex:1;justify-content:center}}
</style>
</head>
<body>

<!-- ADMIN LOGIN MODAL -->
<div class="al-overlay" id="alOverlay">
  <div class="al-box">
    <div class="al-icon">&#x1F512;</div>
    <h3>ADMIN ACCESS</h3>
    <p>Enter password to manage settings</p>
    <input type="password" id="alInput" placeholder="Password..." autocomplete="off">
    <button id="alBtn">UNLOCK</button>
    <div class="al-err" id="alErr"></div>
  </div>
</div>

<header>
<div class="hdr"><div class="logo"><div class="logo-i">S</div><div><div class="logo-t">SHXWN</div><div class="logo-s">CODM SETTINGS</div></div></div><div class="tabs"><button class="tb act" data-tab="home">Home</button><button class="tb" data-tab="loadouts">Loadouts</button><button class="tb" data-tab="manage" id="manageTab">Manage</button></div></div></header>
<main>
<div class="tc act" id="home-tab">
<div class="hero"><h1>S H X W N</h1><p id="tagline"></p><div class="stats" id="stat-cards"></div></div><div class="sec"><div class="sh"><div class="si"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg></div><div><div class="st">SEND A GIFT</div><div class="ss">Support Shxwn</div></div></div><div class="sb" id="gift-sec"></div></div><div class="sec"><div class="sh"><div class="si"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><div class="st">FOLLOW ME</div><div class="ss">Social Media</div></div></div><div class="sb" id="social-sec"></div></div><div class="sec"><div class="sh"><div class="si"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg></div><div><div class="st">SENSI &amp; HUD</div><div class="ss">Sensitivity &amp; HUD</div></div></div><div class="sb" id="sensi-sec"></div></div><div class="sec"><div class="sh"><div class="si"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><div class="st">PERKS</div></div></div><div class="sb" id="perks-sec"></div></div><div class="sec"><div class="sh"><div class="si"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div><div><div class="st">FIELD OF VIEW</div></div></div><div class="sb" id="fov-sec"></div></div><div class="sec"><div class="sh"><div class="si"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><div><div class="st">HOW TO USE</div></div></div><div class="sb" id="howto-sec"></div></div>
</div>
<div class="tc" id="loadouts-tab">
<h2 style="font-size:1.875rem;font-weight:900;letter-spacing:.1em;margin-bottom:.5rem;color:var(--primary)" id="loadouts-count"></h2><div class="ls"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" id="lsearch" placeholder="Search weapons..."></div><div class="fc" id="filter-chips"></div><div class="lg" id="l-grid"></div>
</div>

<!-- ========== MANAGE TAB (admin only) ========== -->
<div class="tc" id="manage-tab">
<h2 style="font-size:1.875rem;font-weight:900;letter-spacing:.1em;margin-bottom:.25rem;color:var(--primary)">MANAGE</h2>
<p style="font-size:.75rem;margin-bottom:1.5rem;color:var(--muted)">Admin panel — edit all settings, perks, and loadouts</p>

<div class="sec" style="border-color:rgba(220,174,255,0.4)">
<div class="sh"><div class="si"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div><div><div class="st">GENERAL SETTINGS</div></div></div>
<div class="sb">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">
<div><label style="font-size:.625rem;font-weight:700;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:.25rem">SENSI (PHONE)</label><input id="msiP" style="width:100%;padding:.5rem .75rem;border-radius:.5rem;font-size:.875rem;outline:none;background:rgba(60,35,85,0.55);border:1px solid var(--border);color:var(--text)"></div>
<div><label style="font-size:.625rem;font-weight:700;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:.25rem">SENSI (TABLET)</label><input id="msiT" style="width:100%;padding:.5rem .75rem;border-radius:.5rem;font-size:.875rem;outline:none;background:rgba(60,35,85,0.55);border:1px solid var(--border);color:var(--text)"></div>
<div><label style="font-size:.625rem;font-weight:700;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:.25rem">HUD (PHONE)</label><input id="mhuP" style="width:100%;padding:.5rem .75rem;border-radius:.5rem;font-size:.875rem;outline:none;background:rgba(60,35,85,0.55);border:1px solid var(--border);color:var(--text)"></div>
<div><label style="font-size:.625rem;font-weight:700;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:.25rem">HUD (TABLET)</label><input id="mhuT" style="width:100%;padding:.5rem .75rem;border-radius:.5rem;font-size:.875rem;outline:none;background:rgba(60,35,85,0.55);border:1px solid var(--border);color:var(--text)"></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:.75rem">
<div><label style="font-size:.625rem;font-weight:700;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:.25rem">FOV RANGE</label><input id="mfR" style="width:100%;padding:.5rem .75rem;border-radius:.5rem;font-size:.875rem;outline:none;background:rgba(60,35,85,0.55);border:1px solid var(--border);color:var(--text)"></div>
<div><label style="font-size:.625rem;font-weight:700;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:.25rem">FOV FPP</label><input id="mfF" style="width:100%;padding:.5rem .75rem;border-radius:.5rem;font-size:.875rem;outline:none;background:rgba(60,35,85,0.55);border:1px solid var(--border);color:var(--text)"></div>
</div>
<h4 style="font-size:.75rem;font-weight:800;letter-spacing:.15em;color:var(--primary);margin:1rem 0 .75rem">PERKS (one per line)</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">
<div><label style="font-size:.625rem;font-weight:700;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:.25rem">OVERKILL (WILDCARD)</label><textarea id="mpO" rows="3" style="width:100%;padding
