<template>
  <div>
    <splitpanes>
      <pane min-size="30" class="scheme-pane">
        <div v-dragscroll="true" class="svg-container">
          <svg :width="1400" :height="2000" viewBox="0 0 1400 2000" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">

            <g transform="translate(0,100)">
              <EntityBlock :x="100" :y="100" :shape.sync="FormRequest" stroke="red">FormRequest</EntityBlock>
              <EntityBlock :x="400" :y="100" :shape.sync="Controller" stroke="green">Controller</EntityBlock>
              <EntityBlock :x="650" :y="100" :shape.sync="Action" stroke="blue">Action</EntityBlock>
              <EntityBlock :x="940" :y="100" :shape.sync="Task" stroke="purple">Task</EntityBlock>
              <EntityBlock :x="1100" :y="100" :shape.sync="Model" stroke="red">Model</EntityBlock>
              <EntityBlock :x="1030" :y="200" :shape.sync="Entity" stroke="navy">Entity</EntityBlock>
              <EntityBlock :x="1000" :y="300" :shape.sync="Exception" stroke="orange">Exception</EntityBlock>
              <EntityBlock :x="1020" :y="400" :shape.sync="Helpers" stroke="cyan">Helpers</EntityBlock>
              <EntityBlock :x="1000" :y="500" :shape.sync="Collection" stroke="magenta">Collection</EntityBlock>

              <g v-if="computed">
                <Arrow :x1="100 + FormRequest.width" :y1="130" :x2="FormRequest.width + 138" :y2="130"/>

                <Arrow :x1="400 + Controller.width" :y1="130" :x2="Controller.width + 440"  :y2="130"/>


                <Arrow nomarker :x1="650 + Action.width/2" :y1="100" :x2="650 + Action.width/2" :y2="50"/>
                <Arrow nomarker :x1="650 + Action.width/2" :y1="50" :x2="1100 + Model.width/2" :y2="50"/>
                <Arrow :x1="940 + Task.width/2" :y1="50" :x2="940 + Task.width/2" :y2="80"/>
                <Arrow :x1="1100 + Model.width/2" :y1="50" :x2="1100 + Model.width/2" :y2="80"/>

                <Arrow :x1="940 + Task.width" :y1="130" :x2="980 + Task.width" :y2="130"/>

                <Arrow :x1="900" :y1="230" :x2="1010" :y2="230"/>
                <Arrow :x1="900" :y1="330" :x2="980" :y2="330"/>
                <Arrow :x1="900" :y1="430" :x2="1000" :y2="430"/>
                <Arrow :x1="900" :y1="530" :x2="980" :y2="530"/>
                <Arrow nomarker :x1="900" :y1="530" :x2="900" :y2="130"/>
                <Arrow nomarker :x1="900" :y1="130" :x2="940" :y2="130"/>

                <Arrow :x1="1140 + Model.width" :y1="230" :x2="1045 + Model.width" :y2="230"/>
                <Arrow :x1="1140 + Model.width" :y1="330" :x2="1075+ Model.width" :y2="330"/>
                <Arrow :x1="1140 + Model.width" :y1="430" :x2="1060+ Model.width" :y2="430"/>
                <Arrow :x1="1140 + Model.width" :y1="530" :x2="1080+ Model.width" :y2="530"/>
                <Arrow nomarker :x1="1140 + Model.width" :y1="530" :x2="1140 + Model.width" :y2="130"/>
                <Arrow nomarker :x1="1140 + Model.width" :y1="130" :x2="1140 + Model.width" :y2="130"/>

                <Arrow nomarker :x1="1140 + Model.width" :y1="130" :x2="1100 + Model.width" :y2="130"/>
              </g>

            </g>

          </svg>
        </div>
      </pane>

      <pane min-size="30" class="content-pane">
        <highlightjs language="php" :code="code" />
        Controller
      </pane>
    </splitpanes>

  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes';
import { dragscroll } from 'vue-dragscroll';
import EntityBlock from './EntityBlock';
import Arrow from './Arrow';
import 'splitpanes/dist/splitpanes.css';
import 'highlight.js/styles/vs.css';

export default {
  name: 'Scheme',

  components: {
    Splitpanes,
    EntityBlock,
    Arrow,
    Pane,
  },

  directives: {
    dragscroll
  },

  data () {
    return {
      FormRequest: null,
      Controller: null,
      Action: null,
      Task: null,
      Model: null,
      Entity: null,
      Exception: null,
      Helpers: null,
      Collection: null,

      code: `<?php
      class Portel {}
      $var = new Portel();
      `
    }
  },

  computed: {
    computed() {
      return !!this.FormRequest &&
             !!this.Controller &&
             !!this.Action &&
             !!this.Task &&
             !!this.Model &&
             !!this.Entity &&
             !!this.Exception &&
             !!this.Helpers &&
             !!this.Collection
    },
  },

  methods: {
    click() {
      console.log('hi');
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;500&display=swap');

  .splitpanes__splitter {
    background-color: black;
    width: 6px;
  }

  .scheme-pane {
    background-color:rgb(230, 230, 230);
    cursor: move;
  }

  .content-pane {
    font-family: 'Josefin Sans', sans-serif;
  }

  .svg-container {
    height: 100vh;
    /* width: 100vw; */
    overflow: hidden;
  }

  .block-text {
    stroke: none;
    font-family: 'Josefin Sans', sans-serif;
    fill: black;
    user-select: none;
  }

  .clickable {
    cursor: pointer;
  }

  body {
    margin: 0;
  }
</style>
