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

    <span>Maximum distance {{ group.location }} km</span>

    <vue-slider v-model="group.location" />
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
        location: ""
      }
    };
  },
  methods: {
    create: function() {
      console.log({
        groupname: this.group.name,
        goal: this.group.goal,
        trainingDays: this.group.trainingDays,
        maxSize: this.group.groupsize,
        location: this.group.location
      });
    }
  }
};
</script>

<style></style>
