interface ButtonProps {
  text: string;
  className?: string;
  ariaLabel?: string;
}

export default function Button({ text, className, ariaLabel }: ButtonProps) {
  const handleClick = () => {
    const target = document.getElementById('counter');

    if (!target) {
      console.warn('Target section #counter not found');
      return;
    }

    const offset = window.innerHeight * 0.15;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className ?? ''} cta-wrapper`}
      aria-label={ariaLabel ?? `Navigate to ${text}`}
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
