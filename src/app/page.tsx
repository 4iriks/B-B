import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StageVisual } from "@/components/StageVisual";
import { cycleSteps, projects, reasons, services, site, stats, team } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Технический продакшн полного цикла</p>
          <h1>
            {site.name}
            <span>делает событие реальным</span>
          </h1>
          <p className="hero__lead">{site.description}</p>
          <div className="hero__actions">
            <ButtonLink href="/contacts" icon={<ArrowRight aria-hidden="true" size={18} />}>
              Обсудить проект
            </ButtonLink>
            <ButtonLink
              external
              href={site.contact.telegramHref}
              icon={<MessageCircle aria-hidden="true" size={18} />}
              variant="secondary"
            >
              Написать в Telegram
            </ButtonLink>
          </div>
          <div className="hero__note">
            <span>Свет</span>
            <span>Звук</span>
            <span>Сцена</span>
            <span>Команда</span>
          </div>
        </div>
        <div className="hero__visual">
          <StageVisual label="Световая сцена beat&beam" />
          <div className="hero__caption">
            <strong>Техническая карта</strong>
            <span>Сборка решения под площадку, тайминг и масштаб</span>
          </div>
        </div>
      </section>

      <section className="stats-row" aria-label="Ключевые показатели">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="showcase-strip" aria-label="Основные направления">
        <Link href="/services">
          <span>01</span>
          <strong>Световое шоу</strong>
          <small>Сцены, динамика, акценты</small>
        </Link>
        <Link href="/services">
          <span>02</span>
          <strong>Чистый звук</strong>
          <small>Баланс, мощность, контроль</small>
        </Link>
        <Link href="/team">
          <span>03</span>
          <strong>Команда на площадке</strong>
          <small>Техники, риггеры, координаторы</small>
        </Link>
        <Link href="/projects">
          <span>04</span>
          <strong>Крупные площадки</strong>
          <small>Арены, театры, форумы</small>
        </Link>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="О компании"
            text="Собственное оборудование, профессиональная команда и понятная техническая ответственность на каждом этапе."
            title="Берем на себя техническую часть события"
          />
          <div className="check-list">
            <span>
              <Check aria-hidden="true" size={18} />
              Камерные события и арены на 10 000+ зрителей
            </span>
            <span>
              <Check aria-hidden="true" size={18} />
              Техническая карта, логистика, монтаж и дежурство
            </span>
            <span>
              <Check aria-hidden="true" size={18} />
              Работаем по всей России
            </span>
          </div>
        </div>
        <StageVisual compact label="Карта технической подготовки" />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Услуги"
          text="Комплектуем площадку под задачу: свет, звук, сценические конструкции, управление, спецэффекты и сопровождение."
          title="Оборудование и техническое сопровождение"
        />
        <div className="feature-grid">
          {services.map((service) => (
            <FeatureCard icon={service.icon} key={service.title} text={service.text} title={service.title} />
          ))}
        </div>
      </section>

      <section className="split-section split-section--reverse">
        <div>
          <SectionHeading
            eyebrow="Команда"
            text="Мы не просто закрываем позиции, а формируем рабочую группу под площадку, тайминг и технический риск."
            title="Специалисты под конкретный проект"
          />
          <Link className="text-link" href="/team">
            Смотреть состав команды
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div className="compact-list">
          {team.slice(0, 4).map((member) => (
            <FeatureCard icon={member.icon} key={member.title} text={member.text} title={member.title} />
          ))}
        </div>
      </section>

      <section className="section-block section-block--accent">
        <SectionHeading eyebrow="Полный цикл" title="От технической карты до демонтажа" />
        <div className="process-grid">
          {cycleSteps.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Почему выбирают нас"
            text="Костяк сайта уже разделяет аргументы, чтобы позже легко усилить их цифрами, кейсами и фотографиями."
            title="Сильная база для коммерческого предложения"
          />
        </div>
        <div className="reason-list">
          {reasons.map((reason) => (
            <span key={reason}>
              <Check aria-hidden="true" size={18} />
              {reason}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading eyebrow="Проекты" title="Часть площадок, где мы работали" />
        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <Link className="project-card" href="/projects" key={project.title}>
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
