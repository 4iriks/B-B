import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { StageVisual } from "@/components/StageVisual";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Часть проектов и площадок beat&beam: ЦСКА Арена, Большой театр, TAU, Сколково, Серп и Молот."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Проекты</p>
          <h1>Площадки и события, которые требуют точности</h1>
          <p>
            Сейчас это кликабельный каталог-заготовка. После согласования можно добавить кейсы, фото,
            состав оборудования и результаты.
          </p>
        </div>
        <StageVisual compact label="Карта проектов" />
      </section>

      <section className="section-block">
        <SectionHeading
          text="Карточки уже готовы к расширению в полноценные страницы кейсов."
          title="Часть наших проектов"
        />
        <div className="project-grid project-grid--wide">
          {projects.map((project) => (
            <article className="project-card project-card--static" key={project.title}>
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <Link className="text-link" href="/contacts">
                Обсудить похожую задачу
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Добавим ваш проект в портфолио beat&beam" />
    </>
  );
}
