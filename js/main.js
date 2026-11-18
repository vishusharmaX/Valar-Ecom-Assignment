/* ==========================================================================
   Main Application Script — Purdy & Figg Christmas Member Offer
   Modular ES6+, zero dependencies, initialized on DOMContentLoaded
   ========================================================================== */

'use strict';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------------------
   1. Bundle Selector & Offer Carousel Sync
   -------------------------------------------------------------------------- */
const BUNDLE_SLIDES = {
  '1x': [
    {
      desktopWebp: 'assets/images/offer-1x-slide-1-desktop.webp',
      desktopJpg: 'assets/images/offer-1x-slide-1-desktop.jpg',
      mobileWebp: 'assets/images/offer-1x-slide-1-mobile.webp',
      mobileJpg: 'assets/images/offer-1x-slide-1-mobile.jpg',
      alt: '1x Christmas Scent Bundle: Amber glass Bottle for Life, sage cloth, and 3 Frankincense and Myrrh refills',
      hasBakedRoundel: true
    },
    {
      desktopWebp: 'assets/images/offer-1x-slide-2-desktop.webp',
      desktopJpg: 'assets/images/offer-1x-slide-2-desktop.jpg',
      mobileWebp: 'assets/images/offer-1x-slide-2-mobile.webp',
      mobileJpg: 'assets/images/offer-1x-slide-2-mobile.jpg',
      alt: 'Purdy and Figg open presentation box showing Bottle for Life, three concentrate refills, and cloth',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-shared-slide-3-desktop.webp',
      desktopJpg: 'assets/images/offer-shared-slide-3-desktop.jpg',
      mobileWebp: 'assets/images/offer-shared-slide-3-mobile.webp',
      mobileJpg: 'assets/images/offer-shared-slide-3-mobile.jpg',
      alt: 'Frankincense and Myrrh concentrate refill surrounded by natural golden resin tears on emerald surface',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-shared-slide-4-desktop.webp',
      desktopJpg: 'assets/images/offer-shared-slide-4-desktop.jpg',
      mobileWebp: 'assets/images/offer-shared-slide-4-mobile.webp',
      mobileJpg: 'assets/images/offer-shared-slide-4-mobile.jpg',
      alt: 'Three simple steps: Add concentrate, top up with tap water, then shake and spray',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-1x-slide-5-desktop.webp',
      desktopJpg: 'assets/images/offer-1x-slide-5-desktop.jpg',
      mobileWebp: 'assets/images/offer-1x-slide-5-mobile.webp',
      mobileJpg: 'assets/images/offer-1x-slide-5-mobile.jpg',
      alt: 'Amber Purdy and Figg Counter Clean spray bottle styled on a candlelit festive pine mantelpiece',
      hasBakedRoundel: false
    }
  ],
  '2x': [
    {
      desktopWebp: 'assets/images/offer-2x-slide-1-desktop.webp',
      desktopJpg: 'assets/images/offer-2x-slide-1-desktop.jpg',
      mobileWebp: 'assets/images/offer-2x-slide-1-mobile.webp',
      mobileJpg: 'assets/images/offer-2x-slide-1-mobile.jpg',
      alt: '2x Christmas Scent Bundles: Two Bottles for Life, two cloths, and 6 Frankincense and Myrrh refills',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-1x-slide-2-desktop.webp',
      desktopJpg: 'assets/images/offer-1x-slide-2-desktop.jpg',
      mobileWebp: 'assets/images/offer-1x-slide-2-mobile.webp',
      mobileJpg: 'assets/images/offer-1x-slide-2-mobile.jpg',
      alt: 'Purdy and Figg open gift box packaged for easy Christmas gifting',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-shared-slide-3-desktop.webp',
      desktopJpg: 'assets/images/offer-shared-slide-3-desktop.jpg',
      mobileWebp: 'assets/images/offer-shared-slide-3-mobile.webp',
      mobileJpg: 'assets/images/offer-shared-slide-3-mobile.jpg',
      alt: 'Frankincense and Myrrh concentrate refill surrounded by natural golden resin tears on emerald surface',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-shared-slide-4-desktop.webp',
      desktopJpg: 'assets/images/offer-shared-slide-4-desktop.jpg',
      mobileWebp: 'assets/images/offer-shared-slide-4-mobile.webp',
      mobileJpg: 'assets/images/offer-shared-slide-4-mobile.jpg',
      alt: 'Three simple steps: Add concentrate, top up with tap water, then shake and spray',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-1x-slide-5-desktop.webp',
      desktopJpg: 'assets/images/offer-1x-slide-5-desktop.jpg',
      mobileWebp: 'assets/images/offer-1x-slide-5-mobile.webp',
      mobileJpg: 'assets/images/offer-1x-slide-5-mobile.jpg',
      alt: 'Amber Purdy and Figg Counter Clean spray bottle styled on a candlelit festive pine mantelpiece',
      hasBakedRoundel: false
    }
  ],
  '3x': [
    {
      desktopWebp: 'assets/images/offer-3x-slide-1-desktop.webp',
      desktopJpg: 'assets/images/offer-3x-slide-1-desktop.jpg',
      mobileWebp: 'assets/images/offer-3x-slide-1-mobile.webp',
      mobileJpg: 'assets/images/offer-3x-slide-1-mobile.jpg',
      alt: '3x Christmas Scent Bundles: Three Bottles for Life, three cloths, and 9 Frankincense and Myrrh refills',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-1x-slide-2-desktop.webp',
      desktopJpg: 'assets/images/offer-1x-slide-2-desktop.jpg',
      mobileWebp: 'assets/images/offer-1x-slide-2-mobile.webp',
      mobileJpg: 'assets/images/offer-1x-slide-2-mobile.jpg',
      alt: 'Purdy and Figg open gift box packaged in three separate boxes for gifting',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-shared-slide-3-desktop.webp',
      desktopJpg: 'assets/images/offer-shared-slide-3-desktop.jpg',
      mobileWebp: 'assets/images/offer-shared-slide-3-mobile.webp',
      mobileJpg: 'assets/images/offer-shared-slide-3-mobile.jpg',
      alt: 'Frankincense and Myrrh concentrate refill surrounded by natural golden resin tears on emerald surface',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-shared-slide-4-desktop.webp',
      desktopJpg: 'assets/images/offer-shared-slide-4-desktop.jpg',
      mobileWebp: 'assets/images/offer-shared-slide-4-mobile.webp',
      mobileJpg: 'assets/images/offer-shared-slide-4-mobile.jpg',
      alt: 'Three simple steps: Add concentrate, top up with tap water, then shake and spray',
      hasBakedRoundel: false
    },
    {
      desktopWebp: 'assets/images/offer-1x-slide-5-desktop.webp',
      desktopJpg: 'assets/images/offer-1x-slide-5-desktop.jpg',
      mobileWebp: 'assets/images/offer-1x-slide-5-mobile.webp',
      mobileJpg: 'assets/images/offer-1x-slide-5-mobile.jpg',
      alt: 'Amber Purdy and Figg Counter Clean spray bottle styled on a candlelit festive pine mantelpiece',
      hasBakedRoundel: false
    }
  ]
};

function updateOfferCarouselMedia(bundleKey, activeSlideIndex = 0) {
  const slides = BUNDLE_SLIDES[bundleKey];
  if (!slides) return;

  const slideEls = document.querySelectorAll('[data-offer-slide]');
  slideEls.forEach((slideEl, idx) => {
    const data = slides[idx];
    if (!data) return;

    const desktopWebp = slideEl.querySelector('[data-src-desktop-webp]');
    const desktopJpg = slideEl.querySelector('[data-src-desktop-jpg]');
    const mobileWebp = slideEl.querySelector('[data-src-mobile-webp]');
    const img = slideEl.querySelector('img');

    if (desktopWebp) desktopWebp.srcset = data.desktopWebp;
    if (desktopJpg) desktopJpg.srcset = data.desktopJpg;
    if (mobileWebp) mobileWebp.srcset = data.mobileWebp;
    if (img) {
      img.src = data.mobileJpg;
      img.alt = data.alt;
    }
  });

  syncOfferRoundelVisibility(bundleKey, activeSlideIndex);
}

function syncOfferRoundelVisibility(bundleKey, slideIndex) {
  const roundel = document.querySelector('[data-offer-roundel]');
  if (!roundel) return;
  const slideMeta = BUNDLE_SLIDES[bundleKey]?.[slideIndex];
  const shouldHide = Boolean(slideMeta && slideMeta.hasBakedRoundel);
  roundel.classList.toggle('is-hidden', shouldHide);
}

function initBundleSelector(offerCarouselApi) {
  const group = document.querySelector('[data-bundle-group]');
  if (!group) return;

  const cards = Array.from(group.querySelectorAll('[data-bundle-card]'));
  const radios = Array.from(group.querySelectorAll('input[type="radio"]'));
  const qtyPill = document.querySelector('[data-offer-qty-pill]');
  const ctaButton = document.querySelector('[data-offer-cta]');
  const ctaCompare = document.querySelector('[data-offer-cta-compare]');
  const ctaPrice = document.querySelector('[data-offer-cta-price]');

  let currentBundle = '1x';

  const applySelection = (radio, shouldResetSlide) => {
    const bundleKey = radio.dataset.bundle || '1x';
    const price = radio.dataset.price || '£20.40';
    const compare = radio.dataset.comparePrice || '£43.00';
    const qtyLabel = radio.dataset.qtyBadge || '';
    const title = radio.dataset.title || 'Christmas Scent Bundle';

    currentBundle = bundleKey;

    cards.forEach((card) => {
      const cardRadio = card.querySelector('input[type="radio"]');
      const isSelected = cardRadio === radio;
      card.classList.toggle('is-selected', isSelected);

      const details = card.querySelector('.bundle-card__details-wrap');
      if (details) {
        details.setAttribute('aria-hidden', String(!isSelected));
      }
    });

    if (qtyPill) {
      if (qtyLabel) {
        qtyPill.textContent = qtyLabel;
        qtyPill.hidden = false;
      } else {
        qtyPill.hidden = true;
      }
    }

    if (ctaCompare) ctaCompare.textContent = compare;
    if (ctaPrice) ctaPrice.textContent = price;
    if (ctaButton) {
      ctaButton.dataset.productName = title;
      ctaButton.dataset.productPrice = price;
    }

    if (shouldResetSlide && offerCarouselApi) {
      offerCarouselApi.goTo(0);
    }

    const slideIdx = offerCarouselApi ? offerCarouselApi.getCurrentIndex() : 0;
    updateOfferCarouselMedia(bundleKey, slideIdx);
  };

  radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        applySelection(radio, true);
      }
    });
  });

  if (offerCarouselApi) {
    offerCarouselApi.onChange((newIndex) => {
      syncOfferRoundelVisibility(currentBundle, newIndex);
    });
  }

  const initialChecked = radios.find((r) => r.checked) || radios[0];
  if (initialChecked) {
    applySelection(initialChecked, false);
  }
}

/* --------------------------------------------------------------------------
   2. Reusable Accessible Carousel (Scroll-snap, Dots, Prev/Next, Keyboard, Swipe)
   -------------------------------------------------------------------------- */
function createCarousel(root) {
  const viewport = root.querySelector('[data-carousel-viewport]');
  const slides = Array.from(root.querySelectorAll('[data-carousel-slide]'));
  const dots = Array.from(root.querySelectorAll('[data-carousel-dot]'));
  const prevBtn = root.querySelector('[data-carousel-prev]');
  const nextBtn = root.querySelector('[data-carousel-next]');

  if (!viewport || slides.length === 0) return null;

  let currentIndex = 0;
  let scrollTimer = null;
  const listeners = [];

  const notifyChange = (idx) => {
    listeners.forEach((fn) => fn(idx));
  };

  const updateControls = (idx) => {
    currentIndex = Math.max(0, Math.min(idx, slides.length - 1));
    dots.forEach((dot, i) => {
      const active = i === currentIndex;
      dot.setAttribute('aria-selected', String(active));
      dot.setAttribute('tabindex', active ? '0' : '-1');
    });

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;
    notifyChange(currentIndex);
  };

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    const targetSlide = slides[clamped];
    if (!targetSlide) return;

    const targetLeft = targetSlide.offsetLeft - viewport.offsetLeft;
    viewport.scrollTo({
      left: targetLeft,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
    updateControls(clamped);
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // Keyboard arrow navigation when focused inside carousel
  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(currentIndex - 1);
    }
  });

  // Sync active dot on native touch swipe / trackpad scroll
  const syncFromScroll = () => {
    const viewportLeft = viewport.scrollLeft;
    let closestIdx = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const slideLeft = slide.offsetLeft - viewport.offsetLeft;
      const distance = Math.abs(slideLeft - viewportLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    if (closestIdx !== currentIndex) {
      updateControls(closestIdx);
    }
  };

  viewport.addEventListener(
    'scroll',
    () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(syncFromScroll, 60);
    },
    { passive: true }
  );

  updateControls(0);

  return {
    goTo,
    getCurrentIndex: () => currentIndex,
    onChange: (fn) => listeners.push(fn)
  };
}

function initCarousels() {
  let offerCarouselApi = null;
  document.querySelectorAll('[data-carousel]').forEach((el) => {
    const api = createCarousel(el);
    if (el.dataset.carousel === 'offer') {
      offerCarouselApi = api;
    }
  });
  return offerCarouselApi;
}

/* --------------------------------------------------------------------------
   3. Accessible Accordions (FAQ Single-Open & Scent Blend Details Multi-Open)
   -------------------------------------------------------------------------- */
function animatePanelOpen(panel) {
  panel.hidden = false;
  if (prefersReducedMotion()) {
    panel.style.height = '';
    panel.style.opacity = '';
    return;
  }

  panel.style.height = '0px';
  panel.style.opacity = '0';
  const targetHeight = panel.scrollHeight;

  requestAnimationFrame(() => {
    panel.style.height = `${targetHeight}px`;
    panel.style.opacity = '1';
  });

  const onEnd = (event) => {
    if (event.propertyName !== 'height') return;
    panel.style.height = '';
    panel.style.opacity = '';
    panel.removeEventListener('transitionend', onEnd);
  };
  panel.addEventListener('transitionend', onEnd);
}

function animatePanelClose(panel) {
  if (prefersReducedMotion()) {
    panel.hidden = true;
    panel.style.height = '';
    panel.style.opacity = '';
    return;
  }

  panel.style.height = `${panel.scrollHeight}px`;
  panel.style.opacity = '1';

  requestAnimationFrame(() => {
    panel.style.height = '0px';
    panel.style.opacity = '0';
  });

  const onEnd = (event) => {
    if (event.propertyName !== 'height') return;
    panel.hidden = true;
    panel.style.height = '';
    panel.style.opacity = '';
    panel.removeEventListener('transitionend', onEnd);
  };
  panel.addEventListener('transitionend', onEnd);
}

function initAccordions() {
  document.querySelectorAll('[data-accordion]').forEach((group) => {
    const mode = group.dataset.accordion;
    const triggers = Array.from(group.querySelectorAll('[data-accordion-trigger]'));

    triggers.forEach((trigger) => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        if (mode === 'single' && !isExpanded) {
          triggers.forEach((otherTrigger) => {
            if (otherTrigger !== trigger && otherTrigger.getAttribute('aria-expanded') === 'true') {
              const otherId = otherTrigger.getAttribute('aria-controls');
              const otherPanel = otherId ? document.getElementById(otherId) : null;
              otherTrigger.setAttribute('aria-expanded', 'false');
              if (otherPanel) animatePanelClose(otherPanel);
            }
          });
        }

        trigger.setAttribute('aria-expanded', String(!isExpanded));
        if (isExpanded) {
          animatePanelClose(panel);
        } else {
          animatePanelOpen(panel);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Smooth Scroll for Offer CTAs
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const selector = btn.dataset.scrollTo;
      const target = selector ? document.querySelector(selector) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Accessible Video Modal with Focus Trap & Escape Handling
   -------------------------------------------------------------------------- */
function initVideoModal() {
  const trigger = document.querySelector('[data-video-open]');
  const modal = document.getElementById('founders-video-modal');
  if (!trigger || !modal) return;

  const closeButtons = Array.from(modal.querySelectorAll('[data-modal-close]'));
  const focusableSelector =
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  let lastFocusedElement = null;

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    if (event.key !== 'Tab') return;
    const focusables = Array.from(modal.querySelectorAll(focusableSelector));
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      modal.classList.add('is-open');
      const closeBtn = modal.querySelector('.modal__close');
      if (closeBtn) closeBtn.focus();
    });

    document.addEventListener('keydown', handleKeydown);
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleKeydown);

    window.setTimeout(() => {
      modal.hidden = true;
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }, prefersReducedMotion() ? 0 : 220);
  };

  trigger.addEventListener('click', openModal);
  closeButtons.forEach((btn) => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. Cart Count Badge & Add-to-Cart Feedback
   -------------------------------------------------------------------------- */
function initCart() {
  const cartBadge = document.querySelector('[data-cart-count]');
  const cartButton = document.querySelector('[data-cart-button]');
  const toast = document.querySelector('[data-cart-toast]');
  const addButtons = document.querySelectorAll('[data-add-to-cart]');

  let itemCount = 0;
  let toastTimer = null;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2400);
  };

  addButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      itemCount += 1;
      const productName = btn.dataset.productName || 'Item';

      if (cartBadge) {
        cartBadge.textContent = String(itemCount);
        cartBadge.hidden = false;
        cartBadge.classList.add('is-bumped');
        window.setTimeout(() => cartBadge.classList.remove('is-bumped'), 220);
      }

      if (cartButton) {
        cartButton.setAttribute('aria-label', `Shopping cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`);
      }

      btn.classList.add('btn--added');

      window.clearTimeout(Number(btn.dataset.resetTimer || 0));
      const timerId = window.setTimeout(() => {
        btn.classList.remove('btn--added');
      }, 1500);
      btn.dataset.resetTimer = String(timerId);

      showToast(`Added ${productName} to your cart`);
    });
  });

  if (cartButton) {
    cartButton.addEventListener('click', () => {
      const msg =
        itemCount === 0
          ? 'Your cart is empty — choose a bundle below to get started.'
          : `You have ${itemCount} ${itemCount === 1 ? 'item' : 'items'} in your cart.`;
      showToast(msg);
    });
  }
}

/* --------------------------------------------------------------------------
   Bootstrap
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const offerCarouselApi = initCarousels();
  initBundleSelector(offerCarouselApi);
  initAccordions();
  initSmoothScroll();
  initVideoModal();
  initCart();
});
