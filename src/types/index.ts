export interface NavLinks {
  name: string;
  link: string;
}

export interface Words {
  text: string;
  imgPath: string;
}

export interface CounterItems {
  value: number;
  suffix: string;
  label: string;
}

export interface LogoIconsList {
  imgPath: string;
}

export interface Abilities {
  imgPath: string;
  title: string;
  desc: string;
}

export interface TechStackImages {
  name: string;
  imgPath: string;
}

export interface TechStackIcons {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}

export interface ExpCards {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface ExpLogos {
  name: string;
  imgPath: string;
}

export interface Testimonials {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

export interface SocialImages {
  name: string;
  imgPath: string;
}
