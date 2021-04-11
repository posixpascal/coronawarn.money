<template>
  <div class="container">
    <h1>💸 Corona-Warn-App</h1>
    <CoronaCost :intl="intl" :totals="coronaCosts"/>
    <p>Gesamtkosten 14.06.2020 - heute</p>
    <h2>Übersicht</h2>
    <div class="box">
      <div v-for="item in coronaCosts" class="cost">
        <div class="cost-vendor">{{ item.vendor }}</div>
        <div class="cost-title">{{ item.name }}</div>
        <div class="cost-price">
        <span
          v-if="item.recurring === recurrings.MONTHLY"
          class="recurring">monatlich</span><span
          v-if="item.recurring === recurrings.ONCE"
          class="recurring">einmalig</span>
          {{ intl.format(item.cost) }}
        </div>
      </div>

      <a
        href="https://www.bundesregierung.de/breg-de/themen/corona-warn-app/corona-warn-app-app-stores-1753818"
        target="_blank" class="button">
        Corona-Warn-App herunterladen
      </a>
      <a
        href="https://github.com/posixpascal/coronawarn.money/issues/"
        target="_blank" class="button button-blue">
        Information oder Quelle hinzufügen
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";
import CoronaCost from "~/components/CoronaCost.vue";
import {CORONA_COSTS, Recurring} from "~/constants/corona";

@Component({
  components: {CoronaCost}
})
export default class IndexPage extends Vue {
  created() {

  }

  get intl() {
    return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'});
  }

  get coronaCosts() {
    return CORONA_COSTS
  }

  get recurrings() {
    return Recurring;
  }
}
</script>

<style>
h2 {
  @apply p-5 mt-20 rounded  text-gray-600 w-full max-w-2xl text-4xl text-left;
}
.box {
  @apply p-5 rounded bg-gray-100 text-gray-600 w-full max-w-2xl text-left;
}

.box .cost {
  @apply mb-5;
}

.box .cost-vendor {
  @apply font-bold;
}

.box .cost-title {
  @apply italic;
}

.box .recurring {
  @apply border-dotted border-gray-400 border-b;
}

.box .cost-price {

}

.container {
  @apply flex-col text-gray-400;
  margin: 40px auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
}

p {
  @apply mt-3 text-xl text-gray-400;
}

h1 {
  font-size: 16px;
}

@media screen and (min-width: 320px) {
  h1 {
    font-size: calc(32px + 6 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 1000px) {
  h1 {
    font-size: 100px;
  }
}

.button {
  @apply block bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50;
  @apply p-4 rounded text-center text-white uppercase font-bold;
  @apply mt-4;
}

.button-blue {
  @apply bg-blue-600 hover:bg-blue-700  focus:ring-blue-600;
}
</style>
