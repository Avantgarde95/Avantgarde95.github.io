import { ReactNode } from "react";
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const items: Array<{ id: string; icon: ReactNode; url: string }> = [
  { id: "youtube", icon: <FaYoutube />, url: "https://www.youtube.com/user/Scottparkmusic" },
  { id: "github", icon: <FaGithub />, url: "https://github.com/Avantgarde95" },
  { id: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/hunminpark95" },
];

const Links = () => (
  <div className="flex flex-row flex-wrap items-center justify-start gap-5">
    {items.map(contact => (
      <Link className="text-2xl hover:text-yellow" key={contact.id} target="_blank" href={contact.url}>
        {contact.icon}
      </Link>
    ))}
  </div>
);

export default Links;
