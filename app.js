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
