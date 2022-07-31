export const state = () => ({
  courses: [],
  selectedCourse: {}
})

export const mutations = {
  set(state, courses) {
    state.courses = courses
  },

  select(state, course) {
    state.selectedCourse = course
  }
}
