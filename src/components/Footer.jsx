import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { logo } from "../assets";

const date = new Date();

const socials = [
  {
    icon: <FaGithub size={16} />,
    url: "https://github.com/franklinnnn",
  },
  {
    icon: <FaLinkedin size={16} />,
    url: "https://linkedin.com/in/franklin-assa",
  },
  {
    icon: <FaGlobe size={16} />,
    url: "https://franklinnn.com",
  },
];

const Footer = () => {
  return (
    <footer
      className="relative w-full 
     text-slate-100 bg-primary flex flex-col items-center font-body px-4 pb-12"
    >
      <div className="flex justify-between items-center py-6 max-w-5xl w-full mb-6">
        <div>
          <a
            href="https://summable.vercel.app/"
            className="flex items-center gap-1 font-title text-xl capitalize max-sm:text-2xl"
          >
            <img
              src={logo}
              alt="Summable logo"
              className="w-4 h-4 object-contain"
            />
            Summable
          </a>
        </div>
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/franklinnnn/ai-summarizer-app"
            target="_blank"
            className="text-slate-300 hover:text-slate-100 transition"
          >
            GitHub
          </a>
          <a
            href="https://pixeljets.com/blog/gpt-summary-is-broken/"
            target="_blank"
            className="text-slate-300 hover:text-slate-100 transition"
          >
            API
          </a>
        </div>
        <div></div>
      </div>
      <div className="flex justify-between items-center max-w-5xl w-full text-sm text-slate-300">
        <div>© {date.getFullYear()} Franklin Assa</div>
        <div className="flex gap-4">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.url}
              target="_blank"
              className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-500/20 text-secondary hover:text-slate-100 hover:bg-secondary transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
