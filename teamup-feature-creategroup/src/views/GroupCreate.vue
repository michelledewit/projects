<script src="https://cdn.jsdelivr.net/npm/vue-slider-component@latest/dist/vue-slider-component.umd.min.js"></script>

<template>
  <div class="flex flex-col justify-center bg-gray-200 content-center">
    <span>Groupname: {{ group.name }}</span>
    <input
      type="text"
      class="justify-center content-center m-4 bg-gray-600 text-white"
      id="name"
      v-model="group.name"
      placeholder="groupname"
    />

    <span>Goal: {{ group.goal }}</span>
    <div class="justify-center content-center m-4 bg-gray-600">
      <input type="radio" id="quarter" value="Quarter" v-model="group.goal" />
      <input type="radio" id="half" value="Half" v-model="group.goal" />
      <input type="radio" id="full" value="Full" v-model="group.goal" />
    </div>

    <span>Trainingsday {{ group.trainingDays }}</span>

    <div class="justify-center content-center m-4 bg-gray-600">
      <input
        type="checkbox"
        id="maandag"
        value="Maandag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="dinsdag"
        value="Dinsdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="woensdag"
        value="Woensdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="donderdag"
        value="Donderdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="vrijdag"
        value="Vrijdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="zaterdag"
        value="Zaterdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="Zondag"
        value="Zondag"
        v-model="group.trainingDays"
      />
    </div>

    <span>Maximum groupsize {{ group.groupsize }}</span>

    <vue-slider v-model="group.groupsize" />

    <div id="button" class=" flex justify-center m-4">
      <button
        class=" flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-3/5"
        v-on:click="create"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import GroupService from "@/services/GroupService.js";

export default {
  components: {
    VueSlider
  },
  data: () => {
    return {
      group: {
        name: "",
        trainingDays: [],
        goal: "",
        groupsize: "",
        location: {}
      }
    };
  },
  methods: {
    create: () => {
      GroupService.createGroup({
        name: this.group.name,
        goal: this.group.goal,
        trainingDays: this.group.trainingDays,
        maxSize: this.group.groupsize,
        location: this.group.location
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  },
  created() {
    this.$getLocation().then(coordinates => {
      this.group.location = { lat: coordinates.lat, lng: coordinates.lng };
    });
  }
};
</script>

<style
  link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vue-slider-component@latest/theme/default.css"
>
/* component style */
.vue-slider-disabled .vue-slider-process {
  background-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-dot-handle {
  border-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #a7a7a7;
}

/* rail style */
.vue-slider-rail {
  background-color: whitesmoke;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-rail {
  background-color: #e1e1e1;
}

/* process style */
.vue-slider-process {
  background-color: #9cd5ff;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-process {
  background-color: #69c0ff;
}

/* mark style */
.vue-slider-mark-step {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #e8e8e8;
  background-color: #fff;
}
.vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #9cd5ff;
}
.vue-slider:hover .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #69c0ff;
}

.vue-slider-mark-label {
  font-size: 12px;
  white-space: nowrap;
}
/* dot style */
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #9cd5ff;
  box-sizing: border-box;
  transition: box-shadow 0.3s, border-color 0.3s;
}
.vue-slider:hover .vue-slider-dot-handle {
  border-color: #69c0ff;
}

.vue-slider-dot-handle-focus {
  border-color: #36abff;
  box-shadow: 0 0 0 5px rgba(54, 171, 255, 0.2);
}
.vue-slider:hover .vue-slider-dot-handle-focus {
  border-color: #36abff;
}

.vue-slider-dot-handle:hover {
  border-color: #36abff;
}
.vue-slider:hover .vue-slider-dot-handle:hover {
  border-color: #36abff;
}

.vue-slider-dot-handle-disabled {
  cursor: not-allowed;
  border-color: #ddd !important;
}

.vue-slider-dot-tooltip {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.vue-slider-dot-tooltip-inner {
  font-size: 14px;
  white-space: nowrap;
  padding: 6px 8px;
  color: #fff;
  border-radius: 5px;
  border-color: rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: scale(0.9);
  transition: transform 0.3s;
}
.vue-slider-dot-tooltip-inner::after {
  content: "";
  position: absolute;
}
.vue-slider-dot-tooltip-inner-top::after {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-top-color: inherit;
}
.vue-slider-dot-tooltip-inner-bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-bottom-color: inherit;
}
.vue-slider-dot-tooltip-inner-left::after {
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-left-color: inherit;
}
.vue-slider-dot-tooltip-inner-right::after {
  right: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-right-color: inherit;
}
.vue-slider-dot-tooltip-inner-top {
  transform-origin: 50% 100%;
}
.vue-slider-dot-tooltip-inner-bottom {
  transform-origin: 50% 0;
}
.vue-slider-dot-tooltip-inner-left {
  transform-origin: 100% 50%;
}
.vue-slider-dot-tooltip-inner-right {
  transform-origin: 0% 50%;
}

.vue-slider-dot:hover .vue-slider-dot-tooltip,
.vue-slider-dot-tooltip-show {
  opacity: 1;
  visibility: visible;
}
.vue-slider-dot:hover .vue-slider-dot-tooltip .vue-slider-dot-tooltip-inner,
.vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner {
  transform: scale(1);
}
</style>
