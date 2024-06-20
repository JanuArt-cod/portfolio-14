import Image from "next/image";
import { CertificateCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'certificate'] {
  title,
    _id,
    link,
    description,
    tags,
    "imageUrl": image.asset->url
}`;

  const data = await client.fetch(query);

  return data;
}


export default async function CertificatePage() {
  const data: CertificateCard[] = await getData();
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Certificate</h1>
      <p className="leading-7 text-muted-foreground mt-2">See what skills certificates I have</p>
      <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <a 
            href={item.link}
            key={item._di}
            className="group block"
            target="_blank">
            <div className="aspect-w-9 aspect-h-6 overflow-hidden rounded-2xl relative">
              <Image 
                  src={item.imageUrl} 
                  alt="Image" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
                />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg hover:underline">{item.title}</h2>
              <p className="mt-1 text-muted-foreground line-clamp-3" style={{ fontSize: '0.75em' }}>{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tagItem, index) => (
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium taxt-primary ring-1 ring-inset ring-primary/20" style={{ fontSize: '0.75em' }} key={index}>
                    {tagItem}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}