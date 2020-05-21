import showBlog from "./../components/showBlog"
import addBlog from "./../components/addBlog"
import detailBlog from "./../components/detailsBlog"

export default [
  {
    path:'/',
    name: 'showBlog',
    component: showBlog
  },
  {
    path:'/addBlog',
    name: 'addBlog',
    component: addBlog
  },
  {
    path:'/detailBlog/:id',
    name: 'detailBlog',
    component: detailBlog
  }
]