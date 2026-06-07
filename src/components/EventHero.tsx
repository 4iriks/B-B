"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const eventStories = [
  {
    id: "stage",
    label: "Сцены и шоу",
    title: "Технический продакшн для событий любого масштаба",
    text: "Свет, звук, сцена, спецэффекты и команда собираются в единую техническую карту под площадку.",
    meta: "Арены / клубы / сцены",
    video: "/videos/hero-sctena.mp4",
    poster: "/videos/event-stage-poster.jpg",
    duration: "00:10"
  },
  {
    id: "wedding",
    label: "Свадьбы",
    title: "Частные события с чистым звуком и аккуратным светом",
    text: "Собираем красивую картинку, речь без провалов, танцпол, welcome-зону и безопасный монтаж.",
    meta: "Загородные площадки / шатры / банкетные залы",
    video: "/videos/event-wedding.mp4",
    poster: "/videos/event-wedding-poster.jpg",
    duration: "00:12"
  },
  {
    id: "corporate",
    label: "Корпоративы",
    title: "Корпоративные события, премии и презентации",
    text: "Сцена, брендированный свет, звук для выступлений, спецэффекты и техническая режиссура тайминга.",
    meta: "Премии / презентации / деловые вечера",
    video: "/videos/event-lasers.mp4",
    poster: "/videos/event-lasers-poster.jpg",
    duration: "00:10"
  },
  {
    id: "concert",
    label: "Выступления",
    title: "Живые выступления, концерты и фестивальные форматы",
    text: "Работаем с райдерами, акустикой площадки, мониторингом, световыми сценами и быстрым переключением артистов.",
    meta: "Концерты / фестивали / open-air",
    video: "/videos/event-concert.mp4",
    poster: "/videos/event-concert-poster.jpg",
    duration: "00:12"
  }
];

export function EventHero() {
  const [activeId, setActiveId] = useState(eventStories[0].id);
  const active = useMemo(
    () => eventStories.find((story) => story.id === activeId) ?? eventStories[0],
    [activeId]
  );

  return (
    <section className="replica-hero">
      <video
        aria-hidden="true"
        autoPlay
        className="replica-hero__video"
        key={active.video}
        loop
        muted
        playsInline
        poster={active.poster}
      >
        <source src={active.video} type="video/mp4" />
      </video>
      <div className="replica-hero__shade" />

      <div className="replica-hero__content">
        <span className="replica-hero__eyebrow">beat&beam / technical production</span>
        <h1>{active.title}</h1>
        <p>{active.text}</p>
        <div className="replica-hero__actions">
          <Link className="replica-button replica-button--light" href="/contacts">
            Начать проект
          </Link>
          <Link className="replica-hero__link" href="/services">
            Смотреть услуги
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>

      <div className="replica-hero__meta">
        <span>{active.meta}</span>
        <strong>Полный цикл: карта, монтаж, настройка, сопровождение</strong>
      </div>

      <div className="replica-hero__previews" aria-label="Форматы мероприятий">
        {eventStories.map((story) => (
          <button
            aria-pressed={story.id === active.id}
            className={`replica-preview${story.id === active.id ? " replica-preview--active" : ""}`}
            key={story.id}
            onClick={() => setActiveId(story.id)}
            onFocus={() => setActiveId(story.id)}
            onMouseEnter={() => setActiveId(story.id)}
            style={{ backgroundImage: `url(${story.poster})` }}
            type="button"
          >
            <span>{story.label}</span>
            <strong>{story.meta}</strong>
            <small>{story.duration}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
