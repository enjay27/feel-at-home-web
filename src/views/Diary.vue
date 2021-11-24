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
        Discover Your Feeling
        <font color="#ff0000">{{ sentiment }}</font> at Home
        <!-- <i class="fas fa-times closeModalBtn" @click="showModal = false"></i> -->
      </h3>

      <img
        class="image"
        :key="image.id"
        :src="image.src"
        alt="image.alt"
        slot="body"
      />
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
      image: null,
      images: [
        {
          id: 1,
          src: "https://ifh.cc/g/9ErE8Q.jpg",
          alt: "Happy",
        },
        {
          id: 2,
          src: "https://ifh.cc/g/YjHt4T.jpg",
          alt: "Sad",
        },
        {
          id: 3,
          src: "https://ifh.cc/g/A4NkY1.jpg",
          alt: "Soso",
        },
      ],
    };
  },
  methods: {
    onShowModal({ x, y }) {
      console.log(x + " " + y);
      this.showModal = x;
      this.sentiment = y;

      if (this.sentiment == "Happy") {
        this.image = this.images[0];
      } else if (this.sentiment == "Sad") {
        this.image = this.images[1];
      } else {
        this.image = this.images[2];
      }
    },
    goToMusic() {
      console.log(this.sentiment);

      if (this.sentiment == "Happy") {
        this.$router.replace({
          name: "Player",
          params: { q: "pleasure" },
        });
      } else if (this.sentiment == "Sad") {
        this.$router.replace({
          name: "Player2",
          params: { q: "depressed" },
        });
      } else if (this.sentiment == "Soso") {
        this.$router.replace({
          name: "Player3",
          params: { q: "relexed" },
        });
      }
    },
  },
};
</script>
<style>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.diary {
  background-color: white;
  z-index: 5;
}
h2 {
  padding-bottom: 5px;
  border-bottom: 2px solid black;
}
</style>
