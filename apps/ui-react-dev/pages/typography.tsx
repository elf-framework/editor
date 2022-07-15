import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import "@elf-framework/ui/style.css";

function App() {
  return (
    <div>
      <h1>Typography</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 50, padding: "0px 100px" }}>
        <div style="padding:10px;">
          <h2>Primary typeface</h2>

          <div style={{ maxWidth: 300, marginTop: 50, marginBottom: 50 }}>
            We use <strong>Pretend</strong> everywhere across the signed-in
            experience of Figma.
          </div>

          <div>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 128px;
            line-height: 128px;
            text-transform: uppercase;
            white-space: wrap;
            word-break: break-all;
            letter-spacing: -0.06em;
            color: rgba(0, 0, 0, 0.8);
            `}
            >
              abcdefghijklmnopqrstuvwxyz
            </div>
          </div>
          <div>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 128px;
            line-height: 128px;
            white-space: wrap;
            word-break: break-all;
            letter-spacing: -0.06em;
            color: rgba(0, 0, 0, 0.8);
            `}
            >
              abcdefghijklmnopqrstuvwxyz
            </div>
          </div>
          <div>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 128px;
            line-height: 128px;
            white-space: wrap;
            word-break: break-all;
            letter-spacing: -0.06em;
            color: rgba(0, 0, 0, 0.8);
            `}
            >
              0123456789
            </div>
          </div>
          <div>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 64px;
            line-height: 128px;
            white-space: wrap;
            word-break: break-all;
            letter-spacing: -0.06em;
            color: rgba(0, 0, 0, 0.8);
            `}
            >
              ⌘⌥⇧⌃⌅⌫↩⎋✓✗ ↑↓←→—{`><->`}❖◆◇ !?@#%{`{}()`}45° 2/5
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 10 }}>
            {[400, 500, 600, 700, 800, 900].map((size) => (
              <div
                key={size}
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.3fr 1fr",
                  fontWeight: size,
                  fontSize: 32,
                  lineHeight: 32,
                }}
              >
                <div>Regular</div>
                <div>AaBbCcDdEeGgNn 1234567890</div>
              </div>
            ))}
          </div>
        </div>
        <div style="padding:10px;">
          <h2>Monospace typeface</h2>

          <div style={{ maxWidth: 300, marginTop: 50, marginBottom: 50 }}>
            We use <strong>Roboto Mono</strong> for monospaced text, which is
            mainly found in the “Code” panels.
          </div>

          <div>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 48px;
            line-height: 64px;
            text-transform: uppercase;
            white-space: wrap;
            word-break: break-all;
            letter-spacing: -0.06em;
            color: rgba(0, 0, 0, 0.8);
            `}
            >
              abcdefghijklmnopqrstuvwxyz
            </div>
          </div>
          <div>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 48px;
            line-height: 64px;
            white-space: wrap;
            word-break: break-all;
            letter-spacing: -0.06em;
            color: rgba(0, 0, 0, 0.8);
            `}
            >
              abcdefghijklmnopqrstuvwxyz
            </div>
          </div>
          <div>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 48px;
            line-height: 64px;
            white-space: wrap;
            word-break: break-all;
            letter-spacing: -0.06em;
            color: rgba(0, 0, 0, 0.8);
            `}
            >
              0123456789 .!:#?{`<>()[]{}=/+`}
            </div>
          </div>
          <div>
            <div
              style={{
            "font-family": 'Inter',
            "font-style": "normal",
            "font-weight": 400,
            "font-size": "64px",
            "line-height": "77px",
            "letter-spacing": "-0.005em",
            
            /* Black 3 */
            
            color: "rgba(0, 0, 0, 0.3)",
              }}
            >
              Mx8jgÅ Mx8jgÅ
            </div>
          </div>
          <div
            style={{
              fontWeight: 400,
              fontSize: 24,
              lineHeight: "32px",
              letterSpacing: "-0.005em",
              marginTop: 50,
              marginBottom: 50,
            }}
          >
            <strong>Pretend</strong> and <strong>Roboto Mono</strong> is a good
            pairing as they have similar x-height, cap height, descenders and
            stem widths.
          </div>
        </div>
      </div>
    </div>
  );
};



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

