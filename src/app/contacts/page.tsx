import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Форма заявки и быстрый контакт в Telegram для обсуждения технического продакшна мероприятия."
};

export default function ContactsPage() {
  return (
    <>
      <section className="page-hero page-hero--contacts">
        <div>
          <p className="eyebrow">Контакты</p>
          <h1>Расскажите о мероприятии</h1>
          <p>
            Форма пока работает как локальная заглушка. Telegram, телефон и почта вынесены в контентный файл и
            легко заменяются на реальные.
          </p>
        </div>
        <div className="contact-panel" id="telegram-placeholder">
          <a href={site.contact.phoneHref}>
            <Phone aria-hidden="true" size={18} />
            {site.contact.phone}
          </a>
          <a href={site.contact.emailHref}>
            <Mail aria-hidden="true" size={18} />
            {site.contact.email}
          </a>
          <a href={site.contact.telegramHref} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={18} />
            {site.contact.telegramLabel}
          </a>
          <span>
            <MapPin aria-hidden="true" size={18} />
            {site.geography}
          </span>
        </div>
      </section>

      <section className="contact-layout">
        <div>
          <SectionHeading
            eyebrow="Заявка"
            text="Достаточно описать формат, дату, площадку и примерный масштаб. Детализацию можно собрать после первого контакта."
            title="Подготовим первичную техническую рамку"
          />
          <div className="contact-actions">
            <ButtonLink
              external
              href={site.contact.telegramHref}
              icon={<MessageCircle aria-hidden="true" size={18} />}
              variant="secondary"
            >
              Написать в Telegram
            </ButtonLink>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
