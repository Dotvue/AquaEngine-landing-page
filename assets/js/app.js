document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.getElementById('language-toggle');

  toggle.addEventListener('change', () => {

    let lang = null;

    if (toggle.checked)
      lang = 'en';
    else 
      lang = 'es';

    fetch(`assets/i18n/${lang}.json`)
      .then(response => {

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })

      .then(data =>{
        document.querySelector('.toogle__language').textContent = data.navbar.language;

        document.querySelector('.home').textContent = data.navbar.home;
        document.querySelector('.about').textContent = data.navbar.about;
        document.querySelector('.service').textContent = data.navbar.service;

        document.querySelector('.hero__title').textContent = data.hero.title;
        document.querySelector('.hero__info').textContent = data.hero.description;
        document.querySelector('.hero__btn').textContent = data.hero.button;

        document.querySelector('.features__title').textContent = data.features.title;
        document.querySelector('.features__subtitle--inventory').textContent = data.features.subtitles.inventory;
        document.querySelector('.features__info--inventory').textContent = data.features.descriptions.inventory;

        document.querySelector('.features__subtitle--invoicing').textContent = data.features.subtitles.invoicing;  
        document.querySelector('.features__info--invoicing').textContent = data.features.descriptions.invoicing;

        document.querySelector('.features__subtitle--machine').textContent = data.features.subtitles.orderingMachine;
        document.querySelector('.features__info--machine').textContent = data.features.descriptions.orderingMachine;

        document.querySelector('.features__subtitle--monitoring').textContent = data.features.subtitles.equipmentMonitoring;
        document.querySelector('.features__info--monitoring').textContent = data.features.descriptions.equipmentMonitoring;

        document.querySelector('.subscription__title').textContent = data.subscriptions.title;
        document.querySelector('.subscription__description').textContent = data.subscriptions.description;

        const subscriptionPlans = document.querySelectorAll('.subscription__plan');
        subscriptionPlans.forEach(plan => {
          plan.textContent = data.subscriptions.plan;
        });

        const subscriptionBtn = document.querySelectorAll('.subscription__button');
        subscriptionBtn.forEach(button => {
          button.textContent = data.subscriptions.button;
        });

        
        document.querySelector('.testimonials__title-highlight').textContent = data.testimonials.title;
        document.querySelector('.testimonials__text').textContent = data.testimonials.description;

        document.querySelector('.footer__copyright').textContent = data.footer.copyright;
        document.querySelector('.footer__contact--title').textContent = data.footer.contact;
        

        history.pushState({}, '', `?lang=${lang}`);
      })

      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  });

});
