import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import { ArrowUpIcon, GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line/10 bg-page/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
        <p className="text-center text-sm text-muted sm:text-left">
          © {new Date().getFullYear()} Kyle Akridge · Built with React &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-2">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
            <GithubIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="icon-btn"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
