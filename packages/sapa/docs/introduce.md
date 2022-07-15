# Sapa 

simple js library for ui 
DOM 기반 UI 를 쉽게 만들 수 있게 하는 라이브러리 

# Features 

* Hybrid virtual dom 
* simple event system 
* jsx syntax support


# Getting Started 


```js
import { start } from "@elf-framework/sapa";

start(function() {
    return `<div>sample item</div>`
}, {
    container: document.getElementById('app')
})


```
