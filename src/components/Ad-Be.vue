<template>
  <div class="hello">
    <q-banner inline-actions class="bg-white text-primary q-pa-md" id="ad">
      <template v-slot:avatar>
        <q-avatar>
          <img src="/ad-be.jpg" alt="Bestian" />
        </q-avatar>
      </template>
      本站由Bestian製作，歡迎學習架網站
      <template v-slot:action>
        <q-btn
          flat
          dense
          color="primary"
          href="https://hack.bestian.tw"
          target="_blank"
          rel="noopener noreferrer"
          label="Visit"
        />
      </template>
    </q-banner>
  </div>
</template>

<script>
export default {
  name: 'Ad',
  // Your component data and methods (if any)
};
</script>

<style scoped>
.hello {
  /* Quasar Variables and classes can be used here */
}

#ad {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 0.5em 0.5em;
  font-size: 16px;
  transition: all 0.5s ease;
}

@media screen and (max-width: 600px) {
  #ad {
    bottom: 3em;
  }
}

#id:hover {
  font-size: 20px;
}

.ad {
  width: 3em;
}
</style>
