<template>
  <q-page class="hello">
    <q-card flat>
      <q-card-section>
        <q-list>
          <q-item
            v-for="k in Object.keys(xikxik)"
            :key="k"
            clickable
            @click="myList = k"
          >
            <q-item-section>
              <q-btn :color="myList !== k ? 'blue' : 'green'" label="{{ k }}" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card flat>
      <q-card-section>
        <q-form>
          <q-input v-model="myText" />
          <q-btn color="green" @click="add(myList, myText)" label="Add" />
        </q-form>
        <hr />
        <div v-for="o in xikxik[myList]" v-if="o" :key="o">
          <h3>{{ o }}</h3>
          <q-btn color="red" @click="del(myList, o)" label="Delete" />
        </div>
      </q-card-section>
    </q-card>

    <q-btn color="teal" size="large" @click="reset()" label="重設!!" />
  </q-page>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myText: '',
      myList: 'animal',
    };
  },
  props: ['xikxik'],
  methods: {
    add(n, i) {
      this.$emit('add', n, i);
      this.myText = '';
    },
    del(n, i) {
      this.$emit('del', n, i);
    },
    reset() {
      this.$emit('reset');
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
