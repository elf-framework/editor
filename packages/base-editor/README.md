# @elf-framework/base-editor

## Base Editor 

* Editor Root 
* Plugin Manager 

-----

* Config Manager
* Event Manager 
* I18n Manager 
* Inspector Manager 
* Shortcut Manager 
* Menu Manager 
* Layout Manager 
* Command manager 
* Inject Manager 


```js
start(function () {
  return (
    <div>
      <BaseEditor
        editorClass={{
          "my-editor": true,
        }}
        fullscreen={true}
        plugins={[
          async function (editor) {
            editor.registerCommand({
              command: "my-command",
              title: "My Command",
              execute: async () => {
                return 10;
              },
            });
          },

          function (editor) {
            editor.registerUI({
              view: () => {
                const editor = useEditor();
                return (
                  <button
                    type="button"
                    onClick={async () => {
                      const ret = await editor.commands.execute("my-command");

                      console.log("return", ret);
                    }}
                  >
                    Sample
                  </button>
                );
              },
            });
          },
        ]}
      >
        <SplitLayout>
          <SplitLayoutItem direction="top">
            <h1>Header</h1>
          </SplitLayoutItem>
          <SplitLayoutItem direction="left">
            <h1>Left</h1>
            <InjectView key="" components={["view"]} />
          </SplitLayoutItem>
          <SplitLayoutItem direction="body">
            <h1>Body</h1>
          </SplitLayoutItem>
          <SplitLayoutItem direction="right">
            <h1>Right</h1>
          </SplitLayoutItem>
          <SplitLayoutItem direction="bottom">
            <h1>Bottom</h1>
          </SplitLayoutItem>
        </SplitLayout>
      </BaseEditor>
    </div>
  );
});

```


## Hooks for Editor

에디터를 쉽게 설정하고 조작하기 위한 몇가지 에디터 전용 훅을 제공합니다. 

### useEditor 

```js
const editor = useEditor()

editor.commands.execute("my-command");
```

### useEditorOption

```js
const plugins = useEditorOption("plugins");
```

### useConfig 

```js

const editor = useEditor();
editor.registerConfig({
  key: "yellow",
  defaultValue: "yellow",
  type: "string",
})

const value = useConfig("yellow");
```

### useSetConfig 

```js
useSubscribe("config:yellow", () => {
  console.log("changed `yellow` config", useConfig("yellow"))
})

useSetConfig("yellow", "blue");

```

### useCommand

```js

const editor = useEditor();

editor.registerCommand({
  command: "my-command",
  execute: () => {
    return "my-command-return-value";    
  }
})

const ret = useCommand("my-command");

```

### useGetCommand 

return command callback function to run command 

```js

const commandCallback = useGetCommand("my-command");

commandCallback(1, 2, 3);
```

## Plugin Manager

플러그인 시스템 

에디터는 기본적으로 플러그인 시스템을 가진다. 
플러그인은 함수로 정의되며 EditorContext 를 이용해서 여러가지 정의를 할 수 있다. 

```js
function MyEditor () {
    return <BaseEditor plugins={[
        function (editor) {
            console.log(editor);
        }
    ]}>
}

```

* Editor 를 로드 하는 시점에 Config, Plugin 을 미리 로드한다. 

## Config Manager 

단일 문자열키를 가지고 있는 설정 관리 

```js

function MyEditor () {
    return <BaseEditor configs={[
        {
            key: "area.width",
            defaultValue: 100,
            title: "Area Width to find layers fastly",
            description: "Set area width/height",
            type: "number",
        }
    ]}
    
        plugins={[
            function (editor) {
                editor.registerConfig({
                    key: "area.width",
                    defaultValue: 100,
                    title: "Area Width to find layers fastly",
                    description: "Set area width/height",
                    type: "number",
                })
            }
        ]}
    >
        <a>fdsafdsf</a>
    </BaseEditor>
}

```

## Internalization(i18n) Manager 

```js

function (editor) {
    editor.registerI18n(locale, {
          "app.lang.title": "Language",
    })

    editor.registerI18n({
        [locale] : {
            "app.lang.title": "Language",
        }
    })
}

```

## Event Manager 

```js

function (editor) {
    editor.on('change', (...args) => {
        console.log(...args);
    });
}

```

## Component Manager 

inspector 의 editor 와 매칭된다. 

```js

function (editor) {
    editor.registerComponent({
        "my-button": Button
    })
}

```

## Inspector Manager 

```js

function (editor) {
    const target = "sample";
    editor.registerInspector(target, (current) => {
        return [
        "Sample Text 편집",
        {
            key: "sampleText",
            editor: "TextEditor",
            defaultValue: current.sampleText,
        },
        "Sample Number 편집",
        {
            key: "sampleNumber",
            editor: "NumberInputEditor",
            editorOptions: {
            min: 0,
            max: 10,
            step: 1,
            label: "SN",
            },
            defaultValue: current.sampleNumber,
        },
        "스타일 카피",
        {
            type: "column",
            size: [1, 1],
            gap: 10,
            columns: [
            {
                key: "copyCssJSON",
                editor: "Button",
                editorOptions: {
                text: "Copy CSS JSON",
                onClick: () => {
                    console.log(
                    JSON.stringify(editor.html.toCSS(current), null, 4)
                    );
                },
                },
            },
            {
                key: "copyCssString",
                editor: "Button",
                editorOptions: {
                text: "Copy CSS String",
                onClick: () => {
                    console.log(CSS_TO_STRING(editor.html.toCSS(current)));
                },
                },
            },
            {
                key: "changeColor",
                editor: "Button",
                editorOptions: {
                text: "Change Text Random Color",
                onClick: () => {
                    // 색깔 구하기 , 랜덤하게
                    const textColor = Color.random();
                    const backgroundColor = Color.random();

                    // current 에 색깔 적용
                    editor.context.commands.execute("setAttribute", {
                    [current.id]: {
                        color: textColor,
                        "background-color": backgroundColor,
                    },
                    });
                },
                },
            },
            ],
        },
        ];
    });
}

```

### type 

#### Text Type 

title or divider 

#### Mini Editor Type 

* color
* text
* number
* boolean
* button
* range
* textarea 
* custom

## Menu Manager 


```js
function (editor) {
  editor.registerMenu(/* menu name */ "toolbar.left", /* menu item list */[
    {
      type: "button",
      icon: <Icon />,
      events: ["config:editing.mode"],
      selected: (editor) => {
        return editor.context.config.is("editing.mode", EditingMode.SELECT);
      },
      action: (editor) => {
        editor.context.commands.execute("addLayerView", "select");
        editor.context.config.is("editing.mode.itemType", EditingMode.SELECT);
      },
    },
    {
      type: "dropdown",
      icon: (editor, dropdown) => {
        return <Icon />;
      },
      items: [
        {
          icon: <Icon />,
          title: "Rect Layer",
          key: "rect",
          command: "addLayerView",
          args: [
            "rect",
            {
              backgroundColor: "#ececec",
            },
          ],
          closable: true,
          nextTick: (editor) => {
            editor.context.config.set("editing.css.itemType", "rect");
          },
          shortcut: KeyStringMaker({ key: "R" }),
        }
        "-",
        ...
      ],
      events: [
        "config:editing.mode",
        "config:editing.mode.itemType",
        "config:editing.css.itemType",
      ],
      selected: (editor) => {
        return (
          editor.context.config.is("editing.mode", EditingMode.APPEND) &&
          (editor.context.config.is("editing.mode.itemType", "rect") ||
            editor.context.config.is("editing.mode.itemType", "circle") ||
            editor.context.config.is("editing.mode.itemType", "image") ||
            editor.context.config.is("editing.mode.itemType", "video") ||
            editor.context.config.is("editing.mode.itemType", "iframe"))
        );
      },
      selectedKey: (editor) => {
        return editor.context.config.get("editing.css.itemType");
      },
    },
  ]);
}
```

## Layout Manager 

```js
function (editor) {
    editor.registerLayout("default", (
        <Layout >
            <LayoutItem key="toolbar.left">
                <LayerList >
            </LayoutItem>
        </Layout>
    ))
}

```

### Inject Manager 

외부에서 정해진 영역에 컴포넌트를 넣기 위해서 정의

```js
function (editor) {

  // define 
  editor.registerInjectItems(
    "inspector.tab.style", 
    <UI />,
    <UI />,
    <UI />,
    <UI />,
  );
}

// use 

<InjectView key="inspector.tab.style" />

```


UI 등록하기 

```js
function (editor) {
    editor.registerUI({
        view: () => {
        const editor = useEditor();
        return (
            <button
                type="button"
                onClick={async () => {
                    const ret = await editor.commands.execute("my-command");

                    console.log("return", ret);
                }}
                >
                Sample
                </button>
            );
        },
    });
},

```

## Command Manager 

```js
function (editor) {
    editor.registerCommand("xxxxxxx.xxxxxx", function () {

    })

    editor.registerCommand({
        command: "history.addLayer",
        description: "add layer in history ",
        execute: function (editor, message, layer, isSelected = true, containerItem) {

        },

        redo: function (editor, { currentValues }) {

        },

        undo: function (editor, { undoValues }) {

        },
    })

    // use command 
    const ret = editor.command("history.addLayer", message, layer);
}
```

## ShortCut Manager 

```js
function (editor) {
    editor.registerShortCut({
        category: "View",
        // command keys
        key: "Equal",
        command: "zoom.in",
        description: "zoom in",
        when: "CanvasView",

        // os specific keys
        win: '',
        mac: '',
        linux: '',
    })
}

```

* Ctrl+Alt+S => `⌃ + ⇧ + S`

# License : MIT
