import { start } from "@elf-framework/sapa";
import { Flex, Grid, VBox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";

start(function () {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#eeeeee",
        }}
      >
        <h1>Typography</h1>
        <Grid columns={2} gap={50} style={{ padding: "0px 100px" }}>
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
    </Layout>
  );
});
