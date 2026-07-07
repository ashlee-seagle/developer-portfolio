import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { skipNextRouterHashScroll } from '../router'

export type NavTarget = {
  path: string
  hash?: string
}

const sectionOffset = 120
const navigationScrollLockMs = 700

let scrollUnlockTimer: number | undefined
let releaseScrollLock: (() => void) | undefined

const preventScroll = (event: Event) => {
  event.preventDefault()
}

const lockWheelMomentum = () => {
  releaseScrollLock?.()

  window.addEventListener('wheel', preventScroll, { capture: true, passive: false })
  window.addEventListener('touchmove', preventScroll, { capture: true, passive: false })

  releaseScrollLock = () => {
    if (scrollUnlockTimer) {
      window.clearTimeout(scrollUnlockTimer)
      scrollUnlockTimer = undefined
    }

    window.removeEventListener('wheel', preventScroll, { capture: true })
    window.removeEventListener('touchmove', preventScroll, { capture: true })
    releaseScrollLock = undefined
  }

  scrollUnlockTimer = window.setTimeout(() => {
    releaseScrollLock?.()
    scrollUnlockTimer = undefined
  }, navigationScrollLockMs)
}

const waitForFrame = () => new Promise<void>((resolve) => {
  window.requestAnimationFrame(() => resolve())
})

export const useActiveNavItem = () => {
  const route = useRoute()
  const router = useRouter()
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

  const navigateToSection = async (to: NavTarget, event?: MouseEvent) => {
    if (event && (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    )) {
      return
    }

    if (!to.hash) {
      return
    }

    event?.preventDefault()
    lockWheelMomentum()

    const isSameRoute = route.path === to.path && route.hash === to.hash

    if (!isSameRoute) {
      skipNextRouterHashScroll()
      await router.push(to)
      await nextTick()
      await waitForFrame()
    }

    const target = document.querySelector<HTMLElement>(to.hash)

    if (!target) {
      return
    }

    const scrollMarginTop = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0
    const top = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop

    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  return {
    isActiveNavItem,
    navigateToSection,
  }
}
