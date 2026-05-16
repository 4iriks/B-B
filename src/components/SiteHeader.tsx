"use client";

import { ArrowRight, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { site } from "@/lib/content";

const megaGroups = [
  {
    id: "production",
    label: "Продакшн",
    summary: "Полный цикл технической подготовки",
    links: [
      { href: "/services", label: "Оборудование", text: "Свет, звук, сцена, управление и спецэффекты" },
      { href: "/team", label: "Команда", text: "Специалисты под конкретную площадку и формат" },
      { href: "/contacts", label: "Техническая карта", text: "Соберем первичную схему по вводным" }
    ]
  },
  {
    id: "work",
    label: "Работы",
    summary: "Кейсы, площадки и масштабы",
    links: [
      { href: "/projects", label: "Проекты", text: "Арены, театры, форумы и городские площадки" },
      { href: "/services", label: "Форматы", text: "Концерты, конференции, корпоративы, фестивали" },
      { href: "/contacts", label: "Расчет", text: "Быстрый старт обсуждения бюджета и задач" }
    ]
  },
  {
    id: "company",
    label: "Компания",
    summary: "Как мы работаем и кто отвечает за результат",
    links: [
      { href: "/", label: "О beat&beam", text: "Собственное оборудование и работа по России" },
      { href: "/team", label: "Специалисты", text: "Саунд, лайт, техники, риггеры и координаторы" },
      { href: "/contacts", label: "Контакты", text: "Форма заявки и Telegram" }
    ]
  }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <span className="brand__mark">b&b</span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.descriptor}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {megaGroups.map((group) => (
            <div
              className="nav-group"
              key={group.id}
              onMouseEnter={() => setActiveMenu(group.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                aria-expanded={activeMenu === group.id}
                className="nav-link nav-link--button"
                onClick={() => setActiveMenu((current) => (current === group.id ? null : group.id))}
                type="button"
              >
                {group.label}
                <ChevronDown aria-hidden="true" size={15} />
              </button>
              <div className={`mega-menu${activeMenu === group.id ? " mega-menu--open" : ""}`}>
                <div className="mega-menu__intro">
                  <span>{group.label}</span>
                  <strong>{group.summary}</strong>
                </div>
                <div className="mega-menu__links">
                  {group.links.map((link) => (
                    <Link
                      aria-current={pathname === link.href ? "page" : undefined}
                      href={link.href}
                      key={`${group.id}-${link.label}`}
                      onClick={() => setActiveMenu(null)}
                    >
                      <span>{link.label}</span>
                      <small>{link.text}</small>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link aria-current={pathname === "/contacts" ? "page" : undefined} className="nav-link" href="/contacts">
            Контакты
          </Link>
        </nav>

        <div className="header-actions">
          <a className="header-login" href={site.contact.telegramHref} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={18} />
            <span>Telegram</span>
          </a>
          <Link className="header-cta" href="/contacts">
            Заявка
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>

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
          {megaGroups.map((group) => (
            <div className="mobile-panel__group" key={group.id}>
              <strong>{group.label}</strong>
              {group.links.map((link) => (
                <Link
                  aria-current={pathname === link.href ? "page" : undefined}
                  href={link.href}
                  key={`${group.id}-${link.label}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/contacts" onClick={() => setIsOpen(false)}>
            Оставить заявку
          </Link>
          <a href={site.contact.telegramHref} rel="noreferrer" target="_blank">
            Telegram
          </a>
        </div>
      </div>
    </header>
  );
}
