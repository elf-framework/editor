---
sidebar_position: 1
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Button

버튼

## Button View 

<button className="elf--button">Hello world</button>

## Primary Button

<div style={{
        display: "flex",
        columnGap: 20,
        marginBottom: 20
    }}>
    <button className="elf--button primary">test</button>
    <button className="elf--button primary focus destructive">test</button>
    <button className="elf--button primary destructive" disabled>Disabled primary</button>
</div>

&nbsp;

```html
<button class="elf--button primary">test</button>
<button class="elf--button primary focus destructive">test</button>
<button class="elf--button primary destructive" disabled>Disabled primary</button>
```

## Button Shape 

<div style={{
        display: "flex",
        columnGap: 20,
        marginBottom: 20
    }}>
    <button className="elf--button elf--button-shape-round">test</button>
    <button className="elf--button elf--button-shape-circle">T</button>
</div>


```html
<button class="elf--button elf--button-shape-round">test</button>
<button class="elf--button elf--button-shape-circle">T</button>
```


## Secondary Button

<div style={{
        display: "flex",
        columnGap: 20,
        marginBottom: 20
    }}>
    <button className="elf--button secondary">test</button>
</div>

&nbsp;

```html
<button class="elf--button secondary">test</button>

```


## Outline Button

<div style={{
        display: "flex",
        columnGap: 20,
        marginBottom: 20
    }}>
    <button className="elf--button outline">test</button>
    <button className="elf--button outline focus destructive">test</button>
    <button className="elf--button outline destructive" disabled>Disabled Outline</button>
</div>

&nbsp;

```html
<button class="elf--button outline">test</button>
<button class="elf--button outline focus destructive">test</button>
<button class="elf--button outline destructive" disabled>Disabled Outline</button>
```