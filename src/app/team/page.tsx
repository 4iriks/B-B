import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StageVisual } from "@/components/StageVisual";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Команда",
  description: "Саунд-дизайнеры, лайт-дизайнеры, техники, риггеры, операторы спецэффектов и координаторы проекта."
};

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Команда</p>
          <h1>Слаженная рабочая группа под проект</h1>
          <p>
            Все специалисты имеют опыт от 3 лет и работают как с аналоговым, так и с цифровым оборудованием.
          </p>
        </div>
        <StageVisual compact label="Командная структура проекта" />
      </section>

      <section className="section-block">
        <SectionHeading
          text="Каждая роль закрывает конкретную часть качества: звук, свет, безопасность, эффекты и коммуникацию."
          title="Состав команды"
        />
        <div className="feature-grid">
          {team.map((member) => (
            <FeatureCard icon={member.icon} key={member.title} text={member.text} title={member.title} />
          ))}
        </div>
      </section>

      <section className="split-section split-section--reverse">
        <div>
          <SectionHeading
            eyebrow="Подход"
            text="На старте уточняем площадку, тайминг, технические ограничения, уровень нагрузки и критичные моменты программы."
            title="Команда собирается не по шаблону"
          />
        </div>
        <div className="callout-panel">
          <strong>Результат</strong>
          <p>
            Клиент общается с координатором, а внутри проекта уже распределены зоны ответственности и быстрые решения на площадке.
          </p>
        </div>
      </section>

      <CTASection title="Соберем команду под ваш формат" />
    </>
  );
}
