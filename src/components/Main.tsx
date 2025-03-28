import eggs from './../images/mobile/image-transform.jpg';
import cup from './../images/mobile/image-stand-out.jpg';
import milk from './../images/mobile/image-gallery-milkbottles.jpg';
import sugar from './../images/mobile/image-gallery-sugar-cubes.jpg';
import cone from './../images/mobile/image-gallery-cone.jpg';
import orange from './../images/desktop/image-gallery-orange.jpg';
import pers1 from './../images/image-emily.jpg';
import pers2 from './../images/image-thomas.jpg';
import pers3 from './../images/image-jennie.jpg';

export default function Main() {
  return (
    <main className="">
      {/* SECTION 1 */}
      <section className="flex flex-col justify-center items-center h-[620px] mt-[310px] lg:mt-0 lg:flex-row-reverse">
        <div className="w-full h-[620px]">
          <img src={eggs} className="w-full h-[620px]" alt="egg" />
        </div>

        <aside className="z-0 w-full h-[620px] flex flex-col justify-center items-center gap-8 bg-white text-black text-center md:text-start py-[300px]">
          <h2 className="text-lg font-bold md:text-2xl w-1/2">
            Transform your brand
          </h2>

          <p className="text-dark-grayish-blue font-semibold max-w-container-500 w-1/2">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <a className="relative text-lg font-bold uppercase w-1/2" href="#">
            <span className="relative z-10">Learn more</span>

            <span className="absolute z-0 left-0 bottom-[2px] rounded-5BR border-b-[10px] w-full border-yellow opacity-30 md:w-144W"></span>
          </a>
        </aside>
      </section>

      {/* SECTION 2 */}
      <section className="flex flex-col justify-center items-center lg:flex-row mt-[285px] lg:mt-0">
        <div className="relative w-full h-[622px]">
          <img src={cup} className="z-0 w-full h-[622px]" alt="cup" />
        </div>
        <aside className="z-0 w-full h-[622px] flex flex-col justify-center items-center gap-8 bg-white text-black text-center md:text-start">
          <h2 className="text-lg font-bold md:text-2xl w-1/2">
            Stand out to the right audience
          </h2>

          <p className="text-dark-grayish-blue font-semibold max-w-container-500 w-1/2">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>

          <a className="relative text-lg font-bold uppercase w-1/2" href="#">
            <span className="relative z-10">Learn more</span>

            <span className="absolute z-0 left-0 bottom-[2px] rounded-5BR border-b-[10px] w-full border-soft-red opacity-30 md:w-144W"></span>
          </a>
        </aside>
      </section>

      {/* SECTION 3 - h-[496px] !!!!!!!!!!!!!!!!!!!*/}
      <section className="flex flex-col justify-center items-center md:flex-row">
        <div
          id="cherry"
          className="flex flex-col justify-end items-center text-center space-y-8 pb-32P px-32P"
        >
          <h3 className="text-dark-desaturated-cyan text-xl font-bold">
            Graphic Design
          </h3>

          <p className="text-dark-moderate-cyan font-semibold max-w-container-400">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>

        <div
          id="mini-orange"
          className="flex flex-col justify-end items-center text-center space-y-8 pb-32P px-32P"
        >
          <h3 className="text-dark-blue text-xl font-bold">Graphic Design</h3>

          <p className="text-dark-blue font-semibold max-w-container-400">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-white px-16P">
        <h3 className="text-xl text-center text-grayish-blue font-bold my-64M tracking-widest uppercase">
          Client testimonials
        </h3>

        <div className="flex flex-col justify-center items-center gap-12 px-32P mb-48M xl:flex-row xl:items-start">
          {[
            {
              img: pers1,
              name: 'Emily R.',
              role: 'Marketing Director',
              text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
            },
            {
              img: pers2,
              name: 'Thomas S.',
              role: 'Chief Operating Officer',
              text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
            },
            {
              img: pers3,
              name: 'Jennie F.',
              role: 'Business Owner',
              text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
            },
          ].map(({ img, name, role, text }, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-10 my-48M xl:my-0"
            >
              <img src={img} className="rounded-full w-96W" alt={name} />
              <p className="text-xl text-center text-dark-grayish-blue font-semibold max-w-container-500">
                {text}
              </p>
              <div className="text-center">
                <h4 className="text-xl text-black font-bold">{name}</h4>
                <p className="text-grayish-blue">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 - Gallery */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[milk, orange, cone, sugar].map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-full object-cover"
            alt="gallery"
          />
        ))}
      </section>
    </main>
  );
}
