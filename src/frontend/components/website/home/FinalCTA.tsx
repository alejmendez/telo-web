import {
  MessageCircle
} from "lucide-react";

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/56912345678?text=Hola%20Telo,%20necesito%20ayuda%20con...", "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            ¿Listo para resolver tu hogar hoy?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            No dejes que pequeños problemas se conviertan en grandes dolores de cabeza.
            Con Telo, encontrar el profesional perfecto es tan fácil como enviar un mensaje.
          </p>
          <button
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[0_8px_32px_-6px_hsl(213_100%_41%_/_0.3)] transition-[var(--transition-smooth)] text-base sm:text-lg px-8 sm:px-12 h-14 rounded-full font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5" />
            Contáctanos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
