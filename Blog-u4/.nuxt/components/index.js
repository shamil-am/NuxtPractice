export { default as HomeFooter } from '../../components/Home/HomeFooter.vue'
export { default as AdminAddNewPost } from '../../components/admin/AddNewPost.vue'
export { default as Post } from '../../components/post/Post.vue'
export { default as PostDetail } from '../../components/post/PostDetail.vue'
export { default as PostList } from '../../components/post/PostList.vue'
export { default as CommonBanner } from '../../components/common/Banner.vue'
export { default as CommonHeader } from '../../components/common/Header.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
