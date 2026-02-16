import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "923252207294"; // Your WhatsApp number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi Ahmad, I viewed your portfolio and would like to discuss a project.`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-64 left-4 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 flex items-center justify-center border border-[#128C7E]"
            title="Chat on WhatsApp"
        >
            <FaWhatsapp size={24} />
        </a>
    );
};

export default WhatsAppButton;
