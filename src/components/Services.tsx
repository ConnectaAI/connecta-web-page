import { useTranslation } from 'react-i18next';

interface Service {
  titleKey: string;
  descriptionKey: string;
}

function Services() {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      titleKey: 'services.items.consulting.title',
      descriptionKey: 'services.items.consulting.description'
    },
    {
      titleKey: 'services.items.solutions.title',
      descriptionKey: 'services.items.solutions.description'
    },
    {
      titleKey: 'services.items.support.title',
      descriptionKey: 'services.items.support.description'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{t(service.titleKey)}</h3>
              <p>{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
