import { start } from "@elf-framework/sapa";
import { Flex, Grid, VBox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { DesignLayout } from "../../layouts/DesignLayout";

start(function () {
  return (
    <DesignLayout maxWidth={900}>
      <div>
        <h1>Typography</h1>
        <Grid columns={1} gap={50} style={{ padding: "0px 50px" }}>
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
            font-weight: 500;
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
            font-weight: 500;
            font-size: 48px;
            line-height: 64px;
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
            font-size: 48px;
            line-height: 64px;
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
                    fontSize: 26,
                    lineHeight: 26,
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
              <strong>Pretend</strong> and <strong>Roboto Mono</strong> is a
              good pairing as they have similar x-height, cap height, descenders
              and stem widths.
            </p>
          </div>
        </Grid>
        <Grid columns={1} gap={50} style={{ padding: "0px 50px" }}>
          <div style="padding:10px;">
            <h2>Type scale</h2>

            <p style={{ marginTop: 50, marginBottom: 50 }}>
              Spacing between letters (tracking) and line height varies with the
              optical size of text.
              <br />
              There is a simple mathematical formula for calculating the line
              height—and one for calculating the tracking—given a font size.
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 32,
                }}
              >
                line-height = ceil((size * 1.3) / 8) * 8
              </p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 32,
                }}
              >
                tracking = -0.0223 + 0.185 * pow(e, -0.1745 * size)
              </p>
              <p>
                We round up line height to nearest multiple of 8 to make text
                fit nicely into our 8×8 base grid in the UI. For applications
                outside the 8×8 base grid, a line height of 1.3 * size is
                better.
                <br />
                For negative applications, tracking should be increased by 0.5%.
                <br />
                The table below shows examples of font sizes with corresponding
                correct line height and tracking.
              </p>
            </p>
            <Grid
              columns={[0.3, 0.3, 0.3, 1]}
              style={{
                fontWeight: 500,
                fontSize: 32,
                lineHeight: 32,
              }}
            >
              <div>Size</div>
              <div>Height</div>
              <div>Tracking</div>
              <div>Example</div>
            </Grid>
            <Flex stack={true} style={{ gap: 20, marginTop: 10 }}>
              {[
                9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 30, 40, 42,
                48, 60,
              ].map((size) => {
                const lineHeight = Math.ceil((size * 1.3) / 8) * 8;
                const tracking =
                  Math.round(
                    (-0.0223 + 0.185 * Math.pow(Math.E, -0.1745 * size)) * 1000
                  ) / 10;
                return (
                  <Grid
                    columns={[0.3, 0.3, 0.3, 1]}
                    style={{
                      fontSize: 12,
                      lineHeight: 32,
                    }}
                  >
                    <div>{size}</div>
                    <div>{lineHeight}</div>
                    <div>{tracking || "0"}%</div>
                    <div
                      style={{
                        fontSize: size,
                        lineHeight: lineHeight,
                        letterSpacing: `${tracking * 0.01}em`,
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </Grid>
                );
              })}
            </Flex>
          </div>
          <div style="padding:10px;">
            <h2>Predefined text styles</h2>

            <p style={{ marginTop: 50, marginBottom: 50 }}>
              <p>
                Most of our Editor uses 11pt text, and some of our Organizer
                uses 14pt text. Although the type system is expressed in terms
                of formula, we have a small number of predefined text styles to
                help with common text applications.
              </p>
              <p>
                The text style system is structured by size, weight and special
                use, expressed in the name of each text style.
              </p>
              <p>
                Pos and Neg prefixes represent positive (black on top of white)
                and negative (white on top of black) applications, respectively.
              </p>
              <p>
                Try to stick with the predefined text styles whenever possible.
                When no existing text style fits what you’re designing, only
                then fall back to custom text with line height and tracking
                according to the formula of the “Type scale” section.
              </p>
            </p>
            <p>&nbsp;</p>
            <VBox>
              <VBox>
                <div
                  style={{
                    padding: 40,
                    maxWidth: 480,
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>Positive</h3>

                  <VBox style={{ gap: 20 }}>
                    {[11, 12, 13, 14].map((size) => {
                      return (
                        <Grid columns={[0.5, 1, 1]}>
                          <div style={{ fontWeight: 400 }}>UI {size}</div>
                          <div style={{ fontWeight: 500 }}>
                            UI {size} Medium
                          </div>
                          <div style={{ fontWeight: 600 }}>UI {size} Bold</div>
                        </Grid>
                      );
                    })}
                  </VBox>
                </div>
              </VBox>
              <VBox>
                <div
                  style={{
                    padding: 40,
                    maxWidth: 480,
                    marginTop: 50,
                    boxSizing: "border-box",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>Negative</h3>

                  <VBox style={{ gap: 20 }}>
                    {[11, 12, 13, 14].map((size) => {
                      return (
                        <Grid columns={[0.5, 1, 1]}>
                          <div style={{ fontWeight: 400 }}>UI {size}</div>
                          <div style={{ fontWeight: 500 }}>
                            UI {size} Medium
                          </div>
                          <div style={{ fontWeight: 600 }}>UI {size} Bold</div>
                        </Grid>
                      );
                    })}
                  </VBox>
                </div>
              </VBox>
            </VBox>
          </div>
        </Grid>
      </div>
    </DesignLayout>
  );
});
