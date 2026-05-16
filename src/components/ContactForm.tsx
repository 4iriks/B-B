"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  company: "",
  contact: "",
  eventType: "",
  date: "",
  guests: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "success") {
      setStatus("idle");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Имя
          <input
            autoComplete="name"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Как к вам обращаться"
            required
            value={form.name}
          />
        </label>
        <label>
          Компания
          <input
            autoComplete="organization"
            name="company"
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Название или частное событие"
            value={form.company}
          />
        </label>
      </div>

      <div className="field-grid">
        <label>
          Контакт
          <input
            autoComplete="tel"
            name="contact"
            onChange={(event) => updateField("contact", event.target.value)}
            placeholder="Телефон, почта или Telegram"
            required
            value={form.contact}
          />
        </label>
        <label>
          Формат
          <select
            name="eventType"
            onChange={(event) => updateField("eventType", event.target.value)}
            required
            value={form.eventType}
          >
            <option value="">Выберите формат</option>
            <option>Концерт</option>
            <option>Корпоратив</option>
            <option>Конференция</option>
            <option>Фестиваль</option>
            <option>Другое</option>
          </select>
        </label>
      </div>

      <div className="field-grid">
        <label>
          Дата
          <input
            name="date"
            onChange={(event) => updateField("date", event.target.value)}
            type="date"
            value={form.date}
          />
        </label>
        <label>
          Гостей
          <input
            inputMode="numeric"
            name="guests"
            onChange={(event) => updateField("guests", event.target.value)}
            placeholder="Например, 1200"
            value={form.guests}
          />
        </label>
      </div>

      <label>
        Задача
        <textarea
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Площадка, оборудование, сроки, что уже известно по мероприятию"
          required
          rows={6}
          value={form.message}
        />
      </label>

      <button className="button button--primary" type="submit">
        <span>Отправить заявку</span>
        <Send aria-hidden="true" size={18} />
      </button>

      {status === "success" ? (
        <p className="form-success" role="status">
          <CheckCircle2 aria-hidden="true" size={18} />
          Заявка сохранена как локальная заглушка. Реальную отправку подключим следующим этапом.
        </p>
      ) : null}
    </form>
  );
}
