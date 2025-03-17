import { motion } from 'framer-motion';

interface SectionParallaxProps {
  image: string;
  title: string;
  text: string;
  linkText: string;
  linkColor: string;
  yTransform: any;
  reverse?: boolean;
}

export default function SectionParallax({
  image,
  title,
  text,
  linkText,
  linkColor,
  yTransform,
  reverse = false,
}: SectionParallaxProps) {
  return (
    <section
      className={`flex flex-col justify-center items-center h-[620px] ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } mt-[310px] lg:mt-0`}
    >
      <motion.div className="w-full h-[620px]" style={{ y: yTransform }}>
        <img src={image} className="w-full h-[620px]" alt={title} />
      </motion.div>

      <aside className="z-0 w-full h-[620px] flex flex-col justify-center items-center gap-8 bg-white text-black text-center md:text-start py-[300px]">
        <h2 className="text-lg font-bold md:text-2xl w-1/2">{title}</h2>
        <p className="text-dark-grayish-blue font-semibold max-w-container-500 w-1/2">
          {text}
        </p>
        <a className="relative text-lg font-bold uppercase w-1/2" href="#">
          <span className="relative z-10">{linkText}</span>
          <span
            className={`absolute z-0 left-0 bottom-[2px] rounded-5BR border-b-[10px] w-full border-${linkColor} opacity-30 md:w-144W`}
          ></span>
        </a>
      </aside>
    </section>
  );
}
