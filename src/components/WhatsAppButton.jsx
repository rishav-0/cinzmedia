import React from "react";
import "../styles/WhatsAppButton.css";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/918474044296?text=Hi%20I%20am%20interested%20in%20your%20services";

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
    >
     
      <BsWhatsapp size={40} color="white"/>
    </a>
  );
}
