<template>
  <div>
    <!-- Top Menu -->
    <header class="menu">
      <img src="/brand-logo-black.jpeg" alt="Brand Logo" class="brand-logo" />
      <button @click="toggleLang">{{ currentLang }}</button>
    </header>

    <!-- 2D World Map Component -->
    <WorldMap @city-selected="onCitySelected" />

    <!-- Quiz Modal -->
    <QuizModal
      :city="selectedCity"
      :title="ttl"
      :program="prg"
      :description="desc"
      :videoUrl="vUrl"
      :imageUrl="iUrl"
      :visible="!!selectedCity"
      @close="selectedCity = null"
    />
    <EthopiaQuizModal
      :visible="!!selectedCityEthiopia"
      @close="selectedCityEthiopia = null"
    />
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import WorldMap from './components/WorldMap.vue'
import QuizModal from './components/QuizModal.vue'
import EthopiaQuizModal from './components/EthiopiaModal.vue'

// Reactive state
const selectedCity = ref(null)
const ttl = ref('')
const prg = ref('')
const desc = ref('')
const vUrl = ref('')
const iUrl = ref('')
const selectedCityEthiopia = ref(null)

// i18n language toggle
const { locale } = useI18n()
const currentLang = ref(locale.value)

function toggleLang() {
  locale.value = locale.value === 'en' ? 'de' : 'en'
  currentLang.value = locale.value
}

// Handler for map click
function onCitySelected({ city, title, program, description, videoUrl, imageUrl }) {
  console.log("Selected: ", city);
  if(city !== "Ethiopia" && city !== "Äthiopien")
  {
    selectedCity.value = city
    ttl.value = title
    prg.value = program
    desc.value = description
    vUrl.value = videoUrl
    iUrl.value = imageUrl
  }
  else {
    selectedCityEthiopia.value = city;
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  background-color: #FFFFFF;
  color: #FFFFFF;
}

/* Header Menu Styles */
.menu {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
  opacity: 0.9;
  z-index: 10;
  box-shadow: 0 6px 20px rgba(0, 80, 45, 0.75);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.brand-logo {
  height: 40px;
  object-fit: contain;
}

.menu h1 {
  margin: 0;
  font-size: 1.5rem;
  color: ##FFFFFF;
}

.menu button {
  width: 50px;
  height: 50px;
  border: none;
  background-color: #008045;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
}

.menu button:hover {
  background-color: #e74c3c;
  color: #ffffff;
}
</style>
