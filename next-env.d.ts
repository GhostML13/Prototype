@tailwind base;
@tailwind components;
@tailwind utilities;
:root { color-scheme: dark; }
html, body { min-height: 100%; background: #07111f; color: #e8eef8; }
body { background-image: radial-gradient(circle at 15% 20%, rgba(125,211,252,0.12), transparent 22%), radial-gradient(circle at 80% 15%, rgba(167,139,250,0.12), transparent 24%), linear-gradient(180deg, #07111f 0%, #091323 100%); }
* { border-color: #1f3148; }
.panel { @apply rounded-2xl border border-line bg-panel/80 shadow-panel backdrop-blur; }
.badge { @apply inline-flex items-center rounded-full border border-line px-3 py-1 text-xs text-muted; }
