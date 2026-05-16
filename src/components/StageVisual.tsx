type StageVisualProps = {
  compact?: boolean;
  label?: string;
};

export function StageVisual({ compact = false, label = "production map" }: StageVisualProps) {
  return (
    <div className={`stage-visual${compact ? " stage-visual--compact" : ""}`} aria-label={label}>
      <div className="stage-visual__rig" />
      <div className="stage-visual__beam stage-visual__beam--a" />
      <div className="stage-visual__beam stage-visual__beam--b" />
      <div className="stage-visual__beam stage-visual__beam--c" />
      <div className="stage-visual__console">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="stage-visual__floor" />
    </div>
  );
}
