import React, { useEffect, useState } from "react";
import "./App.css";
import pabloImage from "./assets/pablo.jpg";

function App() {
  const [progressValues, setProgressValues] = useState({
    javascript: 0,
    html: 0,
    css: 0,
  });
  const [openSection, setOpenSection] = useState("all"); // Estado para manejar las secciones abiertas, inicializado a "all" para que todas estén expandidas

  useEffect(() => {
    // Función para cargar las barras de progreso
    const loadProgressBars = () => {
      const progressSteps = {
        javascript: 80,
        html: 90,
        css: 75,
      };

      const interval = setInterval(() => {
        setProgressValues((prevValues) => ({
          javascript: Math.min(prevValues.javascript + 2, progressSteps.javascript),
          html: Math.min(prevValues.html + 2, progressSteps.html),
          css: Math.min(prevValues.css + 2, progressSteps.css),
        }));

        // Detener el intervalo cuando todas las barras estén completamente cargadas
        if (
          progressValues.javascript >= progressSteps.javascript &&
          progressValues.html >= progressSteps.html &&
          progressValues.css >= progressSteps.css
        ) {
          clearInterval(interval);
        }
      }, 100); // Ajusta la velocidad de carga cambiando este valor (en milisegundos)
    };

    // Iniciar la carga de las barras de progreso cuando el componente se monta
    loadProgressBars();
  }, [progressValues]);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section); // Alterna entre abrir y cerrar la sección
  };

  const toggleAllSections = () => {
    if (openSection === "all") {
      setOpenSection(null); // Si están todas abiertas, las cerramos
    } else {
      setOpenSection("all"); // Si están cerradas, las abrimos todas
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <div>
          <h1>Pablo Damián Roldán</h1>
          <h2>Técnico Universitario en desarrollo de software</h2>
        </div>
        <div className="profile-picture">
          <img src={pabloImage} alt="Profile Picture" />
        </div>
        {/* Sección de contacto debajo de la imagen */}
        <div className="contact-info">
          <p><strong>Celular:</strong> 3875668039</p>
          <p><strong>Email:</strong> damianpabloroldan@gmail.com</p>
        </div>
      </div>

      <button onClick={toggleAllSections} className="toggle-all-button">
        {openSection === "all" ? "Contraer todas" : "Expandir todas"}
      </button>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("biografia")}>
          Biografía
        </h3>
        {openSection === "biografia" || openSection === "all" ? (
          <div className="section-content">
            <p>
              Profesional apasionado por la tecnología, con experiencia en el ámbito educativo y un fuerte compromiso con la innovación. Con habilidades en gestión de proyectos, coordinación de equipos, desarrollo e implementación de plataformas educativas, infraestructura, hardware y soporte técnico. Entusiasta de la robótica y el desarrollo web, siempre en busca de nuevos conocimientos para estar a la vanguardia de las tendencias y tecnologías emergentes.
            </p>
          </div>
        ) : null}
      </div>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("experiencia")}>
          Experiencia
        </h3>
        {openSection === "experiencia" || openSection === "all" ? (
          <div className="section-content">
            <div className="experience-item">
              <span className="date">Ministerio de Educación, Cultura, Ciencia y Tecnología - Coordinación de Educación a Distancia (2021-2022)</span>
              <ul>
                <li>Gestión de proyectos educativos a distancia.</li>
                <li>Coordinación de equipos de trabajo.</li>
                <li>Desarrollo e implementación de plataformas educativas.</li>
                <li>Soporte técnico a docentes y alumnos.</li>
              </ul>
            </div>
            <div className="experience-item">
              <span className="date">Colegio Secundario San José (2021-presente)</span>
              <ul>
                <li>Referente Técnico Institucional</li>
                <li>Asistencia al personal y alumnos en relación a las TICs.</li>
                <li>Mantenimiento de equipos informáticos.</li>
                <li>Dictado de la asignatura Informática General.</li>
              </ul>
            </div>
            <div className="experience-item">
              <span className="date">Universidad Nacional de Salta (2021)</span>
              <ul>
                <li>Editor de aulas virtuales en plataforma Moodle</li>
                <li>Cursos: “Estrategias de aprendizaje en escenarios virtuales”.</li>
              </ul>
            </div>
            <div className="experience-item">
              <span className="date">CEDSa (www.cedsa.edu.ar) (Marzo 2015 - Enero 2021)</span>
              <ul>
                <li>Coordinador de Área de Investigación y Desarrollo</li>
                <li>Gestión de inscripción.</li>
                <li>Mantenimiento de plataforma educativa.</li>
                <li>Organización de materiales didácticos.</li>
                <li>Asistencia a docentes y alumnos en cuanto a manejo de software y plataforma educativa.</li>
                <li>Investigación, desarrollo e implementación de nuevas plataformas.</li>
                <li>Diseñador instruccional.</li>
                <li>Mantenimiento de equipos informáticos, compra y actualización.</li>
                <li>Organización de videoconferencias.</li>
                <li>Asignación de tareas al personal del área de sistemas</li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("educacion")}>
          Educación
        </h3>
        {openSection === "educacion" || openSection === "all" ? (
          <div className="section-content">
            <div className="education-item">
              <span className="date">Tecnicatura Universitaria en Desarrollo de Software</span>
              <p>IUPATECO, Salta.</p>
            </div>
            <div className="education-item">
              <span className="date">Técnico Superior en Seguridad e Higiene Laboral (Cursado hasta 3º año)</span>
              <p>Instituto de Educación Superior 6040, Vaqueros, Salta.</p>
            </div>
            <h4>CAPACITACIONES</h4>
            <ul>
              <li>Curso de Introducción a la Robótica Educativa: herramientas y aplicaciones en el aula. Ministerio de Educación, Cultura, Ciencia y Tecnología.</li>
              <li>Curso Universitario de Diseño Gráfico. UPATECO.</li>
              <li>Curso Universitario Introducción al modelado 3d digital. Upateco.</li>
              <li>Curso de introducción a AWS. Udemy.</li>
              <li>Curso Dominando Moodle. Udemy.</li>
              <li>Curso Energía solar y eólica de baja potencia. UTN.BA (Univ. Tecnológica Nacional BA).</li>
              <li>Curso Tester QA Manual en EducacionIT.</li>
            </ul>
          </div>
        ) : null}
      </div>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("lenguajes")}>
          Lenguajes
        </h3>
        {openSection === "lenguajes" || openSection === "all" ? (
          <div className="section-content">
            <div className="languages-progress">
              <label>JavaScript</label>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressValues.javascript}%` }}></div>
              </div>
            </div>
            <div className="languages-progress">
              <label>HTML</label>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressValues.html}%` }}></div>
              </div>
            </div>
            <div className="languages-progress">
              <label>CSS</label>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressValues.css}%` }}></div>
              </div>
            </div>
            <div className="languages-progress">
              <label>Node.js</label>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressValues.nodejs}%` }}></div>
              </div>
            </div>
            <div className="languages-progress">
              <label>Python</label>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressValues.python}%` }}></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("habilidades")}>
          Habilidades
        </h3>
        {openSection === "habilidades" || openSection === "all" ? (
          <div className="section-content">
            <ul>
              <li>Impresión 3D, técnicas de pos procesado y pintura.</li>
              <li>Ilustración digital y diseño gráfico.</li>
              <li>Gestión de proyectos educativos.</li>
              <li>Conocimiento en Diseño Instruccional.</li>
              <li>Montaje y mantenimiento de equipos informáticos.</li>
            </ul>
          </div>
        ) : null}
      </div>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("idiomas")}>
          Idiomas
        </h3>
        {openSection === "idiomas" || openSection === "all" ? (
          <div className="section-content">
            <ul>
              <li>Español: nativo.</li>
              <li>Inglés: intermedio.</li>
            </ul>
          </div>
        ) : null}
      </div>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("referencias")}>
          Referencias
        </h3>
        {openSection === "referencias" || openSection === "all" ? (
          <div className="section-content">
            <p>Disponibles a solicitud.</p>
          </div>
        ) : null}
      </div>

      <div className="section">
        <h3 className="section-title" onClick={() => handleToggle("contacto")}>
          Contacto
        </h3>
        {openSection === "contacto" || openSection === "all" ? (
          <div className="section-content">
            <p><strong>Celular:</strong> 3875668039</p>
            <p><strong>Email:</strong> damianpabloroldan@gmail.com</p>
          </div>
        ) : null}
      </div>

      {/* Botón de WhatsApp */}
      <a href="https://wa.me/543875668039" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
