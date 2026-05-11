import React from 'react';
import styles from './foros.module.css'; // Importamos el CSS directamente

export default function Foros() {
  return (
    <main className="foros-container">
      {/* Navbar */}
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

      {/* Contenido principal */}
      <section className="forums-section">
          <div className="section-header">
              <i className="fa-solid fa-users icon-header"></i>
              <h1>Nuestra <span>Comunidad</span></h1>
              <p>Lo que dicen nuestros miembros</p>
          </div>

          <div className="testimonials-grid">
              {/* Tarjeta 1 */}
              <div className="testimonial-card">
                  <div className="card-header">
                      <img src="https://i.pravatar.cc/150?img=11" alt="Carlos Mendoza" className="avatar" />
                      <div className="user-info">
                          <h3>Carlos Mendoza</h3>
                          <p>Miembro desde 2023</p>
                      </div>
                  </div>
                  <div className="quote-icon">“</div>
                  <p className="testimonial-text">Esta plataforma cambió completamente mi forma de disfrutar el deporte...</p>
                  <div className="tags">
                      <span className="tag"><i className="fa-solid fa-bicycle"></i> Ciclismo</span>
                      <span className="tag"><i className="fa-solid fa-futbol"></i> Fútbol</span>
                  </div>
              </div>
              
              {/* Agregar aquí el resto de las tarjetas cambiando class por className e <img> por <img /> */}
              
          </div>
      </section>
      
      <div className="chat-widget">
          <i className="fa-solid fa-headset"></i> Talk with Us
      </div>
    </main>
  );
}