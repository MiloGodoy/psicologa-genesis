// Enlaces temporales autorizados. Reemplazar cuando Génesis tenga sus cuentas.
const calendly = "https://calendly.com/";
const whatsappNumber = "595983757264";
const message = "Hola, quisiera consultar sobre las sesiones online con Génesis Ojeda.";

export const contact = {
  calendly,
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
};
