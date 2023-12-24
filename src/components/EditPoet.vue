<template>
  <q-page class="hello">
    <q-card>
      <q-card-section>
        <q-form>
          <q-input type="textarea" v-model="myText" autogrow />
          <q-btn color="green" @click="addPoet(myList, myText)" label="+" />
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

    <div v-for="p in poet" v-if="p" :key="p">
      <h3>{{ p }}</h3>
      <q-btn-group>
        <q-btn color="green" @click="myText = p">複製</q-btn>
        <q-btn color="red" @click="delPoet(myList, p)">刪除</q-btn>
      </q-btn-group>
    </div>

    <q-btn color="teal" size="large" @click="resetPoet()">重設!!</q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myText: '',
      myList: [], // Assuming myList exists, define it appropriately
    };
  },
  props: ['xikxik', 'poet'],
  methods: {
    addPoet(n, i) {
      this.$emit('addPoet', n, i);
      this.myText = '';
    },
    delPoet(n, i) {
      this.$emit('delPoet', n, i);
    },
    resetPoet() {
      this.$emit('resetPoet');
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

/* Additional styles or overrides for Quasar components */
</style>
