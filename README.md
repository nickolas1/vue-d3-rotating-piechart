# vue-d3-rotating-piechart

A D3 pie chart component for vue. Enhanced user experience via rotation and tumbling.

[Demo](https://nickolas1.github.io/vue-d3-rotating-piechart/)

## Installation
```sh
npm i vue-d3-rotating-piechart
```

## Basic usage
```js
import RotatingPieChart from "vue-d3-rotating-piechart";
```

```html
<RotatingPieChart :data="data" /> 
```

## Data format
```js
data = [{label: <string>, value: <number>}, ...]
```

## Properties
| prop        | type | required | default value |
| ------------ |:---:|:--------:|:-------------:|
| data | Array(Object) | false (but really, should have some data) | [{label: foo, value: 17] ...more dummy data |
| rotating | boolean | false | false |
| tumbling | function | false | false |

*rotating:* spin the pie chart in the plane of the page for an exciting user experience

*tumbling:* rotate the pie chart in all three dimensions for the most enhanced user experience

## Roadmap
maybe make the size configurable, fill the parent container or something. alternative colors? data accessors? sky's the limit really
