<template>
  <div ref="container" class="map-container"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import * as THREE from 'three'

const emit = defineEmits(['city-selected'])
const container = ref()
const projects = ref([])

const { locale } = useI18n()

let scene, camera, renderer, plane
let markers = []

onMounted(() => {
  initMap()
  loadProjects(locale.value)
})

watch(locale, (newLang) => {
  loadProjects(newLang)
})

async function loadProjects(lang) {
  try {
    const module = await import(`@/assets/${lang}-projects.json`)
    projects.value = Object.entries(module.default).map(([name, data]) => ({
      name,
      ...data
    }))
    renderMarkers()
  } catch (err) {
    console.error(`Failed to load ${lang}-projects.json`, err)
    projects.value = []
  }
}

function initMap() {
  const width = container.value.clientWidth
  const height = window.innerHeight * 0.8

  scene = new THREE.Scene()

  camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    0.1,
    1000
  )
  camera.position.z = 500

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setClearColor(0xffffff, 1)
  container.value.appendChild(renderer.domElement)

  const loader = new THREE.TextureLoader()
  loader.load('/world-map.jpg', (texture) => {
    const mapWidth = 1250
    const mapHeight = 700

    const geometry = new THREE.PlaneGeometry(mapWidth, mapHeight)
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true })
    plane = new THREE.Mesh(geometry, material)
    scene.add(plane)

    renderer.render(scene, camera)
  })

  setupInteractions()
}

function renderMarkers() {
  // Remove old markers
  markers.forEach(({ mesh, tooltip }) => {
    scene.remove(mesh)
    scene.remove(tooltip)
  })
  markers = []

  const mapWidth = 1250
  const mapHeight = 700

  for (const country of projects.value) {
    if (!country.title) continue

    const u = (country.lon + 180) / 360
    const v = (90 - country.lat) / 180
    const x = (u - 0.5) * mapWidth
    const y = (0.5 - v) * mapHeight

    const markerGeometry = new THREE.CircleGeometry(8, 32)

    const colorMap = {
      education: 0x2e86de,
      health: 0x28b463,
      environment: 0xf1c40f
    }
    const markerColor = colorMap[country.program?.toLowerCase()] || 0xdc371f
    const markerMaterial = new THREE.MeshBasicMaterial({ color: markerColor })

    const marker = new THREE.Mesh(markerGeometry, markerMaterial)
    marker.position.set(x, y, 1)
    scene.add(marker)

    const canvas = document.createElement('canvas')
    canvas.width = 300
    canvas.height = 80
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgba(0, 0, 0, 0.95)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white'
    ctx.font = '50px Arial'
    ctx.fillText(country.name, 15, 50)

    const tooltipTexture = new THREE.CanvasTexture(canvas)
    const tooltipMaterial = new THREE.SpriteMaterial({ map: tooltipTexture })
    const tooltip = new THREE.Sprite(tooltipMaterial)
    tooltip.scale.set(80, 20, 1)
    tooltip.position.set(x, y + 20, 1.1)
    tooltip.visible = false
    scene.add(tooltip)

    marker.userData.tooltip = tooltip

    markers.push({
      mesh: marker,
      tooltip,
      name: country.name,
      coords: { lat: country.lat, lon: country.lon }
    })
  }

  renderer.render(scene, camera)
}

function setupInteractions() {
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  renderer.domElement.addEventListener('mousemove', (e) => {
    const bounds = renderer.domElement.getBoundingClientRect()
    mouse.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1
    mouse.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1

    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(markers.map(m => m.mesh))
    for (const m of markers) m.tooltip.visible = false

    if (intersects.length > 0) {
      const hovered = intersects[0].object
      const match = markers.find(m => m.mesh === hovered)
      if (match) match.tooltip.visible = true
    }

    renderer.render(scene, camera)
  })

  renderer.domElement.addEventListener('click', (e) => {
    const bounds = renderer.domElement.getBoundingClientRect()
    const mouseX = ((e.clientX - bounds.left) / bounds.width) * 2 - 1
    const mouseY = -((e.clientY - bounds.top) / bounds.height) * 2 + 1

    const mouse = new THREE.Vector2(mouseX, mouseY)
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects([plane, ...markers.map(m => m.mesh)])

    if (intersects.length > 0) {
      const clicked = intersects[0].object
      const match = markers.find(m => m.mesh === clicked)

      if (match) {
        const matchedCountry = projects.value.find(c => c.name === match.name)
        emit('city-selected', {
          city: matchedCountry.name,
          title: matchedCountry.title,
          program: matchedCountry.program,
          description: matchedCountry.description,
          videoUrl: matchedCountry.video,
          imageUrl: matchedCountry.image
        })
      }
    }
  })
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 95%;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin: 1rem auto;
  max-width: 90%;
  box-shadow: 0 6px 20px rgba(0, 80, 45, 0.15);
}
</style>
