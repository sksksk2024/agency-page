import eggs from './../images/mobile/image-transform.jpg';
import orange from './../images/mobile/image-stand-out.jpg';
// import orange from './../images/mobile/image-photography.jpg';
// import orangeD from './../images/desktop/image-photography.jpg';

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
        <img src={orange} className="w-full" alt="egg" />
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
    </main>
  );
}
