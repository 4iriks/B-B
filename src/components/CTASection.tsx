import { ArrowRight, MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/content";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Соберем техническую схему под ваше мероприятие",
  text = "Опишите формат, площадку, дату и ожидаемый масштаб. На следующем этапе можно подключить реальную отправку формы и CRM."
}: CTASectionProps) {
  return (
    <section className="cta-band" aria-label="Обсудить проект">
      <div>
        <p className="eyebrow">Заявка</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band__actions">
        <ButtonLink href="/contacts" icon={<ArrowRight aria-hidden="true" size={18} />}>
          Обсудить проект
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
    </section>
  );
}
