<template>
  <v-container>
    <v-img
      height="350"
      :src="$store.state.courses.selectedCourse.image.formats.large.url"
      style="color: #fff"
    >
      <img
        class="teacher-picture"
        :src="$store.state.courses.selectedCourse.teacher.image.formats.small.url"
        alt=""
      >
      {{ $store.state.courses.selectedCourse.teacher.fullName }}
    </v-img>
    <v-card
      flat
    >
      <v-card-title>{{ $store.state.courses.selectedCourse.title }}</v-card-title>
      <v-card-text>
        <p v-html="convertContent($store.state.courses.selectedCourse.content)" />
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          color="primary"
          class="primary-button px-12"
          dark
          link
          x-large
          nuxt
          :to="{
            name: `cursos-course_id-test`,
            params: {
              course_id: course_id,
              course: $store.state.courses.selectedCourse
            }
          }"
        >
          Tomar el test
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import showdown from 'showdown'

export default {
  data() {
    return {
      course_id: this.$route.params.course_id,
      course: this.$route.params.course
    }
  },
  async fetch() {
    const response = await this.$axios.get(`/courses/${this.$route.params.course_id}`)
    this.$store.commit('courses/select', response.data)
  },
  head() {
    return {
      title: this.$store.state.courses.selectedCourse.title
    }
  },
  methods: {
    convertContent(content) {
      const converter = new showdown.Converter()
      const html = converter.makeHtml(content)
      return html
    }
  }
}
</script>

<style scoped>
.teacher-picture {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    object-fit: cover;
    margin: 8px;
}
</style>
