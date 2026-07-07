import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export type NavTarget = {
  path: string
  hash?: string
}

const sectionOffset = 120

export const useActiveNavItem = () => {
  const route = useRoute()
  const activeHash = ref(route.hash)

  const isHomePage = computed(() => route.path === '/')

  const updateActiveHash = () => {
    if (!isHomePage.value) {
      activeHash.value = ''
      return
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[id]'),
    )

    if (!sections.length) {
      activeHash.value = route.hash
      return
    }

    const scrollPosition = window.scrollY + sectionOffset
    const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2

    if (pageBottom) {
      activeHash.value = `#${sections[sections.length - 1].id}`
      return
    }

    const activeSection = sections.find((section) => {
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight

      return scrollPosition >= sectionTop && scrollPosition < sectionBottom
    })

    if (activeSection) {
      activeHash.value = `#${activeSection.id}`
    }
  }

  const scheduleActiveHashUpdate = () => {
    requestAnimationFrame(updateActiveHash)
  }

  onMounted(() => {
    nextTick(updateActiveHash)
    window.addEventListener('scroll', scheduleActiveHashUpdate, { passive: true })
    window.addEventListener('resize', scheduleActiveHashUpdate)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scheduleActiveHashUpdate)
    window.removeEventListener('resize', scheduleActiveHashUpdate)
  })

  watch(
    () => [route.path, route.hash],
    () => {
      activeHash.value = route.hash
      nextTick(updateActiveHash)
    },
  )

  const isActiveNavItem = (to: NavTarget) => {
    return isHomePage.value && route.path === to.path && activeHash.value === to.hash
  }

  const scrollToCurrentHash = (to: NavTarget) => {
    if (!to.hash || route.path !== to.path || route.hash !== to.hash) {
      return
    }

    document.querySelector(to.hash)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return {
    isActiveNavItem,
    scrollToCurrentHash,
  }
}
