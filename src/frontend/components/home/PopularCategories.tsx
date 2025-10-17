import {
  Hammer,
  Zap,
  Paintbrush,
  Leaf,
  TruckIcon,
  Sun
} from "lucide-react";

export function PopularCategories() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Servicios que encuentras en Telo ⚙️
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Disponible en toda la zona oriente de Santiago — Vitacura, Las Condes, La Reina y Lo Barnechea
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg group cursor-pointer">
            <div className="w-14 h-14 mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
              <Hammer className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Construcción & Remodelación</h3>
            <p className="text-sm text-muted-foreground">Ampliaciones, reparaciones estructurales y proyectos de obra</p>
          </div>

          <div className="p-6 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg group cursor-pointer">
            <div className="w-14 h-14 mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
              <Zap className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Electricidad & Gasfitería</h3>
            <p className="text-sm text-muted-foreground">Instalaciones, reparaciones y mantenciones certificadas</p>
          </div>

          <div className="p-6 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg group cursor-pointer">
            <div className="w-14 h-14 mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
              <Paintbrush className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pintura & Decoración</h3>
            <p className="text-sm text-muted-foreground">Dale nueva vida a tus espacios con expertos en diseño</p>
          </div>

          <div className="p-6 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg group cursor-pointer">
            <div className="w-14 h-14 mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
              <Leaf className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Jardinería & Limpieza</h3>
            <p className="text-sm text-muted-foreground">Mantén tu hogar impecable por dentro y por fuera</p>
          </div>

          <div className="p-6 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg group cursor-pointer">
            <div className="w-14 h-14 mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
              <TruckIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mudanzas & Transporte</h3>
            <p className="text-sm text-muted-foreground">Servicio confiable para mover tus cosas con seguridad</p>
          </div>

          <div className="p-6 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border rounded-lg group cursor-pointer">
            <div className="w-14 h-14 mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
              <Sun className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Energía Renovable & Seguridad</h3>
            <p className="text-sm text-muted-foreground">Paneles solares, alarmas y automatización del hogar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
