const title = "Artesanías Franco López";
const email = "hfranco1361@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en tus productos de ${title} y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "+573215143863";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Artesanías Franco López nos dedicamos a crear piezas únicas que reflejan la esencia de la artesanía tradicional. Ofrecemos una variedad de productos en madera como balcones paisas, percheros, repisas, casas para huevos, entre otros, todos elaborados con esmero y pasión por el detalle.",
        description2: "Nuestro objetivo es llevar el encanto y la calidad de nuestras artesanías a cada rincón del mundo. Utilizamos maderas de segunda mano o recicladas para frenar la deforestación y cuidar el medio ambiente.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Desde nuestras manos para el mundo",
            p2: "El encanto y la calidad en cada pieza artesanal",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/JySq3oWvwRkY9wcs/?mibextid=qi2Omg",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
