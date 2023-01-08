import ArrowRigth from "../icons/arrow_rigth";

export default function Technologies() {
  return (
    <section className="w-full min-h-full py-12" id="2">
      <div className="flex flex-col font-bold align-baseline text-[2.5rem] md:text-[4rem] text-[#1a120b] py-4 md:mx-10">
        <p>Technologies</p>
        <section className="font-semibold text-4xl md:text-5xl py-4 space-y-8">
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>HTML5</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>CSS3</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>TailwindCSS</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>JavaScript</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>React</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>Astro</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>Vite</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>Express</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>PostgreSQL</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>Photoshop</p>
            <ArrowRigth />
          </a>
          <a className="flex items-center space-x-14 border-b-2 border-black">
            <p>Illustrator</p>
            <ArrowRigth />
          </a>
        </section>
      </div>
    </section>
  )
}