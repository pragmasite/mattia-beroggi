import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangPath } = useLanguage();

  const links = [
    { href: "#uber-uns", label: t.nav.about },
    { href: "#leistungen", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#offnungszeiten", label: t.nav.hours },
    { href: "#kontakt", label: t.nav.contact },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">
              Mattia Beroggi
            </h3>
            <p className="text-sm text-background/70 mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-background/60">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">
              {t.nav.contact}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+41794718693"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  +41 79 471 86 93
                </a>
              </li>
              <li>
                <a
                  href="mailto:mattiaberoggi@bluewin.ch"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  mattiaberoggi@bluewin.ch
                </a>
              </li>
              <li>
                <Link
                  to={otherLangPath}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  English / Deutsch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} Mattia Beroggi.{" "}
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
