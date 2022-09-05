import { AddCommentFilled } from "@elf-framework/icon";
import { start } from "@elf-framework/sapa";
import { Button, Flex, Grid } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

function ButtonOption({ title, description, renderer }) {
  return (
    <Grid columns={[1, 1]} gap={10} style={{ marginTop: 50 }}>
      <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;padding:30px 50px;background-color:#f8f8f8;">
        {renderer}
      </div>
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </Grid>
  );
}

function ButtonView({ renderer, text }) {
  return (
    <Flex
      style={{
        gap: 20,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          width: 200,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {text}
      </div>
      <div>{renderer}</div>
    </Flex>
  );
}

start(function () {
  return (
    <UILayout>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h1>Button</h1>
        <div>
          <ButtonOption
            title={`Type`}
            description={
              <div>
                The Button has a type. The Button Type is used to determine the
                style of the button.
                <ul>
                  <li>default</li>
                  <li>primary</li>
                  <li>secondary</li>
                  <li>success</li>
                  <li>danger</li>
                  <li>warning</li>
                  <li>info</li>
                </ul>
              </div>
            }
            renderer={[
              <ButtonView renderer={<Button>Hello</Button>} text="default" />,
              <ButtonView
                renderer={
                  <Button type="primary">
                    <AddCommentFilled /> Hello
                  </Button>
                }
                text="primary"
              />,

              <ButtonView
                renderer={
                  <Button type="secondary">
                    <AddCommentFilled /> Hello
                  </Button>
                }
                text="secondary"
              />,
              <ButtonView
                renderer={<Button type="success">Hello</Button>}
                text="success"
              />,
              <ButtonView
                renderer={<Button type="warning">Hello</Button>}
                text="warning"
              />,
              <ButtonView
                renderer={<Button type="info">Hello</Button>}
                text="info"
              />,
              <ButtonView
                renderer={<Button type="danger">Hello</Button>}
                text="danger"
              />,
            ]}
          />
        </div>
        <div>
          <ButtonOption
            title={`Outline`}
            description={
              <div>
                The Button has an outline. The Button Outline is used to
                determine
              </div>
            }
            renderer={[
              <ButtonView
                renderer={<Button outline={true}>Hello</Button>}
                text="default"
              />,
              <ButtonView
                renderer={
                  <Button type="primary" outline={true}>
                    <AddCommentFilled />
                    Hello
                  </Button>
                }
                text="primary"
              />,

              <ButtonView
                renderer={
                  <Button type="secondary" outline={true}>
                    <AddCommentFilled />
                    Hello
                  </Button>
                }
                text="secondary"
              />,
              <ButtonView
                renderer={
                  <Button type="success" outline={true}>
                    <AddCommentFilled />
                    Hello
                  </Button>
                }
                text="success"
              />,
              <ButtonView
                renderer={
                  <Button type="warning" outline={true}>
                    Hello
                  </Button>
                }
                text="warning"
              />,
              <ButtonView
                renderer={
                  <Button type="info" outline={true}>
                    Hello
                  </Button>
                }
                text="info"
              />,
              <ButtonView
                renderer={
                  <Button type="danger" outline={true}>
                    Hello
                  </Button>
                }
                text="danger"
              />,
            ]}
          />
        </div>
        <div style={{ marginTop: 40 }}>
          <ButtonOption
            title={`Size`}
            description={
              <div>
                The Button has a size. The Button Size is used to determine the
                <code>
                  <pre>
                    {`
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
                    `}
                  </pre>
                </code>
              </div>
            }
            renderer={[
              <ButtonView
                renderer={<Button size="large">Hello</Button>}
                text="large"
              />,
              <ButtonView renderer={<Button>Hello</Button>} text="medium" />,

              <ButtonView
                renderer={<Button size="small">Hello</Button>}
                text="small"
              />,
            ]}
          />
        </div>
        <div>
          <ButtonOption
            title={`Quiet`}
            description={
              <div>
                The Button has a quiet. The Button Quiet is used to determine
                the
                <code>
                  <pre>
                    {`
<Button quiet={true}>Quiet</Button>
                    `}
                  </pre>
                </code>
              </div>
            }
            renderer={[
              <ButtonView
                renderer={<Button>Hello</Button>}
                text="None Quiet"
              />,
              <ButtonView
                renderer={<Button quiet={true}>Hello</Button>}
                text="Quiet"
              />,
            ]}
          />
        </div>
        <div>
          <ButtonOption
            title={`Selected`}
            description={
              <div>
                The Button has a selected. The Button Selected is used to
                <code>
                  <pre>
                    {`
<Button selected={true}>Quiet</Button>
                    `}
                  </pre>
                </code>
              </div>
            }
            renderer={[
              <ButtonView
                renderer={[
                  <Button>Hello</Button>,
                  " ",
                  <Button quiet={true}>Hello</Button>,
                ]}
                text="not selected"
              />,
              <ButtonView
                renderer={[
                  <Button selected={true}>Hello</Button>,
                  " ",
                  <Button selected={true} quiet={true}>
                    Hello
                  </Button>,
                ]}
                text="not selected"
              />,
            ]}
          />
        </div>
        <div>
          <ButtonOption
            title={`Emphasis`}
            description={
              <div>
                By default, action buttons are not emphasized. This is optimal
                for when an action button is not the core part of an interface,
                such as in application panels, where all the visual components
                are monochrome in order to direct focus to the content. The
                emphasized action button has a blue background for its selected
                state in order to provide a visual prominence that meets the
                accessible color contrast ratio. This is optimal for when the
                selection should call attention, such as within a tool bar.
              </div>
            }
            renderer={[
              <ButtonView
                renderer={[
                  <Button selected={true}>Hello</Button>,
                  " ",
                  <Button quiet={true} selected={true}>
                    Hello
                  </Button>,
                ]}
                text="not emphasized"
              />,
              <ButtonView
                renderer={[
                  <Button type="primary" selected={true}>
                    Hello
                  </Button>,
                  " ",
                  <Button type="primary" selected={true} quiet={true}>
                    Hello
                  </Button>,
                ]}
                text="Emphasized selected"
              />,
            ]}
          />
        </div>
        <div>
          <ButtonOption
            title={`Disabled`}
            description={<div></div>}
            renderer={[
              <ButtonView
                renderer={[<Button disabled={true}>Hello</Button>]}
                text="disabled"
              />,
              <ButtonView
                renderer={[
                  <Button disabled={true} quiet={true}>
                    Hello
                  </Button>,
                ]}
                text="disabled quiet"
              />,
            ]}
          />
        </div>
        <div>
          <ButtonOption
            title={`Static Color`}
            description={
              <div>
                <code>
                  <pre>
                    {`
  <Button
  selected={true}
  style={{
    borderColor: "var(--color-blue-4)",
    selectedBackgroundColor: "var(--color-blue-4)",
  }}
>
  Hello
</Button>,
`}
                  </pre>
                </code>
              </div>
            }
            renderer={[
              <ButtonView
                renderer={[
                  <Button
                    selected={true}
                    style={{
                      borderColor: "var(--color-blue-5)",
                      selectedBackgroundColor: "var(--color-blue-5)",
                      color: "var(--color-white)",
                    }}
                  >
                    Hello
                  </Button>,
                ]}
                text="Static color"
              />,
            ]}
          />
        </div>
        <div>
          <ButtonOption
            title={`Shape`}
            description={
              <div>
                <code>
                  <pre>
                    {`
 <Button type="primary" shape="round">Primary</Button>
  <Button type="secondary" shape="circle">S</Button>
`}
                  </pre>
                </code>
              </div>
            }
            renderer={[
              <ButtonView
                renderer={[
                  <Button type="primary" shape="round">
                    Primary
                  </Button>,
                ]}
                text="Round"
              />,
              <ButtonView
                renderer={[
                  <Button type="secondary" shape="circle">
                    S
                  </Button>,
                ]}
                text="Circle"
              />,
            ]}
          />
        </div>
      </div>
    </UILayout>
  );
});
