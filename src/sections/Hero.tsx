/* COMPONENTS */
import Button from '../components/Button.tsx';
import HeroExperience from '../components/HeroModels/HeroExperience.tsx';
import AnimatedCounter from '../components/AnimatedCounter.tsx';

/* CONSTANTS */
import { words } from '../constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-main-layout"
      aria-labelledby="hero-heading"
    >
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 id="hero-heading">
                Shaping
                <span className="slide">
                  <span
                    className="wrapper"
                    role="marquee"
                    aria-label="Rotating project keywords"
                  >
                    {words.map((word, index) => (
                      <span
                        key={`${index}-${word.text}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                        aria-hidden={index !== 0}
                      >
                        <img
                          src={word.imgPath}
                          alt=""
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-primary"
                          role="presentation"
                          aria-hidden="true"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-primary md:text-xl relative z-10 pointer-events-none">
              Hi, I&apos;m Adrian, a developer based in Croatia with a passion
              for code.
            </p>
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              ariaLabel="Scroll to portfolio statistics"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure
          className="hero-3d-layout"
          aria-label="3D interactive room visualization"
        >
          <HeroExperience />
          <figcaption className="sr-only">
            A 3D model of a modern workspace room.
          </figcaption>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
}
