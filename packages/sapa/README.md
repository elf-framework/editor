# @elf-framework/sapa


Fantastic UI library


# Install 

```sh
npm install @elf-framework/sapa 

// or 

yarn add @elf-framework/sapa 
```

# ready to use JSX

vite config 

```js

esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
},

```

## use jsx-runtime 

tsconfig.json 

```json
"compilerOptions": {
  "jsx": "react-jsx",
  "jsxImportSource": "@elf-framework/sapa",
}
```

# Core Concept

Sapa is a library for easily creating DOM-based UIs. However, since it uses JSX as a grammar, it can be used as data.

The basic template uses JSX, and many functions are structured similarly to React, providing a structure that anyone who has used React can move comfortably.


## JSX 

It uses `JSX` as the template engine.

```jsx
function MyApp() {
  return <div>Sample Text</div>
}
```

&nbsp;

`JSX` basically exists in a form similar to html. For example, instead of using the class attribute as className , apply it as class .

```jsx
function MyApp() {
  return <div class="layout">SampleText</div>
}
```

&nbsp;


  You can also use the `className` attribute as is. If you use the `className` attribute, it is automatically linked to the `class` attribute.


## Component 

Sapa consists of two components.

* Class component 
* Function component 

### Class Component 

```jsx
import {UIElement} from "@elf-framework/sapa";

class MyApp extends UIElement {
  template () {
    return <div>My App</div>
  }
}

```

### Function Component 

```jsx
function MyApp() {
  return <div>My App</div>
}

```

## Hook 

You can use a Hook similar to React.

* useState
* useCallback
* useMemo 
* useReducer 
* useContext
* useRef
* useEffect 
  
See [here](https://www.elf-framework.com/pages/sapa/hook/) for details.


## DOM 

It has several features that allow you to directly control the DOM.

* ref - Provides a selector to directly access the dom node.
* event - Provides a magic method to easily set the dom event.

### DOM Event 

You can set various DOM events using Magic Methods.

```jsx {8-10}
import {CLICK, ALT} from "@elf-framework/sapa";

class MyApp extends UIElement {
  template() {
    return <div>My App</div>
  }

  [CLICK() + ALT] (e) {
    console.log(e);
  }
}
```

## Store 

Sapa basically provides 3 types of store.

* `state` : Rendering control through the instance state and `setState` function used inside the component
* `useState`: Sorted storage used inside the component, rendering control with `update` function
* `$store` : Message passing through `subscribe`, a public repository used in component inheritance


The above three types allow us to handle data in various ways.

### instance state 

```jsx
class MyApp extends UIElement {
  template () {
    return <div>{this.state.myVariable}</div>
  }

  [CLICK()] () {
    const { myVariable = 0 } = this.state;
    myVariable++;
    this.setState({ myVariable })
  }
}

```

### hook state 

```jsx
function MyApp () {
  const [myVariable, setMyVariable] = useState(0);

  return <div onClick={() => setMyVariable(myVariable+1)}>{myVariable}</div>
}
```

### hierarchy store 

```jsx
import {useStoreValue} from "@elf-framework/sapa";

class MyApp extends UIElement {
  template () {

    // subscribe event for $store
    const [myVariable, setMyVariable] = useStoreValue("myVariable", 0);

    return <div onClick={() => {
      setMyVariable((v) => v + 1);
    }}>{myVariable}</div>
  }
}

```

## Message 

Sapa provides a way to send messages from an internal component hierarchy.

```jsx
import {useComponentRender} from "@elf-framework/sapa";

function MyApp () {

  useComponentRender("refreshComponent");

  return <div onClick={() => {
    this.emit("refreshComponent");
  }}></div>
}

```


Sapa focuses on how to store data, how to send messages, and how to render DOM through JSX.

# start, hydrate, renderToHtml

# Hot Module Reloader 


# License : MIT
