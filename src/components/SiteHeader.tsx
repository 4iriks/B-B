"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems, site } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
        <span className="brand__mark">b&b</span>
        <span>
          <strong>{site.name}</strong>
          <small>{site.descriptor}</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            className="nav-link"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="header-telegram" href={site.contact.telegramHref} rel="noreferrer" target="_blank">
        <MessageCircle aria-hidden="true" size={18} />
        <span>Telegram</span>
      </a>

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className="menu-button"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      <div className={`mobile-panel${isOpen ? " mobile-panel--open" : ""}`}>
        {navItems.map((item) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            href={item.href}
            key={item.href}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a href={site.contact.telegramHref} rel="noreferrer" target="_blank">
          Telegram
        </a>
      </div>
    </header>
  );
}
