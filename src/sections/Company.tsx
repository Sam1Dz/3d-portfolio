/* CONSTANTS */
import { logoIconsList } from '../constants';

/* TYPES */
import type { LogoIconsList } from '../types';

function LogoIcon({ icon }: { icon: LogoIconsList }) {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt="Company logo" />
    </div>
  );
}

export default function Company() {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
