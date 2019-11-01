<template>
  <div id="app">
    <button class='toggle-btn' @click='toggleResizeBehaviour()'></button>
    <header class='header'>Header</header>    
    <div class='content'>
      <div class='content__info'>
        <p>Content</p>
      </div>
      <custom-input class='text-input'></custom-input>
    </div>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput';
import EventBus from '@/eventBus';

export default {
  data() {
    return {
      shouldToggleOnKeyboardResize: true
    }
  },
  components: {
    'custom-input': CustomInput
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted () {
    this.setCustomVH();
    window.addEventListener('resize', this.handleWindowResize);
    console.log('mounted');
     EventBus.$on('KEYBOARD_OPEN', isKeyboardOpen => {
      this.isKeyboardOpen = isKeyboardOpen;      
    })

  },
  methods: {
    handleWindowResize (e) {      
      if (this.isKeyboardOpen && this.shouldToggleOnKeyboardResize) return;
      this.setCustomVH();
    },
    toggleResizeBehaviour () {
      this.shouldToggleOnKeyboardResize = !this.shouldToggleOnKeyboardResize;
    },
    setCustomVH() {
      const vh = window.innerHeight * 0.01;
      console.log(vh);
      const rootElement = document.documentElement;
      rootElement.style.setProperty('--vh', `${vh}px`);
    }
  }
}

</script>

<style lang="scss">

html, body {
  height:100%;
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
  // width: 96%;
  // left: 2%;
  // position: absolute; 
  // top: 5vh;
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
  height: 15vh;
  height: calc(var(--vh, 1vh) * 15);
  background-color: grey;
  display:flex;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 70vh;
  height: calc(var(--vh, 1vh) * 70);
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
  height: 15vh;
  height: calc(var(--vh, 1vh) * 15);  
  color: white;
  background-color: purple;
  display:flex;
  align-items: center;
  justify-content: center;
  
}

</style>
