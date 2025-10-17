import { MessageCircle } from "lucide-react";
import heroImage from "../../assets/hero-image.jpg";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/56912345678?text=Hola%20Telo,%20necesito%20ayuda%20con...", "_blank");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Tu hogar perfecto está a un{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(210_95%_50%)] bg-clip-text text-transparent">
                click
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Conectamos tus necesidades del hogar con profesionales verificados — rápido, simple y 100% digital.
            </p>
            <button
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[0_8px_32px_-6px_hsl(213_100%_41%_/_0.3)] transition-[var(--transition-smooth)] text-base sm:text-lg px-8 sm:px-12 h-14 rounded-full font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5" />
              Contáctanos por WhatsApp
            </button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--gradient-hero)] opacity-20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Pareja joven revisando teléfono con profesional trabajando en casa moderna chilena"
              className="relative rounded-3xl shadow-[var(--shadow-soft)] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
