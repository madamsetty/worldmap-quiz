<template>
  <transition name="fade-slide">
    <div v-if="visible" class="modal">
      <div class="modal-header">
        <h2>{{ cityName }}</h2>
        <button class="close-button" @click="$emit('close')">×</button>
      </div>

      <h1 class="title">{{ title }}</h1>
      <h3 class="program">{{ program }}</h3>
      <p class="description">{{ description }}</p>

      <div class="media">
        <!-- YouTube embed -->
        <iframe
          v-if="youTubeEmbedUrl"
          :src="youTubeEmbedUrl"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          class="youtube-iframe"
        ></iframe>

        <!-- Local or remote video -->
        <video
          v-else-if="videoSource"
          controls
          autoplay
          muted
          playsinline
          width="100%"
          height="260"
        >
          <source :src="videoSource" type="video/mp4" />
        </video>

        <!-- Fallback image -->
        <img
          v-else-if="imageSource"
          :src="imageSource"
          alt="City Image"
          width="100%"
          height="260"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, watch, ref } from 'vue'

const props = defineProps([
  'city',
  'title',
  'program',
  'description',
  'videoUrl',
  'imageUrl',
  'visible'
])

const baseURL = import.meta.env.BASE_URL

const cityName = computed(() => props.city)
const title = computed(() => props.title)
const program = computed(() => props.program)
const description = computed(() => props.description)

const youTubeEmbedUrl = ref('')

const isYouTubeVideo = computed(() =>
  props.videoUrl && /(youtube\.com|youtu\.be)/.test(props.videoUrl)
)

watch(() => props.visible, (val) => {
  if (val && isYouTubeVideo.value) {
    const videoId =
      props.videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1] ?? ''
    youTubeEmbedUrl.value = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`
  } else {
    youTubeEmbedUrl.value = ''
  }
})

const videoSource = computed(() => {
  if (!props.videoUrl || isYouTubeVideo.value) return ''
  return props.videoUrl.startsWith('http')
    ? props.videoUrl
    : baseURL + 'img/' + props.videoUrl
})

const imageSource = computed(() => {
  if (!props.imageUrl) return ''
  return props.imageUrl.startsWith('http')
    ? props.imageUrl
    : baseURL + 'img/' + props.imageUrl
})
</script>

<style>
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
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h1 {
  color: #008045;
  margin-top: 5px;
}

.modal-header h2 {
  color: #008045;
  font-size: 1.5rem;
}

.modal-header h3 {
  color: #008045;
}

.title {
  color: #008045;
  font-size: 2rem;
  margin-top: 5px;
}

.program {
  color: #008045;
  font-size: 1.25rem;
}

.description {
  color: black;
  font-size: 1rem;
}

.media {
  margin-top: 1rem;
  min-height: 260px;
  max-height: 260px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 80, 45, 0.15);
}

.media video,
.media img,
.media iframe {
  width: 100%;
  min-height: 260px;
  max-height: 260px;
  object-fit: cover;
  display: block;
}

.youtube-iframe {
  height: 260px;
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
  background-color: #006b37;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
