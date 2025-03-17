import eggs from './../images/mobile/image-transform.jpg';
import miniOrange from './../images/mobile/image-stand-out.jpg';
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
      <section className="flex flex-col justify-center items-center md:flex-row-reverse">
        <img src={eggs} className="w-full" alt="egg" />
        <aside className="w-full flex flex-col justify-center items-center gap-8 bg-white text-black text-center md:py-[242px] md:text-start">
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
      <section className="flex flex-col justify-center items-center md:flex-row">
        <img src={miniOrange} className="w-full" alt="mini-orange" />
        <aside className="w-full flex flex-col justify-center items-center gap-8 bg-white text-black text-center md:py-[221px] md:text-start">
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

      {/* SECTION 3 */}
      <section className="flex flex-col justify-center items-center md:flex-row">
        <div
          id="cherry"
          className="flex flex-col justify-end items-center text-center space-y-8 pb-48P"
        >
          <h3 className="text-dark-desaturated-cyan text-xl font-bold">
            Graphic Design
          </h3>

          <p className="text-dark-moderate-cyan max-w-container-400">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>

        <div
          id="mini-orange"
          className="flex flex-col justify-end items-center text-center space-y-8 pb-48P"
        >
          <h3 className="text-dark-blue text-xl font-bold">Graphic Design</h3>

          <p className="text-dark-blue font-semibold max-w-container-400">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex flex-col justify-center items-center bg-white px-16P">
        <h3 className="text-xl text-center text-grayish-blue font-bold my-64M tracking-widest uppercase">
          Client testimonials
        </h3>

        <div className="flex flex-col justify-center items-center gap-12 px-32P mb-48M xl:flex-row xl:items-start">
          {/* 1 */}
          <div className="flex flex-col justify-center items-center gap-10 mb-48M xl:my-0">
            <img src={pers1} className="rounded-full w-96W" alt="emily" />
            <p className="text-xl text-center text-dark-grayish-blue font-semibold max-w-container-500">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="text-center">
              <h4 className="text-xl text-black font-bold">Emily R.</h4>
              <p className="text-grayish-blue">Marketing Director</p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col justify-center items-center gap-10 my-48M xl:my-0">
            <img src={pers2} className="rounded-full w-96W" alt="thomas" />
            <p className="text-xl text-center text-dark-grayish-blue font-semibold max-w-container-500">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="text-center">
              <h4 className="text-xl text-black font-bold">Thomas S.</h4>
              <p className="text-grayish-blue">Chief Operating Officer</p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col justify-center items-center gap-10 my-48M xl:my-0">
            <img src={pers3} className="rounded-full w-96W" alt="jennie" />
            <p className="text-xl text-center text-dark-grayish-blue font-semibold max-w-container-500">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="text-center">
              <h4 className="text-xl text-black font-bold">Jennie F.</h4>
              <p className="text-grayish-blue">Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="flex flex-col justify-center items-center bg-white xl:flex-row">
        <div className="flex flex-col justify-center items-center w-full h-[550.4px] sm:flex-row">
          <img src={milk} className="w-full h-[550.4px] sm:w-1/2" alt="milk" />
          <img
            src={orange}
            className="w-full h-[550.4px] sm:w-1/2"
            alt="orange"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-[550.4px] sm:flex-row">
          <img src={cone} className="w-full h-[550.4px] sm:w-1/2" alt="cone" />
          <img
            src={sugar}
            className="w-full h-[550.4px] sm:w-1/2"
            alt="sugar"
          />
        </div>
      </section>
    </main>
  );
}
