# vh-sandbox

Simple demo for creating and using custom vh values calculated on resize events other than those triggered by input focus/blur events (which open/clost keyboard on mobile, which results in a change in window innerHeight).

Resize events using technique from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ to create a custom css --vh variable which acurately takes into consideration browser chrome such as address bars. vh values are set using a scss mixin.

```
@include vh(30)  //sets height to 30vh
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

