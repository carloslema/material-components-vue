<template>
  <div
    class="mdc-line-ripple"
    :class="classes"/>
</template>

<script>
import { MDCLineRipple } from '@material/line-ripple'

export default {
  data () {
    return {
      mdcLineRipple: null
    }
  },
  mounted () {
    this.mdcLineRipple = MDCLineRipple.attachTo(this.$el)
  },
  methods: {
    activate () {
      this.mdcLineRipple.activate()
    },
    deactivate () {
      this.mdcLineRipple.deactivate()
    },
    setRippleCenter (xCoordinate) {
      this.mdcLineRipple.setRippleCenter(xCoordinate)
    }
  }
}
</script>

<style lang="scss">
@import "@material/line-ripple/mdc-line-ripple";
</style>
