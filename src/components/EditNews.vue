<template>
  <q-page class="hello">
    <q-card flat>
      <q-card-section>
        <q-form>
          <q-input type="textarea" v-model="myText" autogrow :rows="5" />
          <q-btn color="green" @click="addNews(myList, myText)" label="Add" />
        </q-form>
      </q-card-section>
    </q-card>

    <q-list>
      <q-item
        v-for="k in Object.keys(xikxik)"
        :key="k"
        clickable
        @click="myText += k"
      >
        <q-item-section>{{ k }}</q-item-section>
      </q-item>
    </q-list>

    <div v-for="o in newsList" v-if="o" :key="o">
      <q-card>
        <q-card-section>
          <h3>{{ o }}</h3>
          <q-btn-group spread>
            <q-btn color="green" @click="myText = o" label="複製" />
            <q-btn color="red" @click="delNews(myList, o)" label="刪除" />
          </q-btn-group>
        </q-card-section>
      </q-card>
    </div>

    <q-btn color="teal" size="large" @click="resetNews()" label="重設!!" />
  </q-page>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myText: '',
    };
  },
  props: ['xikxik', 'newsList'],
  methods: {
    addNews(n, i) {
      this.$emit('addNews', n, i);
      this.myText = '';
    },
    delNews(n, i) {
      this.$emit('delNews', n, i);
    },
    resetNews() {
      this.$emit('resetNews');
    },
  },
};
</script>

<style scoped>
.hello {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC',
    'LiHei Pro', 'BiauKai';
  color: var(--q-color-primary);
}
</style>
