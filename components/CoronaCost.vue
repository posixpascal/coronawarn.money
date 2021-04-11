<template>
  <div class="number">
    {{ intl.format(total) }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from "vue-property-decorator";
import {Recurring} from "~/constants/corona";
import differenceInSeconds from 'date-fns/differenceInSeconds'
import differenceInMilliSeconds from 'date-fns/differenceInMilliSeconds';

@Component
export default class CoronaCost extends Vue {
  @Prop() totals!: any;
  @Prop() intl!: any;
  total = 0


  created() {
    setInterval(() => {
      this.calcTotal();
    }, 10);
  }

  calcTotal() {
    this.total = this.totals.reduce((acc, item) => {
      return acc + this.totalCostOfItem(item)
    }, 0);
  }

  totalCostOfItem(item) {
    if (item.recurring === Recurring.ONCE) {
      return item.cost
    }

    switch (item.recurring) {
      case Recurring.MONTHLY:
        return (item.cost / (2592000*1000)) * Math.abs(differenceInMilliSeconds(item.recurringSince, +new Date()));
      default:
        return item.cost;
    }
  }
}
</script>

<style>
.number  {
  font-size: 16px;
}
@media screen and (min-width: 320px) {
  .number  {
    font-size: calc(32px + 6 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  .number {
    font-size: 100px;
  }
}
.number {
  font-family: monospace;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
