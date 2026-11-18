// Infinity Wire — Redesigned
const $ = (sel) => document.querySelector(sel);

function render() {
  const app = $('#app');
  app.innerHTML = `
    <header class="topbar">
      <div class="logo">Infinity <span>Wire</span></div>
    </header>
    <main class="main">
      <h1>Market tools. One question at a time.</h1>
      <div class="tool-grid">
        <a href="#builders" class="tool-card"><h3>Builders Index</h3><p>Who built the company?</p></a>
        <a href="#filter" class="tool-card"><h3>Stock Filter</h3><p>Which stocks fit?</p></a>
        <a href="#hindsight" class="tool-card"><h3>Hindsight</h3><p>If you had bought it then?</p></a>
        <a href="#rotation" class="tool-card"><h3>Rotation</h3><p>Which sectors are stronger?</p></a>
      </div>
    </main>
  `;
}
render();
