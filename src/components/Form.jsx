import "../styles/form.css";

const Form = () => {
  const handleSendMail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value.trim();
    const email = e.target.reply_to.value.trim();
    const phone = e.target.phone.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    const mailBody = `Hola NG Dynamic,
Mi nombre es ${name} y me gustaría contactarlos.

📞 Teléfono: ${phone || "No proporcionado"}
✉️ Email: ${email}

Asunto: ${subject}

Mensaje:
${message}

Gracias por su atención. Espero su respuesta.`;

    const mailtoLink = `mailto:gerenciageneral@ngdynamic.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSendMail} className="contactForm">
      <span> Nombre</span>
      <input type="text" name="user_name" required />
      <span> Correo</span>
      <input type="email" name="reply_to" required />
      <span> Número</span>
      <input type="number" name="phone" />
      <span> Asunto</span>
      <input type="text" name="subject" required />
      <span> Mensaje</span>
      <textarea name="message" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
