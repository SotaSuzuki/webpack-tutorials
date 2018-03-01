<template lang="html">
  <p :style="style">Welcom to the <strong>HOLLOW</strong> world!</p>
</template>

<script>
export default {
  name: 'hollow',

  data () {
    return {
      style: {
        fontSize: '80px',
        fontFamily: 'fantasy, sans-serif',
        fontWeight: 'lighter',
        color: '#4b4b4b'
      }
    }
  },
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
