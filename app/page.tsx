import Image from "next/image";
import { contact } from "./site-config";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function BookingLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`booking-links${compact ? " compact" : ""}`}>
    <a className="button button-primary" href={contact.calendly} target="_blank" rel="noopener noreferrer">Agendar en Calendly <Arrow /></a>
    <a className="button button-secondary" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Escribirme por WhatsApp <Arrow /></a>
  </div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#inicio">Ir al contenido</a>
    <header className="header container">
      <a className="brand" href="#inicio" aria-label="Génesis Ojeda, inicio"><span className="brand-mark" aria-hidden="true">go<span>✳</span></span><span>Génesis Ojeda<small>PSICOLOGÍA ONLINE</small></span></a>
      <nav aria-label="Navegación principal"><a className="nav-about" href="#mi-enfoque">Mi enfoque</a><a className="nav-book" href="#agendar">Agendá tu sesión <Arrow /></a></nav>
    </header>
    <main id="inicio">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> UN ESPACIO PARA VOS</p>
          <h1 id="hero-title">No tenés que<br />resolverlo todo<br /><em>en soledad.</em></h1>
          <p className="hero-description">Soy Génesis Ojeda. Te acompaño a comprender lo que sentís y a construir nuevas formas de afrontar tu día a día.</p>
          <BookingLinks />
          <p className="hero-note"><span aria-hidden="true">◎</span> Atención online · Consulta individual para adultos</p>
        </div>
        <div className="portrait-composition">
          <div className="portrait-frame"><Image src="/images/genesis-portrait.png" alt="Retrato de Génesis Ojeda, creado a partir de sus fotografías" fill sizes="(max-width: 700px) 88vw, 460px" preload className="portrait" /></div>
          <span className="portrait-flower" aria-hidden="true">✳</span>
          <div className="portrait-caption"><span className="caption-line" /><span>Génesis Ojeda<small>Psicología · Enfoque cognitivo conductual</small></span></div>
          <span className="portrait-side-note" aria-hidden="true">A TU RITMO. A TU MANERA.</span>
        </div>
      </section>
      <section className="session-strip" aria-label="Información de la consulta"><div className="container session-facts"><div><span>MODALIDAD</span><strong>100% online</strong></div><div><span>PARA QUIÉN</span><strong>Personas adultas</strong></div><div><span>DURACIÓN</span><strong>60 minutos</strong></div><div><span>POR SESIÓN</span><strong>Gs. 150.000</strong></div></div></section>
      <section id="mi-enfoque" className="approach container" aria-labelledby="approach-title">
        <div><p className="eyebrow">MI FORMA DE ACOMPAÑARTE</p><h2 id="approach-title">Un espacio para entenderte.<br /><em>Herramientas para avanzar.</em></h2></div>
        <div className="approach-copy"><p>Trabajo desde el enfoque <strong>cognitivo conductual</strong>, que explora la relación entre lo que pensamos, lo que sentimos y cómo actuamos.</p><p>En las sesiones podemos trabajar en comprender lo que te está pasando y desarrollar herramientas que puedas llevar a tu vida cotidiana, respetando tu proceso y tus tiempos.</p><span className="approach-signature">Génesis Ojeda</span></div>
      </section>
      <section id="agendar" className="booking-section container" aria-labelledby="booking-title">
        <div className="booking-panel"><span className="booking-flower" aria-hidden="true">✳</span><p className="eyebrow">EL PRIMER PASO PUEDE SER HOY</p><h2 id="booking-title">Hagamos un espacio<br /><em>para vos.</em></h2><p>Elegí tu horario en Calendly o escribime por WhatsApp<br className="desktop-break" /> si preferís conversar antes de agendar.</p><BookingLinks compact /><p className="booking-location">Desde Asunción, Paraguay · Atención online</p></div>
      </section>
      <section className="faq container" aria-labelledby="faq-title"><div><p className="eyebrow">ANTES DE EMPEZAR</p><h2 id="faq-title">Algunas dudas<br /><em>frecuentes.</em></h2></div><div className="faq-list">
        <details><summary>¿Cómo son las sesiones online?<span aria-hidden="true">+</span></summary><p>La consulta es individual, está dirigida a personas adultas y dura una hora. Buscá un lugar tranquilo con privacidad y buena conexión a internet. Los detalles para conectarte se coordinan al agendar.</p></details>
        <details><summary>¿Cuánto cuesta cada sesión?<span aria-hidden="true">+</span></summary><p>Cada sesión de 60 minutos tiene un valor de Gs. 150.000. Podés consultar la forma de pago por WhatsApp antes de reservar.</p></details>
        <details><summary>¿Puedo cancelar o reprogramar?<span aria-hidden="true">+</span></summary><p>Sí. Si necesitás cancelar o cambiar tu horario, avisá con al menos 2 horas de anticipación para que podamos reorganizar la agenda.</p></details>
        <details><summary>¿Puedo hacer una consulta antes de agendar?<span aria-hidden="true">+</span></summary><p>Claro. Podés escribirme por <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a> para consultar sobre la modalidad y resolver tus dudas antes de dar el primer paso.</p></details>
      </div></section>
    </main>
    <footer className="footer container"><div><a className="footer-name" href="#inicio">Génesis Ojeda</a><p>Un espacio para vos, estés donde estés.</p></div><a href="https://www.instagram.com/geneojed/" target="_blank" rel="noopener noreferrer">Instagram <Arrow /></a><small>© 2026 Génesis Ojeda · Asunción, Paraguay</small></footer>
    <div className="mobile-booking"><a href="#agendar">Agendá tu sesión <Arrow /></a></div>
  </>;
}
