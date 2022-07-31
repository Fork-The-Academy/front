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
        <v-row
          v-for="(question, index) in $store.state.courses.selectedCourse.questions"
          :key="question.id"
        >
          <v-col cols="12">
            <h2>{{ index+1 }}. {{ question.data }}</h2>
          </v-col>
          <v-col
            cols="12"
          >
            <v-item-group v-model="answers[index]">
              <v-container>
                <v-row>
                  <v-col
                    v-for="(option, index2) in question.choices"
                    :key="option"
                    cols="12"
                    md="3"
                  >
                    <v-item
                      v-slot="{ active, toggle }"
                      :value="index2"
                    >
                      <v-card
                        :color="active ? 'primary' : ''"
                        class="d-flex align-center"
                        :dark="active"
                        height="200"
                        :disabled="sent"
                        @click="toggle"
                      >
                        <v-scroll-y-transition>
                          <div
                            class="text-h4 flex-grow-1 text-center"
                          >
                            {{ option }}
                          </div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          color="primary"
          class="primary-button px-12"
          dark
          x-large
          :loading="loadBtn"
          @click="sendTest()"
        >
          Enviar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      course_id: this.$route.params.course_id,
      answers: [],
      loadBtn: false,
      results: ['a', 'a', 'a', 'a'],
      sent: false,
      percentage: 0
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
    async sendTest() {
      this.sent = true
      this.loadBtn = true
      this.results = []
      await this.$store.state.courses.selectedCourse.questions.forEach(async question => {
        this.$axios.get(`/answers/${question.answer}`).then(response => {
          this.results.push(response.data)
          this.getPercentage()
        })
      })
    },
    getPercentage() {
      this.results.forEach((result, index) => {
        console.log('Evaluation: ', this.answers[index] === result.content)
        if (this.answers[index] === result.content) {
          this.percentage += 1 / this.results.length * 100
        }
      })

      console.log('Percentage', this.percentage)
      // console.log('Evaluation: ', this.answers[index] === result.content)

      if (this.percentage > 90) {
        this.$swal
          .fire({
            title: '¡Felicitaciones!',
            text: 'Has aprobado el test, estamos enviando el certificado a tu wallet',
            confirmButtonText: 'Sí'
          })

        const payload = {
          email: this.$auth.user.email,
          nombre: this.$auth.user.wallet.publicKey
        }

        this.$axios.post('/certificates', payload).then(r => {
          console.log(r)
        })
      } else {
        this.$swal
          .fire({
            title: 'Vuelve a intentarlo!',
            text: 'No has aprobado el test, intenta nuevamente para obtener tu certificado',
            confirmButtonText: 'Sí'
          })
      }
      this.loadBtn = false
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
