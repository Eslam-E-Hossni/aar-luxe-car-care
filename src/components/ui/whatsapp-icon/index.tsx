import Image from "next/image";
import React from "react";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/966557827776"
      className="whatsapp-button"
      rel="noreferrer"
      target="_blank"
      title="Chat with us on WhatsApp"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        width={60}
        height={60}
        alt="WhatsApp"
      ></Image>
    </a>
  );
};

export default WhatsappIcon;
