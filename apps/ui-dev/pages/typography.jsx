import { start } from "@elf-framework/sapa";
import { Flex, Grid } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
  return (
    <div>
      <h1>Typography</h1>
      <Grid columns={2} gap={50} style={{ padding: "0px 100px" }}>
        <div style="padding:10px;">
          <h2>Primary typeface</h2>

          <p style={{ maxWidth: 300, marginTop: 50, marginBottom: 50 }}>
            We use <strong>Pretend</strong> everywhere across the signed-in
            experience of Figma.
          </p>

          <p>
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
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
          <Flex stack={true} style={{ gap: 20, marginTop: 10 }}>
            {[400, 500, 600, 700, 800, 900].map((size) => (
              <Grid
                columns={[0.3, 1]}
                style={{
                  fontWeight: size,
                  fontSize: 32,
                  lineHeight: 32,
                }}
              >
                <div>Regular</div>
                <div>AaBbCcDdEeGgNn 1234567890</div>
              </Grid>
            ))}
          </Flex>
        </div>
        <div style="padding:10px;">
          <h2>Monospace typeface</h2>

          <p style={{ maxWidth: 300, marginTop: 50, marginBottom: 50 }}>
            We use <strong>Roboto Mono</strong> for monospaced text, which is
            mainly found in the “Code” panels.
          </p>

          <p>
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
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
          <p>
            <div
              style={`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 64px;
            line-height: 77px;
            letter-spacing: -0.005em;
            
            /* Black 3 */
            
            color: rgba(0, 0, 0, 0.3);
            `}
            >
              Mx8jgÅ Mx8jgÅ
            </div>
          </p>
          <p
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
          </p>
        </div>
      </Grid>
    </div>
  );
});
