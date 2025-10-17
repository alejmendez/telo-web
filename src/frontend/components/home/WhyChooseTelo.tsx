import {
  Zap,
  Shield,
  Star,
  DollarSign
} from "lucide-react";

export function WhyChooseTelo() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            La forma moderna de arreglar tu hogar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Telo combina confianza con tecnología para una experiencia más fluida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Rápido & Simple</h3>
            <p className="text-muted-foreground">
              Sin llamadas eternas ni esperas. Todo desde tu teléfono.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">Profesionales Verificados</h3>
            <p className="text-muted-foreground">
              Todos nuestros expertos están certificados y evaluados.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent rounded-2xl flex items-center justify-center">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Reseñas Reales</h3>
            <p className="text-muted-foreground">
              Lee las experiencias de otros usuarios antes de elegir.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent rounded-2xl flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">Precios Transparentes</h3>
            <p className="text-muted-foreground">
              Sabe cuánto pagarás desde el inicio, sin sorpresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
