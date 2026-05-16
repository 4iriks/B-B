import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { navItems, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <Link className="brand brand--footer" href="/">
          <span className="brand__mark">b&b</span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.descriptor}</small>
          </span>
        </Link>
        <p>{site.description}</p>
      </div>

      <nav aria-label="Навигация в подвале" className="site-footer__nav">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <address className="site-footer__contacts">
        <a href={site.contact.phoneHref}>
          <Phone aria-hidden="true" size={17} />
          {site.contact.phone}
        </a>
        <a href={site.contact.emailHref}>
          <Mail aria-hidden="true" size={17} />
          {site.contact.email}
        </a>
        <a href={site.contact.telegramHref} rel="noreferrer" target="_blank">
          <MessageCircle aria-hidden="true" size={17} />
          {site.contact.telegramLabel}
        </a>
        <span>
          <MapPin aria-hidden="true" size={17} />
          {site.geography}
        </span>
      </address>
    </footer>
  );
}
