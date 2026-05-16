import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { StageVisual } from "@/components/StageVisual";
import { cycleSteps, projects, services, site, stats, team } from "@/lib/content";

const faqItems = [
  {
    question: "С чего начинается проект?",
    answer: "С вводных по площадке, дате, формату, количеству гостей и техническим ограничениям."
  },
  {
    question: "Можно ли закрыть только часть задач?",
    answer: "Да. Можем взять полный цикл или отдельные направления: свет, звук, сцену, риггинг, спецэффекты."
  },
  {
    question: "Работаете с крупными аренами?",
    answer: "Да. В костяк заложены сценарии от камерных событий до площадок на 10 000+ зрителей."
  },
  {
    question: "Форма уже отправляет заявки?",
    answer: "Пока это локальная заглушка. Реальную отправку, Telegram-бота или CRM подключим следующим этапом."
  }
];

const productionCards = [
  {
    title: "Свет",
    text: "Сцены, акценты, динамика, управление приборами и световая драматургия."
  },
  {
    title: "Звук",
    text: "Акустика площадки, баланс, мощность, мониторинг и стабильность звучания."
  },
  {
    title: "Сцена",
    text: "Фермы, подвесы, подиумы, монтажные решения и безопасность конструкций."
  },
  {
    title: "Шоу",
    text: "CO2, дым, пиротехника и спецэффекты в синхронизации с программой."
  }
];

export default function Home() {
  return (
    <div className="sq-page">
      <section className="sq-hero">
        <div className="sq-hero__copy">
          <p className="sq-kicker">beat&beam / технический продакшн полного цикла</p>
          <h1>Событие становится реальным, когда техника работает точно</h1>
          <p>
            Свет, звук, сцена, спецэффекты и команда на площадке. Собираем техническую систему под
            формат, масштаб и риск мероприятия.
          </p>
          <div className="sq-hero__actions">
            <ButtonLink href="/contacts" icon={<ArrowRight aria-hidden="true" size={18} />}>
              Начать проект
            </ButtonLink>
            <ButtonLink
              external
              href={site.contact.telegramHref}
              icon={<MessageCircle aria-hidden="true" size={18} />}
              variant="secondary"
            >
              Telegram
            </ButtonLink>
          </div>
        </div>

        <div className="sq-hero__canvas" aria-label="Визуальная схема технического продакшна">
          <div className="sq-device sq-device--main">
            <StageVisual label="Главная сцена" />
          </div>
          <div className="sq-device sq-device--side">
            <span>Light plot</span>
            <strong>48 fixtures</strong>
            <small>scenes / cues / beams</small>
          </div>
          <div className="sq-device sq-device--bottom">
            <span>Audio map</span>
            <strong>FOH + monitors</strong>
          </div>
        </div>
      </section>

      <section className="sq-stats" aria-label="Ключевые показатели">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="sq-intro">
        <div>
          <p className="sq-kicker">От идеи до площадки</p>
          <h2>Полный технический контур для мероприятий любого масштаба</h2>
        </div>
        <p>
          Формируем рабочую группу, подбираем оборудование, готовим техническую карту, отвечаем за монтаж,
          настройку, поддержку во время события и демонтаж.
        </p>
      </section>

      <section className="sq-product-grid" aria-label="Направления продакшна">
        {productionCards.map((card, index) => (
          <Link href="/services" key={card.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{card.title}</strong>
            <p>{card.text}</p>
          </Link>
        ))}
      </section>

      <section className="sq-builder">
        <div className="sq-builder__media">
          <div className="sq-builder__frame sq-builder__frame--dark">
            <span>technical map</span>
            <strong>Свет / звук / сцена / эффекты</strong>
          </div>
          <div className="sq-builder__frame sq-builder__frame--light">
            <span>crew board</span>
            <strong>Саунд, лайт, техники, риггеры, координаторы</strong>
          </div>
        </div>
        <div className="sq-builder__copy">
          <p className="sq-kicker">О компании</p>
          <h2>Не аренда оборудования, а собранная система события</h2>
          <p>
            Мы не просто привозим приборы. Под конкретный проект собирается связка оборудования,
            специалистов, логистики и ответственности на площадке.
          </p>
          <Link className="sq-text-link" href="/team">
            Смотреть команду
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="sq-services">
        <div className="sq-section-head">
          <p className="sq-kicker">Услуги</p>
          <h2>Все ключевые элементы шоу в одной технической системе</h2>
        </div>
        <div className="sq-service-list">
          {services.map((service) => (
            <Link href="/services" key={service.title}>
              <span>{service.title}</span>
              <p>{service.text}</p>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="sq-template-wall">
        <div className="sq-section-head sq-section-head--center">
          <p className="sq-kicker">Проекты</p>
          <h2>Площадки, где важны точность, тайминг и безопасность</h2>
        </div>
        <div className="sq-project-mosaic">
          {projects.map((project, index) => (
            <Link className={`sq-project-tile sq-project-tile--${index + 1}`} href="/projects" key={project.title}>
              <span>{project.type}</span>
              <strong>{project.title}</strong>
              <p>{project.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sq-cycle">
        <div>
          <p className="sq-kicker">Полный цикл</p>
          <h2>Один маршрут от технической карты до демонтажа</h2>
        </div>
        <div className="sq-cycle__steps">
          {cycleSteps.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="sq-team">
        <div className="sq-section-head">
          <p className="sq-kicker">Команда</p>
          <h2>Специалисты закрывают каждую критичную зону площадки</h2>
        </div>
        <div className="sq-team__grid">
          {team.map((member) => (
            <Link href="/team" key={member.title}>
              <strong>{member.title}</strong>
              <p>{member.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sq-proof">
        <div>
          <p className="sq-kicker">Почему выбирают нас</p>
          <h2>Собственное оборудование, команда и контроль процесса</h2>
        </div>
        <div className="sq-proof__list">
          {[
            "Опыт работы на крупных площадках",
            "Полный цикл работ",
            "Гибкий подход к задачам и бюджету",
            "Поддержка во время мероприятия"
          ].map((item) => (
            <span key={item}>
              <Check aria-hidden="true" size={18} />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="sq-faq">
        <div className="sq-section-head">
          <p className="sq-kicker">FAQ</p>
          <h2>Коротко о старте проекта</h2>
        </div>
        <div className="sq-faq__items">
          {faqItems.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Опишите площадку и формат, а мы соберем техническую рамку"
        text="Первый шаг: дата, город, площадка, количество гостей и что должно происходить на сцене."
      />
    </div>
  );
}
