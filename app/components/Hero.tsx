import Image from 'next/image';
import im from '../../public/im.jpg'


export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 col-span-2">
      <div className="col-span-1 lg:col-span-2 h-full bg-gray-200 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8">
        <h1 className="text-4xl md:text-6xl font-semibold mt-5">
          Hey I am Janu<span className="text-orange-600">art.</span>
        </h1>
        <h1 className="text-4xl lg:text-2xl font-normal mt-2 text-gray-500">Freelance Designer <span className='text-orange-600'>and </span>Front end Engineer.</h1>
        <a href="mailto:raffasyafawwazrahmani@gmail.com" className="relative inline-block px-4 py-2 font-medium group mt-5 ">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-orange-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-orange-600 group-hover:bg-orange-600"></span>
          <span className="relative text-orange-600 group-hover:text-white">Get in Touch !</span>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="https://tafsirweb.com/719-surat-al-baqarah-ayat-197.html" target='_blank'>
          <h3 className="text-4xl md:text-3xl font-semibold mt-12">📓 Moslem for <span className="text-orange-600">life.</span></h3>
          <p className="text-2xl lg:text-1xl font-normal mt-5 "> Sebaik-baik bekal adalah taqwa.<span className="text-orange-600 font-italic">(QS.Al-baqarah ayat 197)</span></p>
        </a>
      </div>
      <Image src={im} alt='Januart' className='col-span-1 h-[500px] object-cover rounded-2xl bg-gray-200' priority/>
    </div>
  );
}