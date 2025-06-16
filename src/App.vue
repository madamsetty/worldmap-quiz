<template>
  <div>
    <!-- Top Menu -->
    <header class="menu">
      <h1>World Map Quiz</h1>
      <button @click="toggleLang">{{ currentLang.toUpperCase() }}</button>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import WorldMap from './components/WorldMap.vue'
import QuizModal from './components/QuizModal.vue'

// Reactive state
const selectedCity = ref(null)
const ttl = ref('')
const prg = ref('')
const desc = ref('')
const vUrl = ref('')
const iUrl = ref('')

// i18n language toggle
const { locale } = useI18n()
const currentLang = ref(locale.value)

function toggleLang() {
  locale.value = locale.value === 'en' ? 'de' : 'en'
  currentLang.value = locale.value
}

// Handler for map click
function onCitySelected({ city, title, program, description, videoUrl, imageUrl }) {
  selectedCity.value = city
  ttl.value = title
  prg.value = program
  desc.value = description
  vUrl.value = videoUrl
  iUrl.value = imageUrl
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  background-color: #ffffff;
  color: #FFFFFF;
}

/* Header Menu Styles */
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  background-color: #008045;
  z-index: 10;
  box-shadow: 0 6px 20px rgba(0, 80, 45, 0.5);
}

.menu h1 {
  margin: 0;
  font-size: 1.5rem;
}

.menu button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f0f0f0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.menu button:hover {
  background-color: #e0e0e0;
}
</style>
