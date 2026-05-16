import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StageVisual } from "@/components/StageVisual";
import { cycleSteps, eventFormats, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Свет, звук, сцена, системы управления, спецэффекты, монтаж и сопровождение мероприятий."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Услуги</p>
          <h1>Оборудование, монтаж и сопровождение</h1>
          <p>
            Собираем техническую схему под формат события, площадку, бюджет и требования безопасности.
          </p>
        </div>
        <StageVisual compact label="Схема оборудования" />
      </section>

      <section className="section-block">
        <SectionHeading
          text="Каждый блок можно развить в отдельную страницу после согласования структуры и визуального языка."
          title="Направления"
        />
        <div className="feature-grid">
          {services.map((service) => (
            <FeatureCard icon={service.icon} key={service.title} text={service.text} title={service.title} />
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Форматы"
            text="Каркас рассчитан на разные типы мероприятий, чтобы быстро собрать посадочные блоки под конкретный спрос."
            title="Работаем с разными событиями"
          />
        </div>
        <div className="tag-cloud">
          {eventFormats.map((format) => (
            <span key={format}>{format}</span>
          ))}
        </div>
      </section>

      <section className="section-block section-block--accent">
        <SectionHeading eyebrow="Полный цикл" title="Что входит в сервис" />
        <div className="process-grid">
          {cycleSteps.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Подберем комплект оборудования под вашу площадку" />
    </>
  );
}
