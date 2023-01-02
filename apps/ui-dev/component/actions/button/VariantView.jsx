import { Flex, RoundButton, VBox } from "@elf-framework/ui";

export function VariantView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
    >
      <Flex
        style={{
          gap: 20,
          flexDirection: "column",
          maxWidth: 300,
          margin: "0 auto",
        }}
      >
        {[
          "default",
          "primary",
          "secondary",
          "danger",
          "warning",
          "success",
          "info",
          "dark",
        ].map((variant) => {
          return (
            <Flex>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: "none",
                  width: 100,
                }}
              >
                {variant}
              </label>
              <div>
                <RoundButton variant={variant}>Action</RoundButton>
                &nbsp; &nbsp;
                <RoundButton outline variant={variant}>
                  Action
                </RoundButton>
              </div>
            </Flex>
          );
        })}
      </Flex>
    </VBox>
  );
}
