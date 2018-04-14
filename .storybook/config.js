import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import RotatingPieChart from "../src/components/RotatingPieChart";


// Register custom components.
Vue.component('RotatingPieChart', RotatingPieChart);

function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories');
}

configure(loadStories, module);
