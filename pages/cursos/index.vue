<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Cursos disponibles</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(course, index) in $store.state.courses.courses"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            />
          </template>

          <v-img
            height="250"
            :src="course.image.formats.medium.url"
          />

          <v-card-title v-html="course.name" />

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="course.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              />

              <div class="grey--text ms-4">
                {{ course.rating }} (413)
              </div>
            </v-row>
            <div
              class="mt-3"
              v-html="course.description"
            />
          </v-card-text>

          <v-card-text v-if="course.teacher">
            <v-row>
              <v-col>
                <img
                  class="teacher-picture"
                  :src="course.teacher.image.formats.small.url"
                  alt=""
                >
                {{ course.teacher.fullName }}
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              class="primary-button"
              dark
              block
              link
              nuxt
              :to="{
                name: `cursos-course_id`,
                params: {
                  course_id: course.id,
                  course: course
                }
              }"
            >
              Comenzar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      courses: []
    }
  },
  created() {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const response = await this.$axios.get('/courses')
      this.$store.commit('courses/set', response.data)
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
}
</style>
