(() => {
  const image = (file, alt, caption = alt) => ({
    src: `assets/previews/${file}`,
    alt,
    caption
  });
  const previews = {
    portrait: {
      title: "JJ Keith",
      images: [
        image(
          "jj-portrait.webp",
          "Portrait of JJ Keith with long blonde hair, gold jewelry, and a black top against a light background.",
          "It me"
        )
      ]
    },
    "readers-digest": {
      title: "Reader’s Digest · Micro-memoir",
      url:
        "https://www.everand.com/book/265261130/The-Best-Life-Stories-150-Real-life-Tales-of-Resilience-Joy-and-Hope-all-150-Words-or-Less",
      link: "View the anthology ↗",
      images: [
        image(
          "readers-digest.jpg",
          "Cover of The Best Life Stories from Reader’s Digest, with a red and white life ring floating on blue water.",
          "“Primatology” by J. J. Keith · Contest winner, 2012. Collected in The Best Life Stories."
        )
      ]
    },
    lego: {
      title: "LEGO Christmas village",
      images: [
        image(
          "lego.webp",
          "A LEGO Christmas village beneath a Christmas tree, with illuminated buildings, a carousel, and train tracks.",
          "This implementation is microscopic in comparison to what I am going to do this year"
        )
      ]
    },
    salon: {
      title: "Salon",
      images: [
        image(
          "salon.webp",
          "Saved Salon screenshot of Attachment parenting dropout, with JJ Keith’s byline.",
          "Attachment parenting dropout · Salon"
        )
      ]
    },
    huffpost: {
      title: "HuffPost",
      images: [
        image(
          "huffpost-vaccines.webp",
          "Saved HuffPost screenshot of I’m Coming Out… as Pro-Vaccine, by JJ Keith.",
          "I’m Coming Out… as Pro-Vaccine · HuffPost (stayed at the top of the front page for long enough to make my life hell)"
        ),
        image(
          "huffpost-babywise.webp",
          "Saved HuffPost screenshot of My Advice to New Moms: Anything But Babywise, by JJ Keith.",
          "My Advice to New Moms: Anything But Babywise · HuffPost"
        )
      ]
    },
    "more-writing": {
      title: "More writing",
      images: [
        image(
          "daily-life.webp",
          "Saved Daily Life screenshot of When will I feel like myself again after having a baby?, by J.J. Keith.",
          "When will I feel like myself again after having a baby? · Daily Life"
        ),
        image(
          "the-glow.webp",
          "Saved The Glow screenshot of The only supermodel who will ever make you feel good about your post baby body, by JJ Keith.",
          "The only supermodel who will ever make you feel good about your post baby body · The Glow"
        )
      ]
    },
    "australian-book": {
      title: "Stop Reading Baby Books",
      images: [
        image(
          "australian-book.webp",
          "Australian cover of Stop Reading Baby Books! Your Surprisingly Durable Baby and You by J.J. Keith, with orange lettering and a baby with food on its face.",
          "Australian edition · Nero Books"
        )
      ]
    },
    riso: {
      title: "Risograph prints",
      images: [
        image(
          "riso.webp",
          "Colorful risograph prints with layered lettering, an anchor, a beach ball, and decorative motifs.",
          "A Riso-printed x-fold zine about Polari"
        ),
        image(
          "riso-collected.webp",
          "Collected risograph prints displayed on white cupboard doors, featuring colorful flowers, fruit, landscapes, animals, and lettering.",
          "Riso prints I’ve collected"
        )
      ]
    },
    resin: {
      title: "Resin jelly molds",
      images: [
        image(
          "resin.webp",
          "Glossy ring-shaped resin jelly molds swirled with pink, turquoise, green, blue, and amber.",
          "Not edible."
        )
      ]
    },
    drapes: {
      title: "Curtains, with pleats",
      images: [
        image(
          "drapes.webp",
          "Handmade pleated curtains with blue and cream geometric and floral patterns, hanging from rings.",
          "Yes, with pleats."
        )
      ]
    },
    kcrw: {
      title: "KCRW website",
      images: [
        image(
          "kcrw.webp",
          "KCRW homepage with a featured culture story, navigation, and audio player."
        )
      ]
    },
    gigmor: {
      title: "Gigmor",
      images: [
        image(
          "gigmor.webp",
          "Gigmor homepage with a singer and the headline Booking live music has never been this easy."
        )
      ]
    },
    edify: {
      title: "Edify marketing website",
      images: [
        image(
          "edify-case-study.webp",
          "Edify customer story page with a green headline and customer photograph.",
          "Edify · Customer story"
        ),
        image(
          "edify-demo.webp",
          "Edify demo request page with a form and product benefits.",
          "Edify · Demo request page"
        )
      ]
    },
    friendbuy: {
      title: "Friendbuy",
      images: [
        image(
          "friendbuy.webp",
          "Friendbuy Success Stories page featuring a Natural Life customer case study."
        )
      ]
    },
    tiktok: {
      title: "Cultivish on TikTok",
      url: "https://www.tiktok.com/@cultivish",
      link: "Watch on TikTok ↗",
      images: [
        image(
          "cultivish-tiktok.jpg",
          "Cultivish TikTok profile and a grid of short-form videos.",
          "Cultivish · Short-form videos"
        )
      ]
    },
    book: {
      title: "Motherhood Smotherhood",
      url: "https://www.amazon.com/dp/1629146587",
      link: "View the book on Amazon ↗",
      images: [
        image(
          "book.jpg",
          "Cover of Motherhood Smotherhood by JJ Keith, published by Skyhorse.",
          "US edition · Skyhorse Publishing"
        )
      ]
    },
    berkeley: {
      title: "UC Berkeley",
      url: "https://www.berkeley.edu/",
      link: "Visit UC Berkeley ↗",
      images: [
        image(
          "sather.jpg",
          "Sather Gate at the University of California, Berkeley."
        )
      ],
      credit: [
        "Minesweeper · CC BY-SA 3.0",
        "https://commons.wikimedia.org/wiki/File:Sather-Gate.jpg",
        "https://creativecommons.org/licenses/by-sa/3.0/"
      ]
    },
    usc: {
      title: "University of Southern California",
      url: "https://www.usc.edu/",
      link: "Visit USC ↗",
      images: [
        image(
          "tommy.jpg",
          "The Tommy Trojan statue at sunset on the USC campus."
        )
      ],
      credit: [
        "EEJCC · CC BY-SA 4.0",
        "https://commons.wikimedia.org/wiki/File:Tommy_Trojan_at_sunset.jpg",
        "https://creativecommons.org/licenses/by-sa/4.0/"
      ]
    }
  };
  const panel = document.getElementById("image-preview");
  const status = document.getElementById("preview-status");
  const photo = document.getElementById("preview-image");
  const closeButton = document.getElementById("preview-close");
  const prev = document.getElementById("preview-prev");
  const next = document.getElementById("preview-next");
  let active = null,
    index = 0,
    pinned = false,
    timer,
    announceTimer;
  function position() {
    if (!active) return;
    const r = active.getBoundingClientRect();
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const below = r.bottom + 10;
    const top =
      below + h <= innerHeight - 12 ? below : Math.max(12, r.top - h - 10);
    panel.style.left = `${Math.max(
      12,
      Math.min(r.left, innerWidth - w - 12)
    )}px`;
    panel.style.top = `${Math.max(12, Math.min(top, innerHeight - h - 12))}px`;
  }
  function render() {
    const data = previews[active.dataset.preview],
      item = data.images[index];
    photo.hidden = false;
    photo.src = item.src;
    photo.alt = item.alt;
    document.getElementById("preview-title").textContent = data.title;
    document.getElementById("preview-caption").textContent = item.caption;
    document.getElementById("preview-count").textContent = `${index + 1} / ${
      data.images.length
    }`;
    prev.parentElement.hidden = data.images.length < 2;
    const link = document.getElementById("preview-link");
    link.hidden = !data.url;
    if (data.url) {
      link.href = data.url;
      link.textContent = data.link;
    } else link.removeAttribute("href");
    const credit = document.getElementById("preview-credit");
    credit.replaceChildren();
    if (data.credit) {
      const source = document.createElement("a");
      source.href = data.credit[1];
      source.textContent = data.credit[0];
      credit.append(source);
      if (data.credit[2]) {
        const license = document.createElement("a");
        license.href = data.credit[2];
        license.textContent = "License";
        credit.append(" · ", license);
      }
      credit.append(" · Resized");
    }
    clearTimeout(announceTimer);
    announceTimer = setTimeout(() => {
      status.textContent = `${data.title}. Image ${index + 1} of ${
        data.images.length
      }. ${item.alt}`;
    }, 200);
    position();
  }
  function open(trigger) {
    clearTimeout(timer);
    if (active === trigger) return;
    if (active) active.setAttribute("aria-expanded", "false");
    active = trigger;
    index = 0;
    pinned = false;
    (trigger.closest("h1") || trigger).after(panel);
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    render();
  }
  function close(restore = false) {
    clearTimeout(timer);
    clearTimeout(announceTimer);
    const trigger = active;
    if (!trigger) return;
    // Restore before hiding so focus never falls into a hidden subtree.
    if (restore) trigger.focus({ preventScroll: true });
    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    active = null;
    pinned = false;
    status.textContent = "";
  }
  function scheduleClose() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (
        !pinned &&
        active &&
        !active.matches(":hover") &&
        !panel.matches(":hover") &&
        document.activeElement !== active &&
        !panel.contains(document.activeElement)
      )
        close();
    }, 350);
  }
  document.querySelectorAll("[data-preview]").forEach(trigger => {
    trigger.addEventListener("pointerenter", e => {
      if (e.pointerType === "mouse") {
        clearTimeout(timer);
        timer = setTimeout(() => open(trigger), 150);
      }
    });
    trigger.addEventListener("pointerleave", scheduleClose);
    trigger.addEventListener("focus", () => open(trigger));
    trigger.addEventListener("blur", scheduleClose);
    trigger.addEventListener("click", () => {
      if (active === trigger && pinned) close();
      else {
        open(trigger);
        pinned = true;
      }
    });
  });
  panel.addEventListener("pointerenter", () => clearTimeout(timer));
  panel.addEventListener("pointerleave", scheduleClose);
  panel.addEventListener("focusout", () => {
    setTimeout(() => {
      if (
        active &&
        document.activeElement !== active &&
        !panel.contains(document.activeElement)
      )
        close();
    }, 0);
  });
  closeButton.addEventListener("click", () => close(true));
  prev.addEventListener("click", () => {
    const n = previews[active.dataset.preview].images.length;
    index = (index + n - 1) % n;
    render();
  });
  next.addEventListener("click", () => {
    index = (index + 1) % previews[active.dataset.preview].images.length;
    render();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && active) {
      e.preventDefault();
      close(panel.contains(document.activeElement));
    }
  });
  document.addEventListener("pointerdown", e => {
    if (active && !active.contains(e.target) && !panel.contains(e.target))
      close();
  });
  window.addEventListener("resize", position);
  window.addEventListener("scroll", position, { passive: true });
  photo.addEventListener("load", position);
  photo.addEventListener("error", () => {
    photo.hidden = true;
    document.getElementById("preview-caption").textContent =
      "This preview could not load. Please try again.";
    position();
  });
})();
