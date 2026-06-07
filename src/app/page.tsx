import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { EventHero } from "@/components/EventHero";
import { cycleSteps, projects, services, stats } from "@/lib/content";

const formatCards = [
  {
    title: "Свадьбы",
    tag: "Private events",
    text: "Свет для церемонии, чистая речь, музыкальная зона, сцена и деликатные спецэффекты.",
    image: "/videos/event-wedding-poster.jpg"
  },
  {
    title: "Корпоративы",
    tag: "Brand events",
    text: "Премии, презентации, вечерние программы, брендированный свет и техническая режиссура.",
    image: "/videos/event-lasers-poster.jpg"
  },
  {
    title: "Выступления",
    tag: "Live shows",
    text: "Концерты, артистические райдеры, мониторинг, световые сцены и быстрые смены.",
    image: "/videos/event-concert-poster.jpg"
  },
  {
    title: "Конференции",
    tag: "Business",
    text: "Звук для спикеров, экраны, трансляции, тайминг, коммутация и дежурная команда.",
    image: "/videos/event-stage-poster.jpg"
  },
  {
    title: "Фестивали",
    tag: "Outdoor",
    text: "Несколько зон, сцены, логистика оборудования, смены команд и работа на потоке.",
    image: "/videos/event-concert-poster.jpg"
  }
];

const productionCards = [
  {
    title: "Свет",
    text: "Световая схема, приборы, пульты, сцены, акценты и программирование под драматургию.",
    imageClass: "replica-tool-card--editing"
  },
  {
    title: "Звук",
    text: "FOH, мониторы, микрофоны, акустика площадки, речь, live-сеты и конференц-формат.",
    imageClass: "replica-tool-card--design"
  },
  {
    title: "Сцена и подвесы",
    text: "Фермы, подиумы, безопасный монтаж, риггинг, коммутация и стабильная конструкция.",
    imageClass: "replica-tool-card--team"
  },
  {
    title: "Команда",
    text: "Саунд, лайт, техники, риггеры, операторы эффектов и координатор на площадке.",
    imageClass: "replica-tool-card--domains"
  }
];

const faqRows = [
  "Какие вводные нужны для расчета",
  "Как выбрать оборудование под площадку",
  "Что входит в смену технической команды",
  "Как подготовить площадку к монтажу"
];

export default function Home() {
  return (
    <div className="replica-page">
      <EventHero />

      <section className="replica-showcase">
        <p>
          Мы закрываем техническую часть события так, чтобы клиент видел результат, а не хаос из подрядчиков,
          кабелей и срочных решений на площадке.
        </p>
        <div className="replica-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="replica-white replica-formats">
        <div className="replica-tools__head">
          <h2>Под каждый формат собираем свою техническую схему</h2>
          <p>
            Одинаковый набор оборудования не работает для свадьбы, арены и деловой конференции. Мы начинаем с
            сценария, площадки, аудитории и ограничений.
          </p>
        </div>

        <div className="replica-format-track" aria-label="Форматы мероприятий">
          {formatCards.map((card) => (
            <Link
              className="replica-format-card"
              href="/services"
              key={card.title}
              style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.78)), url(${card.image})` }}
            >
              <span>{card.tag}</span>
              <strong>{card.title}</strong>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="replica-white replica-tools">
        <div className="replica-tools__head">
          <h2>Все технические слои в одной команде</h2>
          <p>
            Свет, звук, сцена, спецэффекты, монтаж, логистика и дежурство на площадке не живут отдельно. Мы
            собираем их в одну рабочую систему под конкретное событие.
          </p>
        </div>

        <div className="replica-tool-grid">
          {productionCards.map((card) => (
            <Link className={`replica-tool-card ${card.imageClass}`} href="/services" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ArrowRight aria-hidden="true" size={28} />
            </Link>
          ))}
        </div>
      </section>

      <section className="replica-production-map">
        <div className="replica-section-title replica-section-title--center">
          <h2>Работаем полным циклом</h2>
          <p>От первых вводных до демонтажа после мероприятия.</p>
        </div>
        <div className="replica-map-grid">
          {cycleSteps.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="replica-white replica-services">
        <div className="replica-services__head">
          <h2>Можно взять весь продакшн или отдельное направление</h2>
          <p>Если у вас уже есть часть команды или оборудования, подключимся точечно и без лишнего шума.</p>
        </div>
        <div className="replica-service-rows">
          {services.map((service) => (
            <Link href="/services" key={service.title}>
              <span>{service.title}</span>
              <p>{service.text}</p>
              <ArrowRight aria-hidden="true" size={22} />
            </Link>
          ))}
        </div>
      </section>

      <section className="replica-dark-list">
        {faqRows.map((row) => (
          <button key={row} type="button">
            <span>{row}</span>
            <strong>+</strong>
          </button>
        ))}
      </section>

      <section className="replica-final">
        <div className="replica-final__sphere" />
        <div className="replica-final__content">
          <h2>Начните с брифа, а не со списка оборудования</h2>
          <p>Расскажите, что должно произойти на площадке. Мы переведем это в техническую карту и бюджет.</p>
          <Link className="replica-button replica-button--light" href="/contacts">
            Начать
          </Link>
        </div>
      </section>

      <section className="replica-projects">
        <div>
          <h2>Площадки и проекты</h2>
          <p>Работаем с аренами, театральными сценами, деловыми площадками и городскими пространствами.</p>
        </div>
        <div className="replica-projects__grid">
          {projects.map((project) => (
            <Link href="/projects" key={project.title}>
              <span>{project.type}</span>
              <strong>{project.title}</strong>
              <p>{project.text}</p>
              <Check aria-hidden="true" size={18} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
