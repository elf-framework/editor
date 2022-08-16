import { brightness, parse } from "@elf-framework/color";
import tokens from "@elf-framework/design-tokens/tokens.json";
import { start } from "@elf-framework/sapa";
import { Divider, Flex, Grid, VBox, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { DesignLayout } from "../../layouts/DesignLayout";

function ColorSingleView({ color, text, css, style }) {
  return (
    <VBox>
      <Flex
        direction="row"
        style={{
          boxSizing: "border-box",
          padding: "10px",
          ...style,
        }}
      >
        <div
          style={{
            flex: "1 1 auto",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {text}
        </div>
        <div
          style={{
            flex: "1 1 auto",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          {color.toUpperCase()}
        </div>
      </Flex>
      <View
        padding={5}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {css}
      </View>
    </VBox>
  );
}

function ColorView({ color, text, css, style }) {
  const rgb = parse(color);
  const b = brightness(rgb.r, rgb.g, rgb.b);

  const fontColor = b > 150 ? "black" : "white";

  return (
    <VBox>
      <Flex
        direction="row"
        style={{
          backgroundColor: color,
          boxSizing: "border-box",
          padding: "10px",
          color: fontColor,
          ...style,
        }}
      >
        <div
          style={{
            flex: "1 1 auto",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {text}
        </div>
        <div
          style={{
            flex: "1 1 auto",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          {color.toUpperCase()}
        </div>
      </Flex>
      <View padding={5}>{css}</View>
    </VBox>
  );
}

function ColorStatus({ title, colors, columns = 1, cssKey, renderView }) {
  return (
    <div>
      <h2>{title} </h2>
      <Grid columns={columns} gap={20}>
        {Object.keys(colors).map((color) => {
          const mainColor = colors[color];

          if (typeof mainColor !== "string") {
            return "";
          }
          return (
            <div
              style={{
                padding: 10,
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              {renderView(mainColor)}
              <ColorSingleView
                color={mainColor}
                text={color}
                css={`var(${cssKey}-${color})`}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

function ColorStatusList() {
  return (
    <Grid columns={4} gap={20}>
      <ColorStatus
        title="Background"
        colors={tokens.color.background}
        cssKey="--color-background"
        renderView={(color) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: color,
                  borderRadius: 2,
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          );
        }}
      />
      <ColorStatus
        title="Bg Weak"
        colors={tokens.color.background.weak}
        cssKey="--color-background-weak"
        renderView={(color) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: color,
                  borderRadius: 2,
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          );
        }}
      />
      <ColorStatus
        title="Border"
        colors={tokens.color.border}
        cssKey="--color-border"
        renderView={(color) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  border: `2px solid ${color}`,
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          );
        }}
      />
      <ColorStatus
        title="Font & Text"
        colors={tokens.color.text}
        cssKey="--color-text"
        renderView={(color) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  color,
                  fontSize: "3rem",
                  fontWeight: 900,
                  fontFamily: "sans-serif",
                }}
              >
                Aa
              </div>
            </div>
          );
        }}
      />
    </Grid>
  );
}

function Main() {
  return (
    <DesignLayout maxWidth={1200}>
      <div
        style={{
          padding: 20,
          maxWidth: 1200,
        }}
      >
        <h1>Color</h1>

        <h2>Core Color </h2>
        <Grid columns={3} gap={20}>
          {Object.keys(tokens.color.core).map((color) => {
            if (color === "white" || color === "black") {
              return (
                <VBox>
                  <ColorView
                    color={tokens.color.core[color]}
                    text={`color.core.${color}`}
                  />
                </VBox>
              );
            }

            const mainColor = tokens.color.core[color];

            return (
              <VBox>
                <h3>{color}</h3>
                {Object.entries(mainColor).map(([key, value]) => {
                  return (
                    <ColorView
                      color={value}
                      text={`color.core.${color}.${key}`}
                    />
                  );
                })}
              </VBox>
            );
          })}
        </Grid>
        <Divider margin={100} />

        <h1>Functions</h1>
        <ColorStatusList />
      </div>
    </DesignLayout>
  );
}

start(Main);
