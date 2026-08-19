/* ============================================================
   JETZT. — Tweaks island (React). The page stays vanilla;
   this only writes CSS variables to :root.
   ============================================================ */

const JETZT_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#f0a184",
  "radius": "soft"
}/*EDITMODE-END*/;

function hexToRgb(hex) {
  const m = hex.replace('#', '');
  const n = parseInt(m.length === 3 ? m.split('').map(c => c + c).join('') : m, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(', ');
}

function JetztTweaks() {
  const [t, setTweak] = useTweaks(JETZT_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--accent-rgb', hexToRgb(t.accent));
  }, [t.accent]);

  React.useEffect(() => {
    const root = document.documentElement;
    const scale = t.radius === 'sharp' ? 0.28 : (t.radius === 'medium' ? 0.6 : 1);
    root.style.setProperty('--radius-scale', String(scale));
  }, [t.radius]);

  return (
    <TweaksPanel>
      <TweakSection label="Akzentfarbe" />
      <TweakColor
        label="Akzent"
        value={t.accent}
        options={['#f0a184', '#74cbb8', '#b3a4da', '#dca92c']}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakSection label="Form" />
      <TweakRadio
        label="Ecken-Radius"
        value={t.radius}
        options={['soft', 'medium', 'sharp']}
        onChange={(v) => setTweak('radius', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<JetztTweaks />);
