<template lang="html">
  <div
    id="draggable"
    v-on:touchstart="onDragStart"
    v-on:touchmove="onDragMove"
    v-on:touchend="onDragEnd"
  >
    <Shows v-bind:start-item="startItem" v-bind:end-item="endItem"></Shows>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import Shows from "./Shows";

export default {
  components: {
    Shows
    // DraggableElement
  },
  props: ["startItem", "endItem"],
  data: function() {
    return {
      originX: null,
      deltaX: 0,
      dragStarted: false,
      dragMoved: false
    };
  },
  methods: {
    onDragStart(event) {
      event.preventDefault();
      event.currentTarget.style.transition = "0s"; //reset transition value

      this.originX = event.touches[0].clientX;
      this.dragStarted = true;
    },
    onDragMove(event) {
      if (!this.dragStarted) {
        return;
      }
      this.dragMoved = true;

      this.deltaX = event.touches[0].clientX - this.originX;
      event.currentTarget.style.transform = "translate(" + this.deltaX + "px) ";
    },
    onDragEnd(event) {
      // event.preventDefault();
      if (this.deltaX > 115) {
        this.$emit("previous-page");
      } else if (this.deltaX < -115) {
        this.$emit("next-page");
      }

      this.deltaX = 0;
      this.dragStarted = false;
      this.dragMoved = false;
      //back to original place
      event.currentTarget.style.transition = "0.6s"; //slowly brings card to its original place
      event.currentTarget.style.transform =
        "translate(" + 0 + "px, " + 0 + "px)";
    }
  }
};
</script>

<style lang="css" scoped>
body {
}
#draggable {
  /* background-color: green;
  width: 300px;
  height: 300px; */
}
</style>

<!-- if (window.PointerEvent) {
  this.originX = event.clientX;
  event.currentTarget.setPointerCapture(event.pointerId);
} else {
  this.originX = event.targetTouches[0].clientX;
} -->

<!-- if (window.PointerEvent) {
  this.deltaX = event.clientX - this.originX;
} else {
  this.deltaX = event.touches[0].clientX - this.originX;
} -->

<!-- v-on:pointerdown="onDragStart"
v-on:pointermove="onDragMove"
v-on:pointerup="onDragEnd" -->

<!-- v-on:touchstart="onDragStart"
v-on:touchmove="onDragMove"
v-on:touchend="onDragEnd" -->
