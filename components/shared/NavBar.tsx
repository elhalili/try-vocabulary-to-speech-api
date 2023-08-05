import Link from "next/link";

export default function NavBar() {
    return <nav className="flex justify-center space-x-4 bg-pink-100">
        {[
          ['Home', '/'],
          ['About', '/about'],
          ['FAQ', '/faq'],
          ['Contact us', '/contact-us'],
        ].map(([title, url]) => (
          <Link href={url} 
            className="
              rounded-lg px-3 py-2 
            text-slate-700 font-medium 
            hover:text-slate-400"
            >
              {title}
            </Link>
        ))}
    </nav>;
}