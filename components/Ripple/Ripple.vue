<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { MDCRipple } from '@material/ripple'

export default {
  props: {
    unbounded: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcRipple: null
    }
  },
  mounted () {
    if (this.$slots.default) {
      this.$slots.default.map((n, i) => {
        if (i === 0) {
          n.elm.classList.add('mdc-ripple-surface')
          this.accent ? n.elm.classList.add('mdc-ripple-surface--accent') : n.elm.classList.add('mdc-ripple-surface--primary')
          this.mdcRipple = MDCRipple.attachTo(n.elm)
          this.unbounded ? this.mdcRipple.unbounded = true : this.mdcRipple.unbounded = false
        }
      })
    }
  },
  beforeDestroy () {
    if (this.mdcRipple !== null) { this.mdcRipple.destroy() }
  },
  methods: {
    activate () {
      this.mdcRipple.activate()
    },
    deactivate () {
      this.mdcRipple.deactivate()
    },
    layout () {
      this.mdcRipple.layout()
    }
  }
}
</script>

<style lang="scss">
@import "@material/ripple/mdc-ripple";
</style>
