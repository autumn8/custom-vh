<template>
  <div id="app">    
    <header class='header'>Header</header>    
    <div class='content'>
      <div class='content__info'>
        <p>Content</p>
      </div>      
       <input class='text-input' v-keyboard-state-broadcaster/> 
    </div>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
import EventBus from '@/eventBus';

export default {    
  mounted () {
    this.setCustomVH();
    window.addEventListener('resize', this.handleWindowResize);    
    EventBus.$on('KEYBOARD_OPEN', isKeyboardOpen => {
      if (isKeyboardOpen) window.removeEventListener('resize', this.handleWindowResize);            
      else window.addEventListener('resize', this.handleWindowResize);       
    });

  },
  methods: {
    handleWindowResize (e) {            
      this.setCustomVH();
    },    
    setCustomVH() {
      const vh = window.innerHeight * 0.01;      
      const rootElement = document.documentElement;
      rootElement.style.setProperty('--vh', `${vh}px`);
    }
  }
}

</script>

<style lang="scss">

@mixin vh($value) {
  height: $value;
  height: calc(var(--vh, 1vh) * #{$value});
}

html, body {      
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;  
}

.text-input {
  margin-bottom:10px;
  border-radius: 6px;
  font-size:1.2rem;
  box-sizing: border-box;
  padding: 2%;
  height: 40px;
  width: 90%;
  left: 2%;
}

.toggle-btn {
  width: 30px;
  border:none;
  border-radius: 15px;
  height: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  
}

.header {
  @include vh(30);  
  background-color: grey;
  display:flex;
  align-items: center;
  justify-content: center;
}

.content {
  @include vh(55);  
  display: flex;
  flex-direction: column;
  position: relative;  
  color:white;
  background-color: blue;
  display:flex;
  align-items: center;
  justify-content: center;

  &__info {
    flex-grow: 1;
    display: flex;
    align-items: center;    
  }
}

.footer {  
  @include vh(15);  
  color: white;
  background-color: purple;
  display:flex;
  align-items: center;
  justify-content: center;  
}

</style>