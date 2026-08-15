import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import '../styles/Values.css';

function Values() {
  const { t } = useTranslation();

  return (
    <section id="values" className="values">
      <div className="values-container">
        <Reveal>
          <span className="values-label">{t('values.label')}</span>
          <p className="values-quote">{t('values.quote')}</p>
          <p className="values-body">{t('values.body')}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default Values;
