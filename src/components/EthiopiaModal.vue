<template>
  <transition name="fade-slide">
    <div v-if="visible" class="modal">
      <div class="modal-header">
        <h2 class="title">Ethiopia</h2>
        <button class="close-button" @click="$emit('close')">×</button>
      </div>

      <div class="static-header">
        <h1>Sponsorships for children in Ethiopia</h1>
      </div>

      <div class="scrollable-content">
        <img :src="modalImage" alt="Ethiopia Main" class="section-image" />

        <div class="intro-text">
          With one Sponsorship you can help children in Ethiopia through investments in educational opportunities.
          Your help also aids in building wells, latrines and sanitation facilities, and diseases protection.
          Expectant mothers and toddlers are medically cared for. Poor families receive aid and nutrition is supported.
          This creates a beneficial environment for whole communities!
          <br /><br />
          An Ethiopian child benefits from their sponsorship, which enables them to attend school.
        </div>

        <div class="section" v-for="(section, index) in sections" :key="index">
          <div class="section-header">
            <div class="section-title">{{ section.title }}</div>
          </div>
          <div class="section-content">{{ section.content }}</div>
          <img :src="section.image" alt="" class="section-content-image" />
        </div>

        <div class="video-container">
          <iframe
            class="video-embed"
            src="https://www.youtube.com/embed/C3tKCzOrde8?start=5"
            title="Ethiopia Sponsorship Video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

// Access the base URL dynamically
const baseURL = import.meta.env.BASE_URL || '/'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

const modalImage = ref(baseURL + 'img/ethiopia-1.png')

const sections = ref([
  {
    title: '1 Child',
    content: `Your sponsorship primarily supports the basic needs of a child in Ethiopia.
      It is tailored to the needs of the sponsored child and improves nutrition, access to drinking water and medical care, as well as schooling.`,
    image: baseURL + 'img/ethiopia-2.png',
  },
  {
    title: '2 Family',
    content: `The family of the sponsored child in Ethiopia benefits in three ways: through the support of their child,
      through the support of the project community, and through learning how to lead an independent life.
      This includes training on income generation or parenting skills.`,
    image: baseURL + 'img/ethiopia-3.png',
  },
  {
    title: '3 Project Community',
    content: `With your sponsorship contributions, you also support the entire project community in Ethiopia.
      For example, through the construction of new wells or with agricultural training.
      This allows the communities to gradually become independent of financial aid.
      Not only the child benefits from the sponsorship, but the entire village community.`,
    image: baseURL + 'img/ethiopia-4.png',
  },
])
</script>

<style scoped>
.modal {
  position: fixed;
  top: 10%;
  left: 10%;
  right: 10%;
  background: #fff;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;
  max-height: 80vh;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  color: #008045;
  font-size: 1.5rem;
}

.title {
  color: #008045;
  font-size: 2rem;
  margin-top: 0px;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background-color: #008045;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: #006535;
}

.static-header {
  padding-left: 5px;
  color: #008045;
  font-weight: bold;
  font-size: 18px;
  margin-top: 1rem;
}

.scrollable-content {
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background: white;
  position: relative;
  margin-top: 1rem;
  border-radius: 8px;
}

.section-image {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.section-content-image {
  width: 30%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-top: 5px;
}

.intro-text {
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
  font-size: 16px;
}

.section {
  margin-bottom: 10px;
  border-radius: 8px;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  color: #008045;
}

.section-content {
  line-height: 1.6;
  color: #555;
  font-size: 15px;
}

.video-container {
  margin-top: 30px;
  text-align: center;
}

.video-embed {
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Scrollbar styling */
.scrollable-content::-webkit-scrollbar {
  width: 8px;
}

.scrollable-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background: #008045;
  border-radius: 4px;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background: #006535;
}
</style>
