import cv_leo from '../../assets/pdf/cv_leonardo_jose_de_la_cruz_ardila.pdf'

export default function Presentation() {
  return (
    <section className="w-full min-h-full">
      <div className="flex flex-col items-center justify-center font-bold text-[2.5rem] md:text-[4rem] text-[#1a120b] align-baseline py-16 2xl:py-44 space-y-2 md:mx-10">
        <div>
          <p>hello.</p>
          <p>This is the portfolio site of Leonardo De la cruz</p>
          <p>I'm backend developer</p>
          <a className="font-semibold text-lg bg-[#3c6255] text-white px-12 py-4 rounded-xl" href={ cv_leo } target="_blank">View my CV</a>
        </div>
      </div>
    </section>
  )
}
