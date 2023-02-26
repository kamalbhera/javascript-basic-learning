## 06 DOM & Web

### 06.01 Diff b/w DOM Object and Window Object [Medium]

- Window: parent/global/object
  - `window.document` or `document` since window is global object we don't need to use `window.`
  - Ex: setInterval is method of window object and can be accessed as `window.setInterval()` or `setInterval()`
  - other window props: window.location, window.href
  - **BOM**: Browser obj Model: screen, locator, navigator, frames, history, XMLHttpRequest
- Document: is an obj of window.
  - DOM: html, head, body etc
- Qns:
  1. What is the difference between window and document ?
  2. What is DOM [Document Object Model] or DOM API ?
  3. What is BOM [Browser Object Model] ?
  4. Explain the difference between DOM and BOM ?
  5. Which is the global object in browser ?
  6. How will we check the innerWidth and innerHeight of window ?
  - `window.innerWidth` or `window.innerHeight`
  7. How will you get hostname or value typed in address bar ?
  - `window.location`

### 06.02 Timer based Events [Easy]

- Two methods globally available: `window.setTimeout`, `window.setIntervaL`
- `clearInterval()` to clear interval
- Qn: How will you create a digital clock ?

### 06.03 Event Bubbling & Event Capturing [Medium]

- Target generates event. And `event.target` returns the reference of element which raised the event
  - event propagates bottom to top like a bubble
  - to stop default propagation: `event.stopPropagation()`
- To get the reverse behaviour i.e. event flow from top to bottom: we use **Event Capturing**
  - `addEventListener(evt, fn, phase)` phase: false by default - bubble phase, add it as true to make capture phase
- Qns:
  1. Which is the default propagation path ?
  - bottom to top
  2. How can you stop the event propagation ?
  - `event.stopPropagation()`
  3. How can you change the default propagation path ?
  - `addEventListener("click", btn, true)`
  4. How can you get the reference of element on which event is fired ?
  - event.target

### 06.04 Event Delegation [Easy]

- event always propagates from child to parent. We use this behaviour to implement a technique called **Event Delegation**.
  - instead of adding event handler to all child we add it to the parent
- `event.target.tagName` can be used to get the tag type on DOM
- Qns:
  1. How event bubbling or capturing is useful in the practical programming world ?
  2. Which property can be used to check the element type on which the event is triggered ?
  3. How can you get value of the element which raised the event ?
  - `event.target.innerHTML` or `event.target.value`

### 06.05 Navigate through DOM [Medium]

- Nodes:`document.documentElement`, `document.head`, `document.body`
- Method:
  - `.childNodes`: returns all childNodes. Note: also includes new lines or whitespaces etc
  - `.children`: returns all element child nodes. ignores empty space or lines
  - `.firstChild`, `.lastChild`: get first child, element + text + space etc
  - `.firstElementChild`, `.lastElementChild`: get first or last element
    - `.nodeName`, `.nodeType`
  - `.nextSibling`, `.nextElementSibling`
  - `.parentNode`, `.parentElement`
- Qns:
  1. What is a node in DOM tree ? Explain different types of nodes ?
  - Nodes: ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_NODE ex: <html>, DOCUMENT_TYPE_NODE
  2. How can you access next same level element for a given node element ?
  - `nextSibling` or `nextElementSibling`
  3. What is the difference between childeNodes and children property ?
  4. How can you check whether an element has child nodes or not ?
  - `.hasChildNodes()` or `.childNodes.length`
  5.  What is the purpose of DOM navigation ?
  - to access html nodes programatically
  6.  What will be the output of below given statement - element.lastChild.nextSibling ?
  - `null`

### 06.06 getElementBy Id, tagName, className and name [Medium]

- `document.getElementById("myBtn").innerHTML= "Content test"`
  - always on document object. Can not search in specific div or element but the other methods can be
- `document.getElementsByTagName("p")`
- `document.getElementsByClassName()`
- `document.getElementsByName("para")`

- Qns:
  1. Can you use document.getElementById() & element.getElementById() ?
  - Yes, No
  2. What does the getElementsByTagName() return ?
  - array of elements
  3. What is the difference between getElementsByClassName() & getElementsByName() ?
  - second one will search all elements based on name attribute.Note: name can be duplicate

### 06.07 querySelector() & querySelectorAll() [Medium]

- search through document based on **css selector** ex: (".classname") or (":hover")
- `querySelector()`: returns first element
- `querySelectorAll()`: returns all elements
- Qns:
  1. Explain the difference between querySelector() & querySelectorAll().
  2. How can you search elements using pseudo classes?
  - `document.querySelectorAll(":hover")`
  3. Between getElementBy methods and querySelector methods which is better to use?
  - getElementBy are supported in all. querySelector is for IE8 & above
  - getElementById is more performant but otherwise performance is same for getElementsByClassName or querySelectorAll.

### 06.07 Events basics [Easy]

- Four ways to create events:
  - inline, separate fn, binding, event listener
- Event object is the parent object of all events
  - event, event.target, event.type
- Qns:
  1. Explain various ways to configure an event with HTML elements.
     - inline, separate fn, binding, event listener
  2. Explain syntax of addEventListener() method.
  - `elem.addEventListener(event, func, useCapture)`
  3. What is an event object ?

### 06.08 Mouse Events [Medium]

- `onclick`
- `oncontextmenu` (right click)
- `ondblclick`
- `onmousedown`, `onmouseup`: while holding mouse down and after releasing mouse
- `onmouseout`, `onmouseover`
- **event.button** property: event.button is 0,1,2 for left, mid and right click
- other keys: `event.altKey === true`, `event.ctrlKey`, `event.shiftKey`, `event.metaKey` etc
- Qns:
  1. How will you disable right click on an element?
  - `oncontextmenu={return false}`, for copy `oncopy={return false}`
  2. How can you check whether a special key is pressed or not while an event is generated?
  3. How do you check mouse button value while an event is generated?
  4. For ctrl key and cmd on mac - how will you right the condition to check the key press.
  - `event.ctrlKey || event.metaKey`

### 06.09 ClientXY vs PageXY vs ScreenXY - coordinates [Medium]

- properties with mouseevents: `event.clientX`, `event.clientY` etc
- `event.clientX`, `event.clientY`: coordinate based on visible window
- `event.pageX`: coordinate based on page size (relative to document)
- `event.screenX`, screenY: coordinate based on screen size

### 06.10 Keyboard Events [Medium]

- keydown, keyup, keypress (keypress not used any more)
- keydown:
  - on key down, the event occurs repeatedly until key is up (can be controlled with event.repeat)
- props: `event.code`, `event.key`
- Qns:
  1. How can you check if control and Z is pressed or not ?
  - `if(event.ctrlKey && event.code === KeyZ){}`
  2. What does event.code return ?
  - on pressing 4: `Digit4`
  3. Explain the difference between event.code and event.key ?
  - on pressing a code will return `KeyA` while key will return `a`

### 06.11 Input Element Events [Medium]

- `onfocus`, `onblur`
- `onchange`: will trigger on blur only if value has changed
- `oninput`: fired on typing on input, this works with copy paste, voice input etc while keyup or keydown doesn't work with the same
- Qns:
  1. What is the difference between onblur and onchange event?
  - `onchange` will call on blur only if there is a value change
  2. How will you handle events of checkbox and radio buttons?
  - `onChange` or `onClick`
  3. Differentiate onkeypress/onkeyup and oninput event.
  - oninput takes care of copied data as well
  4. Which event you prefer with select [i.e. drop down list]?
  - `onChange`
  5. How will you get the text value of selected item from a select element i.e. a drop down list?
  - `eHandler(this.options[this.selectedIndex].text)`

### 06.12 oncut, oncopy, onpaste

- Qns:
  1. Explain about cut,copy and paste events
  2. How can you stop an event of cut, copy or paste for an element ?
  - `oncopy={return false}` or `onpaste=event.preventDefault()`
