import { Icon } from "@/components/Icon";

type FeatureCardProps = {
  icon?: string;
  title: string;
  text: string;
  meta?: string;
};

export function FeatureCard({ icon, title, text, meta }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card__top">
        {icon ? (
          <span className="feature-card__icon">
            <Icon name={icon} />
          </span>
        ) : null}
        {meta ? <span className="feature-card__meta">{meta}</span> : null}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
