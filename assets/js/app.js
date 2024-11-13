document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('language-toggle');

  initializeLanguage(toggle);

  toggle.addEventListener('change', handleLanguageToggle);
});

function loadLanguage(lang) {
  fetch(`assets/i18n/${lang}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      updateContent(data);
      history.pushState({}, '', `?lang=${lang}`);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

function getInitialLanguage(toggle) {
  return toggle.checked ? 'en' : 'es';
}


function initializeLanguage(toggle) {
  const initialLang = getInitialLanguage(toggle);
  loadLanguage(initialLang);
}

function handleLanguageToggle() {
  const toggle = document.getElementById('language-toggle');
  const lang = toggle.checked ? 'en' : 'es';
  loadLanguage(lang);
}

function updateNavbar(navbar) {
  document.querySelector('.toogle__language').textContent = navbar.language;
  document.querySelector('.home').textContent = navbar.home;
  document.querySelector('.about').textContent = navbar.about;
  document.querySelector('.service').textContent = navbar.service;
}

function updateHeroSection(hero) {
  document.querySelector('.hero__title').textContent = hero.title;
  document.querySelector('.hero__info').textContent = hero.description;
  document.querySelector('.hero__btn').textContent = hero.button;
}

function updateFeaturesSection(features) {
  document.querySelector('.features__title').textContent = features.title;
  document.querySelector('.features__subtitle--inventory').textContent = features.subtitles.inventory;
  document.querySelector('.features__info--inventory').textContent = features.descriptions.inventory;
  document.querySelector('.features__subtitle--invoicing').textContent = features.subtitles.invoicing;
  document.querySelector('.features__info--invoicing').textContent = features.descriptions.invoicing;
  document.querySelector('.features__subtitle--machine').textContent = features.subtitles.orderingMachine;
  document.querySelector('.features__info--machine').textContent = features.descriptions.orderingMachine;
  document.querySelector('.features__subtitle--monitoring').textContent = features.subtitles.equipmentMonitoring;
  document.querySelector('.features__info--monitoring').textContent = features.descriptions.equipmentMonitoring;
}

function updateSubscriptionsSection(subscriptions) {
  document.querySelector('.subscription__title').textContent = subscriptions.title;
  document.querySelector('.subscription__description').textContent = subscriptions.description;

  const subscriptionPlans = document.querySelectorAll('.subscription__plan');
  subscriptionPlans.forEach(plan => {
    plan.textContent = subscriptions.plan;
  });

  const subscriptionBtn = document.querySelectorAll('.subscription__button');
  subscriptionBtn.forEach(button => {
    button.textContent = subscriptions.button;
  });
}

function updateAboutTheProductSection(aboutTheProduct) {
  document.querySelector('.about-the-product__title').textContent = aboutTheProduct.title;
  document.querySelector('.about-the-product__description').textContent = aboutTheProduct.description;
}

function updateAboutTheTeamSection(aboutTheTeam) {
  document.querySelector('.about-us__title').textContent = aboutTheTeam.title;
  document.querySelector('.about-us__description').textContent = aboutTheTeam.description;
  document.querySelector('.about-us__collaborators').textContent = aboutTheTeam.subtitle;
}

function updateTestimonialsSection(testimonials) {
  document.querySelector('.testimonials__title-highlight').textContent = testimonials.title;
  document.querySelector('.testimonials__text').textContent = testimonials.description;
}

function updateFooter(footer) {
  document.querySelector('.footer__copyright').textContent = footer.copyright;
  document.querySelector('.footer__contact--title').textContent = footer.contact;
}

function updateContent(data) {
  updateNavbar(data.navbar);
  updateHeroSection(data.hero);
  updateFeaturesSection(data.features);
  updateSubscriptionsSection(data.subscriptions);
  updateTestimonialsSection(data.testimonials);
  updateFooter(data.footer);
  updateAboutTheProductSection(data.aboutTheProduct);
  updateAboutTheTeamSection(data.aboutTheTeam);
}