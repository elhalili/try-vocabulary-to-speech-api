import Link from "next/link";

export default function Footer() {
    return <nav className="flex justify-center space-x-4 bg-pink-100">
        {[
          ['Github', '/'],
          ['Email', '/about'],
          ['LinkedIn', '/faq'],
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