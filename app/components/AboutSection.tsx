import { Card } from "@/components/ui/card";
import me from "../../public/me.png"
import q from "../../public/q.jpg"
import Image from "next/image";

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ">
      <Card className="col-span-1 lg:col-span-2 border-none bg-gray-200 p-8 h-[400px]">
        <h1 className="text-4xl lg:text-4xl">Graphic Design and versatile front end engineer who is passionate and loves to create</h1>
        <p className="mt-4 text-muted-foreground lg:text-lg">
          I am a person who is usually called Januar. I have a lot of skills that can be shown while being work. One of the skills that I have, I can operate a computer and are familiar with various Graphic design software, UI/UX, front end, and animation. I also has optimal physical abilities and is always neat, diligent and organized at work.
        </p>
        <a href="mailto:raffasyafawwazrahmani@gmail.com" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-600 rounded-xl group mt-10">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-800 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Get in Touch !</span>
        </a>
      </Card>
      <div className="col-span-1">
        <Image src={me} alt="Januar" className="h-[400px] object-cover rounded-lg w-full"/>
      </div>
    </div>
  );
}