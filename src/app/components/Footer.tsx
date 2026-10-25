import { Mail, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl mb-4">
              Stanislava Krivošija
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UX design shaped by a career in healthcare.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:stanislavakrivosija@gmail.com"
              className="text-sm text-foreground hover:text-[#00B4D8] transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              stanislavakrivosija@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/stanislavakrivosija/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground hover:text-[#00B4D8] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/stash.krivosija"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-foreground hover:text-[#00B4D8] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Stanislava Krivošija. All rights reserved.
          </p>
          {/* <p className="text-xs text-muted-foreground">
            Designed & developed with attention to detail
          </p> */}
        </div>
      </div>
    </footer>
  );
}