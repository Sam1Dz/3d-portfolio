import CountUp from 'react-countup';

/* CONSTANTS */
import { counterItems } from '../constants';

export default function AnimatedCounter() {
  return (
    <section
      id="counter"
      className="padding-x-lg xl:mt-0 mt-32"
      aria-labelledby="counter-heading"
    >
      <h2 id="counter-heading" className="sr-only">
        Portfolio statistics
      </h2>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-surf-container-high rounded-lg p-10 flex flex-col justify-center"
            role="figure"
            aria-label={`${item.label}: ${item.value}${item.suffix}`}
          >
            <div className="text-on-surface text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} duration={2} />
            </div>
            <div className="text-primary text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
