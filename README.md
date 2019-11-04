# vh-sandbox

Simple demo for creating and using custom VH values calculated on resize events other than those triggered by input focus/blur events (which open/clost keyboard on mobile, which results in a change in window innerHeight).

Resize events using technique from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ to create a custom css `--vh` variable which acurately takes into consideration browser chrome such as address bars. 

```
window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;      
  const rootElement = document.documentElement;
  rootElement.style.setProperty('--vh', `${vh}px`);
);    
```
`v-keyboard-state-broadcaster` directive dispatches keyboard/open close events when the corresponding DOM element is focussed/blurred, which in turn is used to prevent VH recalculations on resizes caused by keyboard open/close. 

```
<input class='text-input' v-keyboard-state-broadcaster/> 
```

VH values are set using a scss mixin.

```
@include vh(30)  //sets height to 30vh
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development. Port currently configured to 3123.
```
npm run serve
```

