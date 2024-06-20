import Image from "next/image";
import square from "../../public/square.png";
import square2 from "../../public/square.jpg"
import king from "../../public/king.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ai from "../../public/tech-icons/ai.svg";
import ae from "../../public/tech-icons/ae.svg";
import ps from "../../public/tech-icons/ps.svg";
import xampp from "../../public/tech-icons/xampp.svg";
import canva from "../../public/tech-icons/canva.svg";
import figma from "../../public/tech-icons/figma.svg";
import filmora from "../../public/tech-icons/filmora.svg";
import capcut from "../../public/tech-icons/capcut.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import github from "../../public/tech-icons/github.svg";
import micro from "../../public/tech-icons/micro.svg";
import notion from "../../public/tech-icons/notion.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import google from "../../public/tech-icons/google.svg";
import boot from "../../public/tech-icons/boot.svg";
import vcs from "../../public/tech-icons/vcs.svg";
import laravel from "../../public/tech-icons/laravel.svg";
import ci from "../../public/tech-icons/ci.svg";
import linkedin from "../../public/linkedin.svg";
import insta from "../../public/insta.svg";
import fb from "../../public/fb.svg";
import { Button } from "@/components/ui/button";


const icons = [
  ai,
  ae,
  ps,
  canva,
  figma,
  filmora,
  capcut,
  chatgpt,
  github,
  micro,
  notion,
  chrome,
  vcs,
  laravel,
  ci,
  xampp,
  boot,
  google,
];

const socialMedia = [
  {
    id: 1,
    icon: linkedin,
    name: 'linkedin',
    username: 'Januar Ramadhani',
    link: 'https://www.linkedin.com/in/januar-ramadhani-b21582219'
  },
  {
    id: 2,
    icon: insta,
    name: 'instagram',
    username:'@januart02',
    link: 'https://www.instagram.com/januart02'
  },
  {
    id: 3,
    icon: fb,
    name: 'facebook',
    username: 'Januar Ramadhani',
    link:'https://www.facebook.com/jancoek.januar'
  }
]


export function SectionTwo () {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image src={square2} alt="square" className="w-full h-full object-cover rounded-2xl"/>
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-200 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item,index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16"/>
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card key={item.id} className="p-4 flex flex-col items-center sm:items-start bg-gray-200 border-none">
              <Image src={item.icon} alt="Icon" className="w-16 h-16"/>
              <h1 className="text-1xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4 bg-orange-600" size="sm" asChild>
                <a href={item.link} target="_blank">Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}