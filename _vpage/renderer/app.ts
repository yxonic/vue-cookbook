import {
  h,
  shallowReactive,
  shallowRef,
  computed,
  createSSRApp,
  ComponentOptions,
} from 'vue'
import RouterLink from './routerLink'
import { createHead, useHead } from '@vueuse/head'
import { resolveLayoutComponent } from './layout'
import { PageContext, providePageContext } from '../lib/context'

export async function createApp(ctx: PageContext) {
  const context = shallowReactive(ctx)
  const frontmatter = computed(
    () =>
      ({
        title: 'VPage',
        ...(context.pageExports.frontmatter as
          | Record<string, string>
          | undefined),
      } as Record<string, string>),
  )
  const layout = shallowRef(
    frontmatter.value.layout
      ? await resolveLayoutComponent(frontmatter.value.layout, context._pageId)
      : (context.pageExports.Layout as ComponentOptions | undefined),
  )

  const App = {
    setup() {
      providePageContext(context)
      useHead(frontmatter)
      return () =>
        layout.value
          ? h(
              layout.value,
              {},
              {
                default: () => h(context.Page, context.pageProps),
              },
            )
          : h(context.Page, context.pageProps)
    },
  }
  const app = createSSRApp(App)

  const head = createHead()
  app.use(head)

  app.component('ARouter', RouterLink)

  function listener(el: Element, onClickOutside: () => void) {
    return (e: Event) => {
      if (el && !el.contains(e.target as HTMLElement)) {
        onClickOutside()
      }
    }
  }
  app.directive('click-outside', {
    mounted(el, binding) {
      el.clickOutsideListener = listener(el, binding.value)
      document.addEventListener(binding.arg || 'click', el.clickOutsideListener)
    },
    beforeUnmount(el, binding) {
      document.removeEventListener(
        binding.arg || 'click',
        el.clickOutsideListener,
      )
    },
  })

  return { app, head, context, frontmatter, layout }
}
