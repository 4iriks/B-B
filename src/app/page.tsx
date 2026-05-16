import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { projects, services, stats } from "@/lib/content";

const serviceTabs = ["Свет", "Звук", "Сцена", "Спецэффекты", "Команда", "Логистика", "Проекты"];

const toolCards = [
  {
    title: "Световая схема",
    text: "Сцены, приборы, акценты и управление светом под драматургию события.",
    imageClass: "replica-tool-card--editing"
  },
  {
    title: "Production intelligence",
    text: "Техническая карта, риски, тайминг, коммутация и состав команды в одном плане.",
    imageClass: "replica-tool-card--design"
  },
  {
    title: "Команда на площадке",
    text: "Саунд, лайт, техники, риггеры и координатор проекта работают как единая группа.",
    imageClass: "replica-tool-card--team"
  },
  {
    title: "Площадки и логистика",
    text: "Доставка, монтаж, подвесы, настройка, поддержка и демонтаж после мероприятия.",
    imageClass: "replica-tool-card--domains"
  }
];

const faqRows = [
  "Как собрать техническую карту",
  "Какие задачи можно закрыть отдельно",
  "Как проходит монтаж и сопровождение",
  "Как быстро оценить бюджет"
];

export default function Home() {
  return (
    <div className="replica-page">
      <section className="replica-hero">
        <div className="replica-hero__bg" />
        <div className="replica-hero__shade" />
        <div className="replica-hero__content">
          <h1>Технический продакшн делает это возможным</h1>
          <Link className="replica-button replica-button--light" href="/contacts">
            Начало работы
          </Link>
          <p>Начните с брифа. Мы соберем свет, звук, сцену, команду и техническую карту.</p>
        </div>

        <div className="replica-hero__previews" aria-label="Превью проектов">
          <Link className="replica-preview replica-preview--left" href="/projects">
            <span>ЦСКА Арена</span>
            <strong>ARENA SHOW</strong>
          </Link>
          <Link className="replica-preview replica-preview--center" href="/services">
            <span>beat&beam</span>
            <strong>LIGHT / SOUND / STAGE</strong>
          </Link>
          <Link className="replica-preview replica-preview--right" href="/team">
            <span>Команда</span>
            <strong>CREW BOARD</strong>
          </Link>
        </div>
      </section>

      <section className="replica-showcase">
        <div className="replica-showcase__cards" aria-hidden="true">
          <div className="replica-site-card replica-site-card--side replica-site-card--one" />
          <div className="replica-site-card replica-site-card--main" />
          <div className="replica-site-card replica-site-card--side replica-site-card--two" />
        </div>
        <p>Присоединяйтесь к проектам, где техническая часть должна работать без права на сбой.</p>
        <div className="replica-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="replica-white replica-grow">
        <div className="replica-section-title replica-section-title--center">
          <h2>Развивайте событие как полноценный продакшн</h2>
          <p>Вам нужен технический контур, который может все.</p>
        </div>

        <div className="replica-tabs" aria-label="Направления">
          {serviceTabs.map((tab, index) => (
            <Link className={index === 3 ? "replica-tabs__item replica-tabs__item--active" : "replica-tabs__item"} href="/services" key={tab}>
              {tab}
            </Link>
          ))}
        </div>

        <div className="replica-feature-slider">
          <Link className="replica-feature-side replica-feature-side--left" href="/services">
            <span>Световые сцены</span>
          </Link>
          <Link className="replica-feature-main" href="/services">
            <div>
              <h3>Спроектируйте шоу под площадку</h3>
              <p>Свет, звук, сцена и спецэффекты собираются в единую карту мероприятия.</p>
            </div>
            <span className="replica-floating-note">layout / cues / crew</span>
          </Link>
          <Link className="replica-feature-side replica-feature-side--right" href="/projects">
            <span>Кейсы площадок</span>
          </Link>
        </div>
      </section>

      <section className="replica-white replica-tools">
        <div className="replica-tools__head">
          <h2>Все, что вам нужно, на одной платформе</h2>
          <p>
            Используйте оборудование, специалистов и технические рекомендации, необходимые для управления
            мероприятием, в одном месте.
          </p>
        </div>

        <div className="replica-tool-grid">
          {toolCards.map((card) => (
            <Link className={`replica-tool-card ${card.imageClass}`} href="/services" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ArrowRight aria-hidden="true" size={28} />
            </Link>
          ))}
        </div>
      </section>

      <section className="replica-ai">
        <div className="replica-section-title replica-section-title--center">
          <div className="replica-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h2>Начать работу с технической командой еще никогда не было так просто</h2>
          <p>Опыт не требуется. Нужны только вводные по площадке и формату.</p>
        </div>
        <div className="replica-ai__cards">
          <Link className="replica-ai-card" href="/contacts">
            <strong>Технический бриф</strong>
            <p>Ответьте на несколько вопросов, и мы соберем стартовую рамку проекта.</p>
          </Link>
          <Link className="replica-ai-card replica-ai-card--templates" href="/projects">
            <strong>Профессиональные схемы</strong>
            <p>Адаптируем решения под арену, театр, форум, фестиваль или частное событие.</p>
          </Link>
        </div>
      </section>

      <section className="replica-white replica-services">
        <div className="replica-services__head">
          <h2>Сервис полного цикла</h2>
          <p>Отдельные направления можно включать по мере необходимости.</p>
        </div>
        <div className="replica-service-rows">
          {services.slice(0, 5).map((service) => (
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
          <h2>Начните подготовку мероприятия на нашем сайте сегодня</h2>
          <p>Опишите задачу. Мы вернемся с вопросами по площадке, оборудованию, срокам и бюджету.</p>
          <Link className="replica-button replica-button--light" href="/contacts">
            Начать
          </Link>
        </div>
      </section>

      <section className="replica-projects">
        <div>
          <h2>Часть наших проектов</h2>
          <p>Площадки, где техническая часть должна быть незаметной для зрителя и точной для команды.</p>
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
