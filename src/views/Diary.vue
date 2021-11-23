<template>
  <div class="diary">
    <br />
    <br />
    <br />
    <div class="heading_container heading_center">
      <h2>Diary</h2>
    </div>
    <router-view @showModal="onShowModal"></router-view>
    <br />
    <br />
    <br />
    <Modal v-if="showModal" @close="showModal = false" @go="goToMusic">
      <h3 slot="header">
        Discover your Feeling
        <font color="#ff0000">{{ sentiment }}</font> at Home
        <!-- <i class="fas fa-times closeModalBtn" @click="showModal = false"></i> -->
      </h3>
    </Modal>
  </div>
</template>
<script>
import Modal from "../components/diary/MusicRecommendModal";

export default {
  name: "Diary",
  components: {
    Modal,
  },

  data() {
    return {
      showModal: false,
      sentiment: "Happy",
    };
  },
  methods: {
    onShowModal({ x, y }) {
      console.log(x + " " + y);
      this.showModal = x;
      this.sentiment = y;
    },
    goToMusic() {
      console.log(this.sentiment);

      if (this.sentiment == "green") {
        this.$router.replace({
          name: "Player",
          params: { q: this.sentiment },
        });
      } else if (this.sentiment == "red") {
        this.$router.replace({
          name: "Player2",
          params: { q: this.sentiment },
        });
      } else if (this.sentiment == "yellow") {
        this.$router.replace({
          name: "Player3",
          params: { q: this.sentiment },
        });
      }
    },
  },
};
</script>
<style>
.diary {
  background-color: white;
  z-index: 5;
}
h2 {
  padding-bottom: 5px;
  border-bottom: 2px solid black;
}
</style>
