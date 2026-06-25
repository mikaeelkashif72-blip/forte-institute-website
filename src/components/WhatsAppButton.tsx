const WHATSAPP_NUMBER = "10000000000";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-lg bg-accent-gold px-5 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-black/15 transition-transform duration-200 hover:scale-105"
    >
      <span className="text-lg">💬</span>
      WhatsApp Us
    </a>
  );
}
