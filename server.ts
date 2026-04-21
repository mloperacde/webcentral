import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    const { name, email, company, phone, message, commercialConsent } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Formulario Web - Central de Envasados" <${process.env.SMTP_USER}>`,
        to: "contacto@centralenvasados.com",
        replyTo: email,
        subject: `[Web] Nuevo mensaje de contacto de ${name}`,
        text: `Nombre: ${name}
Email: ${email}
Empresa: ${company || "No especificada"}
Teléfono: ${phone || "No proporcionado"}
Comunicaciones comerciales: ${commercialConsent ? "Sí (ha dado su consentimiento)" : "No"}

Mensaje:
${message}`,
        html: `<h2>Nuevo mensaje de contacto - Web</h2>
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Empresa:</strong> ${company || "No especificada"}</p>
<p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
<p><strong>Comunicaciones comerciales:</strong> ${commercialConsent ? "Sí (ha dado su consentimiento)" : "No"}</p>
<br/>
<p><strong>Mensaje:</strong></p>
<p>${message.replace(/\n/g, "<br/>")}</p>`,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email. Please check server logs." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
