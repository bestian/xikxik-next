<template lang="pug">
.hello
  .ui.container.grid
    #poet.two.column.doubling.row
      .six.wide.column.ui.blue.segment
        h1 拾詩氏
        img(src="https://picsum.photos/400/200", alt="Lorem")
        hr
        .ui.list
          .item(v-for = "(p, idx) in poet" v-bind:key = "p + idx")
            h2 {{ p }}
            // h2 {{ s(parse(p)) }}
      .ten.wide.column.left.aligned.ui.black.segment
        h1 小道小報 {{ today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() }}
        //InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
        h2 (本報訊)
        .ui.bulleted.celled.list
          .item(v-for = "n in newsList" v-bind:key = "n")
            h3 {{ n }}
            // h3 {{ s(parse(n)) }}
    //.one.column.row
      .column.ui.segment
        InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
    .one.column.row
      .column
        a.ui.huge.black.button(@click = "reseter()") 再來！
    .one.column.row
      .column
        .fb-comments(data-href="http://xikxik.bestian.tw" data-width="" data-numposts="5")
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent(
  {
    setup() {
      const today = ref(new Date());

      const reseter = () => {
        console.log('Resetter triggered');
        this.$emit('reseter');
      };

      // 如果有其他需要的数据或方法，请在这里声明
      // ...

      return {
        today,
        reseter,
        // 其他需要在模板中使用的响应式数据或方法
      };
    },

    props: ['xikxik', 'newsList', 'poet', 'parse'],
  }

  // 如果有需要的话，这里可以定义其他的生命周期钩子或者方法
  // ...
);
</script>

<style scoped>
a {
  color: #42b983;
}

.ui.grid > .blue.column,
.ui.grid > .blue.row,
.ui.grid > .row > .blue.column {
  background-color: #009 !important;
}

#poet {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC',
    'LiHei Pro', 'BiauKai';
}
</style>
