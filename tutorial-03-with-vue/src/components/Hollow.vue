<template lang="html">
  <p class="the-text">Welcom to the <strong>HOLLOW</strong> world!</p>
</template>

<script>
export default {
  name: 'hollow',

  computed: {
    myId () {
      return this.$_uid
    }
  },

  beforeCreate () {
    this.$sayHello()
  }
}
</script>
<style lang="scss">
.the-text {
  padding-top: 1em;
  padding-bottom: 1em;
  border-top: 4px solid #3b3b3b;
  border-bottom: 4px solid #3b3b3b;
  font-size: 62px;
  font-weight: 200;
  font-family: monospace, sans-serif;
  color: #3b3b3b;
  strong {
    font-style: italic;
    font-weight: inherit;
    color: #ff4a4a;
  }
}
</style>
