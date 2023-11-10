export default function AboutMe() {
  return (
    <section className="w-full" id="3">
      <div className="flex flex-col font-bold text-[2.5rem] md:text-[4rem] align-baseline py-4 md:py-28 md:mx-10">
        <span className="border-b-2 border-[#3c6255]">About Me</span>
        <section className="text-lg md:text-2xl md:mr-20 space-y-8">
          <div>
            <p>
              I am Leonardo de la Cruz, passionate about development and design as well, but another area that
              I like music and what can be expressed through it, I think that
              the most important thing is the sustainability of the code in the long term and the ease in
              which the end user can use the project developed for them.
            </p>
          </div>
          <div>
            <a href="#" className="bg-black text-white px-12 py-4 rounded-xl" target="_blank">my github</a>
          </div>
        </section>
      </div>
    </section>
  )
}
