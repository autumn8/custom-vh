<template>
  <div>
    <input 
    v-keyboard-state 
    class="text-input"
    type="search"
    @focus="onFocus()"
    @blur="onBlur()"
    />
  </div>
</template>

<script>
import EventBus from '@/eventBus';
export default {
  methods: {
    onFocus () {      
      EventBus.$emit('KEYBOARD_OPEN', true);
    },
    onBlur () {
       EventBus.$emit('KEYBOARD_OPEN', false);
    }
  }
}
</script>


