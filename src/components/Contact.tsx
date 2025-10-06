import { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Using Web3Forms - Get your access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c7049e1f-3a39-4b6b-a83b-6f4582f0e3a9', // Replace with your actual access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Contact Form Message from ${formData.name}`,
          from_name: 'Connecta Website',
          redirect: false
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: t('contact.form.success')
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: t('contact.form.error')
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: t('contact.form.error')
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder={t('contact.form.name')}
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder={t('contact.form.email')}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              rows={5}
              placeholder={t('contact.form.message')}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          {status.message && (
            <div className={`alert alert-${status.type}`}>
              {status.message}
            </div>
          )}
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
