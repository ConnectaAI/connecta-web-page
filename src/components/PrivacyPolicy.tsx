import { useTranslation } from 'react-i18next';
import '../styles/PrivacyPolicy.css';

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="privacy-content">
          <h1>{t('privacy.title')}</h1>
          <p className="last-updated">{t('privacy.lastUpdated')}</p>
          
          <div className="intro-section">
            <p>{t('privacy.intro')}</p>
            <p>{t('privacy.introAgreement')}</p>
            <p><strong>{t('privacy.agreementText')}</strong></p>
          </div>

          <section className="privacy-section">
            <h2>{t('privacy.sections.informationCollect.title')}</h2>
            <p>{t('privacy.sections.informationCollect.description')}</p>
            
            <div className="subsection">
              <h3>{t('privacy.sections.informationCollect.personalData.title')}</h3>
              <ul>
                {(t('privacy.sections.informationCollect.personalData.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="subsection">
              <h3>{t('privacy.sections.informationCollect.usageData.title')}</h3>
              <ul>
                {(t('privacy.sections.informationCollect.usageData.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="subsection">
              <h3>{t('privacy.sections.informationCollect.clientData.title')}</h3>
              <ul>
                {(t('privacy.sections.informationCollect.clientData.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="subsection">
              <h3>{t('privacy.sections.informationCollect.noTracking.title')}</h3>
              <ul>
                {(t('privacy.sections.informationCollect.noTracking.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.howWeUse.title')}</h2>
            <p>{t('privacy.sections.howWeUse.description')}</p>
            <ul>
              {(t('privacy.sections.howWeUse.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="note">{t('privacy.sections.howWeUse.note')}</p>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.dataSharing.title')}</h2>
            <p>{t('privacy.sections.dataSharing.description')}</p>
            <ul>
              {(t('privacy.sections.dataSharing.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="note">{t('privacy.sections.dataSharing.note')}</p>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.dataRetention.title')}</h2>
            <ul>
              {(t('privacy.sections.dataRetention.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.dataDeletion.title')}</h2>
            <p>{t('privacy.sections.dataDeletion.description')}</p>
            <ol>
              {(t('privacy.sections.dataDeletion.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p className="note">{t('privacy.sections.dataDeletion.note')}</p>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.dataSecurity.title')}</h2>
            <ul>
              {(t('privacy.sections.dataSecurity.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.childrenPrivacy.title')}</h2>
            <ul>
              {(t('privacy.sections.childrenPrivacy.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.internationalTransfers.title')}</h2>
            <ul>
              {(t('privacy.sections.internationalTransfers.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.policyChanges.title')}</h2>
            <ul>
              {(t('privacy.sections.policyChanges.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.sections.contactUs.title')}</h2>
            <p>{t('privacy.sections.contactUs.description')}</p>
            <div className="contact-info">
              <p>{t('privacy.sections.contactUs.email')}</p>
              <p>{t('privacy.sections.contactUs.website')}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;