interface ButtonProps {
  id: string;
  text: string;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  id,
  text,
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      id={id}
      type="button"
      aria-label={ariaLabel ?? `Navigate to ${text}`}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" aria-hidden="true" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </div>
      </div>
    </button>
  );
}
