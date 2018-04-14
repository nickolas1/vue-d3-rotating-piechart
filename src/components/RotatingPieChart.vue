<template>
    <div class="rotating-pie-container" :class="{ 'rotating': rotating, 'tumbling': tumbling }" :style="style">
        <svg :width="svgWidth" :height="svgHeight">
            <g :style="{transform: `translate(${svgWidth / 2}px, ${svgHeight / 2}px)`}">
                <g v-for="arc in arcs" :key="arc.index" class="rotating-pie-arc">
                    <path :d="arc.path" :fill="arc.fill" />
                    <text :transform="`translate(${arc.labelTransform})`">{{ arc.labelText }}</text>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
import { pie as d3pie, arc as d3arc } from "d3-shape";
import { scaleOrdinal as d3scaleOrdinal } from "d3-scale";

export default {
  name: "RotatingPieChart",
  props: {
    data: {
      type: Array,
      default: () => [
        { label: "foo", value: 17 },
        { label: "bar", value: 12 },
        { label: "baz", value: 27 },
        { label: "bloop", value: 60 },
        { label: "bongo", value: 35 }
      ]
    },
    rotating: {
      type: Boolean,
      default: false
    },
    tumbling: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const style = {
      height: "400px",
      width: "400px"
    };
    return {
      svgWidth: 0,
      svgHeight: 0,
      sparkLine: "",
      style: style,
      arcs: []
    };
  },
  mounted() {
    this.renderPie();
  },
  methods: {
    getSvgSize() {
      this.svgHeight = this.$el.offsetHeight;
      this.svgWidth = this.$el.offsetWidth;
    },
    renderPie() {
      this.getSvgSize();
      const radius = Math.min(this.svgWidth, this.svgHeight) / 2;
      const pie = d3pie().value(d => d.value);
      const path = d3arc()
        .outerRadius(radius - 40)
        .innerRadius(0);
      const label = d3arc()
        .outerRadius(radius - 20)
        .innerRadius(radius - 20);

      const color = d3scaleOrdinal([
        "#CC6B39",
        "#998378",
        "#FF6861",
        "#A1FFA9",
        "#5DCC39"
      ]);

      this.arcs = pie(this.data);
      this.arcs.map(a => {
        a.path = path(a);
        a.fill = color(a.data.label);
        a.labelTransform = label.centroid(a);
        a.labelText = a.data.label;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

@keyframes tumble-animation {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  10% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  28% {
    transform: rotateX(144deg) rotateY(216deg) rotateZ(72deg);
  }
  46% {
    transform: rotateX(288deg) rotateY(432deg) rotateZ(144deg);
  }
  64% {
    transform: rotateX(432deg) rotateY(648deg) rotateZ(216deg);
  }
  72% {
    transform: rotateX(576deg) rotateY(864deg) rotateZ(288deg);
  }
  90% {
    transform: rotateX(720deg) rotateY(1080deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(720deg) rotateY(1080deg) rotateZ(360deg);
  }
}

path {
  stroke-width: 5px;
  stroke: aliceblue;
}
text {
  text-anchor: middle;
  font-family: "American Typewriter";
}
.rotating {
  animation: spin-animation 4s infinite;
}
.tumbling {
  animation: tumble-animation 5s infinite;
  animation-timing-function: linear;
}
</style>
