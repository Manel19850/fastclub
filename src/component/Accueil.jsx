import React from 'react';
import { useForm } from '@formspree/react';
import './Accueil.css';

const Accueil = () => {
  const [state, handleSubmit] = useForm("xpzvlbgj"); 
  const lienDePaiement = "https://www.linkedin.com/in/manel-jouini/"; 
  
  if (state.succeeded) {
    window.location.href = lienDePaiement;
  }

  return (
    <div className="accueil">
      <h1 className="title">FAST CLUB 2.0</h1>
      <div className="centered-content">
        <h2>Prêt pour l'aventure Suisse?</h2>
        <h3>N'attends plus!</h3>
        <p>Abonne toi!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            required
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse mail"
            required
          />
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      </div>
      <div className="logo-container">
        <img src='LOGO.png' alt="Fast Club Logo" className="logo" />
      </div>
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>
    </div>
  );
};

export default Accueil;
