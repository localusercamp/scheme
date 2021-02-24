<template>
  <g class="clickable" :transform="'translate('+x+', '+y+')'">
    <rect rx="5" ry="5" :width="rectWidth" height="60" fill="transparent" :stroke="stroke"></rect>
    <text ref="text" :x="spacing-2.5" y="42" class="block-text" font-size="35">
      <slot/>
    </text>
  </g>
</template>

<script>
export default {
  name: "EntityBlock",

  props: {
    x: {type: Number},
    y: {type: Number},
    stroke: {type: String},
    shape: {type: SVGRect},
  },

  data() {
    return {
      init: false,
      spacing: 15,
    }
  },

  computed: {
    rectShape() {
      const shape = this.$refs.text.getBBox();
      shape.width = shape.width + this.spacing * 2;
      this.$emit('update:shape', shape);
      return shape;
    },
    rectWidth() {
      return this.init ? this.rectShape.width : 0;
    },
  },

  mounted() {
    this.init = true;
  }
}
</script>
