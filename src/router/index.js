import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import TopicDetailWrapper from '@/containers/TopicDetailWrapper'
import NewTopicWrapper from '@/containers/NewTopicWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newTopic',
      name: 'new-topic',
      component: NewTopicWrapper
    },
    {
      path: '/t/:id',
      name: 'topic-detail',
      component: TopicDetailWrapper
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
