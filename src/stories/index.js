import Vue from 'vue';

import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs/vue";
import { withMarkdownNotes } from "@storybook/addon-notes";

import RotatingPieChart from "../components/RotatingPieChart";

function baseDecorator() {
  return {
    template:
      '<div style="font-family: sans-serif; text-align: center; color: #2c3e50"><story/></div>'
  };
}

storiesOf("Rotating Pie Chart", module)
  .addDecorator(baseDecorator)
  .addDecorator(withKnobs)

  .add(
    "static (boring)", () => ({
      template: `<RotatingPieChart />`
    })
  )

  .add(
    "rotating",
      withMarkdownNotes(`
~~~js
<RotatingPieChart :rotating="rotating"/>
~~~
  `)
      (() => ({
      data() {
        return {
            rotating: boolean("Rotating", true)
        };
      },
        template: `<RotatingPieChart :rotating="rotating"/>`
    }))
  )

  .add(
    "tumbling",
      withMarkdownNotes(`
~~~js
<RotatingPieChart :tumbling="tumbling"/>
~~~
  `)
      (() => ({
      data() {
        return {
            tumbling: boolean("Tumbling", true)
        };
      },
        template: `<RotatingPieChart :tumbling="tumbling"/>`
    })
  ))
  ;
