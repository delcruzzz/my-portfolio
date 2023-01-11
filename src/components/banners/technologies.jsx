import ArrowRigth from "../icons/arrow_rigth";

export default function Technologies() {
  return (
    <section className="w-full min-h-full py-12" id="2">
      <div className="flex flex-col font-bold align-baseline text-[2.5rem] md:text-[4rem] text-[#1a120b] py-4 md:mx-10">
        <p>Technologies</p>
        <section className="font-semibold text-4xl md:text-5xl py-4 space-y-8">
          <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>HTML5</p>
            <ArrowRigth />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>CSS3</p>
            <ArrowRigth />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>TailwindCSS</p>
            <ArrowRigth />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>JavaScript</p>
            <ArrowRigth />
          </a>
          <a href="https://es.reactjs.org/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>React JS</p>
            <ArrowRigth />
          </a>
          <a href="https://astro.build/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>Astro</p>
            <ArrowRigth />
          </a>
          <a href="https://vitejs.dev/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>Vite</p>
            <ArrowRigth />
          </a>
          <a href="https://nodejs.org/es/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>Node JS</p>
            <ArrowRigth />
          </a>
          <a href="https://expressjs.com/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>Express JS</p>
            <ArrowRigth />
          </a>
          <a href="https://nestjs.com/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>Nest JS</p>
            <ArrowRigth />
          </a>
          <a href="https://www.postgresql.org/" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>PostgreSQL</p>
            <ArrowRigth />
          </a>
          <a href="https://www.adobe.com/co/products/photoshop.html" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>Photoshop</p>
            <ArrowRigth />
          </a>
          <a href="https://www.adobe.com/co/products/illustrator.html" target="_blank" className="flex items-center space-x-14 border-b-2 border-black">
            <p>Illustrator</p>
            <ArrowRigth />
          </a>
        </section>
      </div>
    </section>
  )
}