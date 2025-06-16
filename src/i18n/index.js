import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    question: 'What country is this city in?'
  },
  de: {
    question: 'In welchem Land liegt diese Stadt?'
  }
}

export default createI18n({
  legacy: false,
  locale: 'en',
  messages
})
