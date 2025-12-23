import React, { useState } from 'react';
import './App.css';

// --- DONNÉES DU PORTFOLIO ---
const profile = {
  nom: "Tchapda Bello Nelson",
  email: "tchapdabello@et.esiea.fr",
  role: "Étudiant Ingénieur @ ESIEA",
  photo: "https://media.licdn.com/dms/image/v2/D4D03AQEWX4xNlpt0Dw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710517405771?e=2147483647&v=beta&t=JiDW-C_iGyFCVkliqXTpKjE1of-sBJ4QE1jVjBvIWvg",
  bio: `Étudiant ingénieur à l’ESIEA, je suis actuellement en cycle ingénieur, avec un intérêt marqué pour le développement logiciel, l’intelligence artificielle et les systèmes informatiques. Issu d’un baccalauréat scientifique, j’ai acquis une base solide en raisonnement logique, en mathématiques et en sciences.

Au cours de ma formation, j’ai travaillé sur des projets variés couvrant la vision par ordinateur, le développement applicatif, les réseaux informatiques et la POO. Ces expériences m’ont permis de développer une méthode de travail rigoureuse.

J’ai également eu l’opportunité d’effectuer un séjour académique en Australie, renforçant mon autonomie et mon adaptabilité. À travers ce portfolio, je présente mes projets les plus significatifs.`
};

const projets = [
  {
    id: "handtracking",
    titre: "Hand Tracking – AI",
    tags: ["Python", "OpenCV", "MediaPipe"],
    img: "https://techcrunch.com/wp-content/uploads/2019/08/handtracking_shot.png",
    descCourte: "Détection temps réel des mouvements de la main via webcam. Prix de l'Innovation ESIEA.",
    descLongue: `Ce projet vise à concevoir un système de détection et de suivi de la main en temps réel à partir d’une webcam, dans le but de créer des interfaces homme-machine sans contact.
    
    Réalisations clés :
    • Souris virtuelle : Permettant de déplacer le curseur et d’effectuer des clics par gestes.
    • Clavier virtuel : Contrôlé par la position des doigts pour saisir du texte.
    • Jeu Fruit Ninja : Interaction en temps réel démontrant la réactivité du système.
    
    Le projet a reçu le Prix de l’Innovation de l’ESIEA, soulignant sa valeur académique et applicative.`,
    technos: ["Python", "OpenCV", "MediaPipe", "Vision par ordinateur"]
  },
  {
    id: "haven",
    titre: "Haven – Sécurité",
    tags: ["TS", "React", "Mobile"],
    img: "https://www.sport-nature.net/medias/images/application-VTT.jpg",
    descCourte: "Application d’assistance et de sécurité pour la micro-mobilité (Projet CAP).",
    descLongue: `Haven est un projet applicatif mené dans le cadre du CAP Project à l’ESIEA. L’objectif est de concevoir une solution numérique dédiée à la sécurité des usagers de la micro-mobilité.
    
    Fonctionnalités :
    • Accompagnement de l'utilisateur lors des trajets.
    • Assistance intelligente en cas de risques.
    • Centralisation des informations liées à l'environnement.
    
    Ce travail d'équipe a porté sur la conception fonctionnelle, l'architecture logicielle et le développement technique.`,
    technos: ["TypeScript", "React / React Native", "Cartographie", "Gestion de projet"]
  },
  {
    id: "reseaux",
    titre: "Architecture Réseaux",
    tags: ["Cisco", "IPv6", "VLSM"],
    img: "https://www.companeo.com/ibb/fr_FR/guide/2017/07/installation-reseau-informatique.jpg",
    descCourte: "Conception et simulation d’architectures réseau complexes sous Packet Tracer.",
    descLongue: `Ce projet a pour objectif de concevoir, configurer et analyser des architectures réseau réalistes.
    
    Travaux réalisés :
    • Mise en place d’adressage IPv4 et IPv6 avec VLSM.
    • Configuration de NAT pour l'accès Internet.
    • Routage dynamique entre sous-réseaux.
    • Analyse de trames et résolution de problèmes de connectivité.
    
    Le projet démontre une maîtrise des fondamentaux réseaux (TCP/IP, Routage, Sécurité).`,
    technos: ["Cisco Packet Tracer", "IPv4/IPv6", "NAT", "Routage"]
  },
  {
    id: "zoo",
    titre: "Virtual Zoo – Java",
    tags: ["Java", "POO", "UML"],
    img: "https://cdn-icons-png.flaticon.com/512/1998/1998610.png", // J'ai mis une icône propre car ton lien Google semblait cassé
    descCourte: "Simulation de gestion de zoo utilisant les principes avancés de la POO.",
    descLongue: `Virtual Zoo est une application Java simulant la gestion complète d'un parc animalier.
    
    Concepts POO appliqués :
    • Encapsulation des données.
    • Héritage pour les familles d'animaux.
    • Polymorphisme pour les comportements spécifiques.
    
    Le projet met l'accent sur la lisibilité du code, la maintenabilité et l'architecture logicielle (SOLID).`,
    technos: ["Java", "Programmation Orientée Objet", "UML"]
  }
];

function App() {
  const [selectedProjet, setSelectedProjet] = useState<any>(null);

  return (
    <div className="app-container">
      {/* HEADER / NAVIGATION */}
      <nav className="glass-nav">
        <span className="logo">PORTFOLIO.</span>
        <div className="nav-links">
          <a href="#about">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* SECTION PRÉSENTATION (Profil) */}
      <section id="about" className="hero-section">
        <div className="hero-content">
          <div className="profile-container">
            <img src={profile.photo} alt="Nelson" className="profile-pic" />
          </div>
          <div className="hero-text">
            <h1 className="gradient-text">{profile.nom}</h1>
            <h2 className="subtitle">{profile.role}</h2>
            <p className="bio-text">{profile.bio}</p>
            <div className="badges-list">
              <span className="badge">Data & IA</span>
              <span className="badge">Cybersécurité</span>
              <span className="badge">Software</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="section-padding">
        <h2 className="section-title">Mes Projets Réalisés</h2>
        <div className="grid">
          {projets.map((p) => (
            <div key={p.id} className="card glass-card" onClick={() => setSelectedProjet(p)}>
              <div className="card-image" style={{backgroundImage: `url(${p.img})`}}></div>
              <div className="card-content">
                <div className="tags-row">
                  {p.tags.slice(0,3).map(t => <span key={t} className="tag-small">{t}</span>)}
                </div>
                <h3>{p.titre}</h3>
                <p className="short-desc">{p.descCourte}</p>
                <button className="btn-details">Voir le détail →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL (Détails projet) */}
      {selectedProjet && (
        <div className="modal-overlay" onClick={() => setSelectedProjet(null)}>
          <div className="modal-content glass-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProjet(null)}>×</button>
            <img src={selectedProjet.img} alt={selectedProjet.titre} className="modal-header-img" />
            
            <div className="modal-body">
              <h2 className="modal-title">{selectedProjet.titre}</h2>
              <div className="modal-techs">
                {selectedProjet.technos.map((t: string) => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <div className="modal-text">
                {selectedProjet.descLongue.split('\n').map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="contact" className="footer glass-footer">
        <h3>Me Contacter</h3>
        <p className="email-link">{profile.email}</p>
        <p className="copyright">© 2025 {profile.nom} - ESIEA</p>
      </footer>
    </div>
  );
}

export default App;