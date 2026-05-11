import React from 'react';
import styles from './favoritos.module.css';

export default function Favoritos() {
  return (
    <main className="favoritos-container">
      {/* Navbar (Igual al anterior) */}
      <header className="navbar">
          <div className="logo">
              <div className="logo-circle">
                  <i className="fa-solid fa-person-running"></i>
              </div>
          </div>
          <nav className="nav-links">
              <a href="#"><i className="fa-solid fa-route"></i> Rutas</a>
              <a href="#"><i className="fa-solid fa-video"></i> Partidos</a>
              <a href="#"><i className="fa-solid fa-utensils"></i> Restaurantes</a>
              <a href="#"><i className="fa-solid fa-tag"></i> Ofertas</a>
              <a href="#" className="active"><i className="fa-solid fa-users"></i> Comunidad</a>
          </nav>
          <button className="btn-login"><i className="fa-regular fa-user"></i> Iniciar Sesión</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
          <div className="hero-content">
              <h1>Únete a una comunidad apasionada por el <span>deporte</span></h1>
              <p className="description">Somos más que una plataforma...</p>
              
              <button className="btn-join"><i className="fa-solid fa-user-plus"></i> Únete a la Comunidad</button>

              <div className="stats-grid">
                  <div className="stat-item">
                      <h2>15K+</h2>
                      <p>Miembros Activos</p>
                  </div>
                  {/* Agregar los demás stats aquí */}
              </div>
          </div>

          <div className="hero-image-container">
              <div className="location-badge">
                  <i className="fa-solid fa-location-dot"></i> Ciudad de México
              </div>
              {/* Checar el cierre de la etiqueta img */}
              <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Comunidad Deportiva" />
              
              <div className="event-card">
                  <h3>Próximo Evento Comunitario</h3>
                  <p><i className="fa-regular fa-calendar"></i> Sábado 15 de Febrero, 2025</p>
                  <button className="btn-outline"><i className="fa-solid fa-ticket"></i> Registrarse Ahora</button>
              </div>
          </div>
      </section>

      <div className="chat-widget">
          <i className="fa-solid fa-headset"></i> Talk with Us
      </div>
    </main>
  );
}