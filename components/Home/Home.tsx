import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
    <section className='flex flex-col items-center'>
      <Image style={{marginTop: '12px'}} src="/vts-logo.png" alt="logo" width={200} height={200} />
      <h1 className="heading-1" style={{marginTop: '12px'}}>Convert a list of vocabulary to speech...</h1>
      <Link href="/convert">Starting...</Link>
    </section>
    <section>
      <h2>
        How to use this
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis animi earum laborum? Et facilis asperiores cum aliquam labore iste quae architecto nobis! Odit eveniet inventore alias asperiores pariatur sit.
      </p>
    </section>
  </>;
}