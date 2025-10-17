import teloLogo from "../assets/telo-logo.png";

export function FooterPage() {
  return (
    <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <img
                src={teloLogo}
                alt="Telo Logo"
                className="h-12 w-auto mb-2 mx-auto md:mx-0"
              />
              <p className="text-sm text-muted-foreground">
                Tu socio para un hogar que funciona perfectamente
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="mailto:hola@telo.cl"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hola@telo.cl
              </a>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/telo.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/telo.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://linkedin.com/company/telo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Telo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  );
}
