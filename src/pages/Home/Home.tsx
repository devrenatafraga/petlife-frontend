import { useNavigate } from 'react-router-dom';
import './Home.css';
import logoImage from '../../assets/petlife-logo.png';

/**
 * Landing page do PetLife
 * Apresenta o produto e direciona para onboarding
 */
const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/onboarding');
  };

  return (
    <div className="home">
      <header className="home-header">
        <div className="home-logo">
          <img src={logoImage} alt="PetLife Logo" className="logo-image" />
          <h1 className="logo-text">PetLife</h1>
        </div>
      </header>

      <main className="home-main">
        <section className="home-hero">
          <h2 className="home-title">
            Cuide do seu pet com amor e organização
          </h2>
          <p className="home-subtitle">
            Gerencie rotinas, vacinas, consultas e encontre os melhores serviços para o seu melhor amigo.
          </p>

          <button 
            className="home-cta"
            onClick={handleStart}
            aria-label="Começar a usar o PetLife"
          >
            Começar
          </button>
        </section>

        <section className="home-features">
          <div className="feature-card">
            <span className="feature-icon">📅</span>
            <h3>Organize rotinas</h3>
            <p>Controle vacinas, consultas e cuidados diários</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🏥</span>
            <h3>Serviços próximos</h3>
            <p>Encontre petshops, clínicas e parceiros</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">❤️</span>
            <h3>Tudo em um lugar</h3>
            <p>Histórico completo do seu pet sempre à mão</p>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>PetLife &copy; 2026 - Feito com amor para pets</p>
      </footer>
    </div>
  );
};

export default Home;
