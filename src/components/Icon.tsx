import {
  AudioLines,
  Cable,
  ClipboardCheck,
  Construction,
  Flame,
  HardHat,
  Lightbulb,
  type LucideIcon,
  SlidersHorizontal,
  Sparkles,
  SunMedium,
  Volume2,
  Wrench
} from "lucide-react";

const icons = {
  AudioLines,
  Cable,
  ClipboardCheck,
  Construction,
  Flame,
  HardHat,
  Lightbulb,
  SlidersHorizontal,
  Sparkles,
  SunMedium,
  Volume2,
  Wrench
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof icons;

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
};

export function Icon({ name, size = 22, strokeWidth = 1.8 }: IconProps) {
  const Component = icons[name as IconName] ?? Sparkles;

  return <Component aria-hidden="true" size={size} strokeWidth={strokeWidth} />;
}
