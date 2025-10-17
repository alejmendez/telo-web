import { MessageCircle, Shield, CheckCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tan fácil usar Telo 👇
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En tres pasos simples, tu hogar vuelve a funcionar perfectamente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="p-8 text-center bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Publica tu necesidad</h3>
            <p className="text-muted-foreground">
              Cuéntanos qué necesitas arreglar o mejorar en tu hogar. Es rápido y sin complicaciones.
            </p>
          </div>

          <div className="p-8 text-center bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Recibe profesionales verificados</h3>
            <p className="text-muted-foreground">
              Te conectamos con expertos confiables que están listos para ayudarte.
            </p>
          </div>

          <div className="p-8 text-center bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Elige y coordina por WhatsApp</h3>
            <p className="text-muted-foreground">
              Revisa opciones, compara y coordina todo directamente desde tu celular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
