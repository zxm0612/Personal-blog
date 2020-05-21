import addBlog from "./components/addBlog.vue"
import showBlog from "./components/showBlog.vue"

export default [
  {
    path: "/",
    component: showBlog
  },
  {
    path:"/Add",
    component: addBlog
  }
]