<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(course, index) in courses"
        :key="index"
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
            :src="course.img"
          />

          <v-card-title v-html="course.title" />

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

          <v-card-actions>
            <v-btn
              color="primary"
              text
              dark
              @click="reserve"
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
      courses: [{
        img: 'https://picsum.photos/200/300',
        title: 'Course Title',
        rating: 4.8,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }, {
        img: 'https://picsum.photos/200/300',
        title: 'Course Title',
        rating: 4.8,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }, {
        img: 'https://picsum.photos/200/300',
        title: 'Course Title',
        rating: 4.8,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }]
    }
  },
  methods: {
    async getCourses() {

    }
  }
}
</script>
