import '../styles/Preview.css';
import previewImage from '../assets/preview.png';

function Preview() {
  return (
    <section id="preview" className="preview-section">
      <div className="preview-container">
        <div className="preview-header">
          <h2 className="preview-title">Tu Ecosistema Médico, Unificado e Inteligente</h2>
          <p className="preview-description">
            Una interfaz diseñada para humanos, potenciada por datos. Visualiza todo lo que importa en un solo vistazo.
          </p>
        </div>

        <div className="preview-mockup-wrapper">
          <div className="preview-gradient-left"></div>
          <div className="preview-gradient-right"></div>

          <img 
            src={previewImage} 
            alt="Connecta Dashboard Preview" 
            className="preview-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Preview;
