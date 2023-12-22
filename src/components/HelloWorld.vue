<template lang="pug">
  q-page(padding)
    q-layout
      q-header
        q-toolbar
          q-toolbar-title 拾詩氏
        q-btn.droppable(@click="reseter()") 再來！

      q-img(:src="https://picsum.photos/400/200" alt="Lorem")

      div(v-for="(p, idx) in poet" :key="p + idx")
        h2 {{ s(parse(p)) }}

      q-item-section
        h1 小道小報 {{ today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() }}
        h2 (本報訊)

      q-list
        q-item(v-for="n in newsList" :key="n")
          q-item-section
            h3 {{ s(parse(n)) }}

      q-btn(color="primary" @click="reseter()") 再來！

      // Add your Facebook comments component or similar here
</template>
<script>
import { sify } from 'chinese-conv';
import { date } from 'quasar'; // if needed

export default {
  name: 'HelloWorld',
  data() {
    return {
      today: new Date(),
      // ...rest of your data
    };
  },
  methods: {
    // ...rest of your methods
  },
  // ...rest of your script
};
</script>
<style scoped>
.q-page {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC',
    'LiHei Pro', 'BiauKai';
  color: #2c3e50;
}

.q-btn {
  cursor: pointer;
}

/* Quasar specific classes for colors and backgrounds */
.text-primary {
  color: $primary;
}
.bg-blue {
  background-color: #009 !important;
}
</style>
