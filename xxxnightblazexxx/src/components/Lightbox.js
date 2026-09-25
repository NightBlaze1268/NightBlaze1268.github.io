import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, DownloadIcon } from "./Icons";

/**
 * Full-screen image viewer. `image` is { src, alt, title, fileName } or null.
 */
export default function Lightbox({ image, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!image) return undefined;
    const previouslyFocused = document.activeElement;
    const background = Array.from(document.body.children)
      .filter((element) => element !== dialogRef.current)
      .map((element) => [element, element.hasAttribute("inert")]);
    background.forEach(([element]) => element.setAttribute("inert", ""));
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const controls = Array.from(dialogRef.current.querySelectorAll("a[href], button:not(:disabled)"));
      const index = controls.indexOf(document.activeElement);
      const next = (index + (e.shiftKey ? -1 : 1) + controls.length) % controls.length;
      e.preventDefault();
      controls[next]?.focus();
    };
    const overflow = document.body.style.overflow;

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      background.forEach(([element, wasInert]) => {
        if (!wasInert) element.removeAttribute("inert");
      });
      previouslyFocused?.focus?.();
    };
  }, [image, onClose]);

  if (!image) return null;

  // Portal to <body> so animated/transformed page wrappers can't trap the fixed overlay
  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-8"
    >
      <figure className="relative flex max-h-full animate-scale-in flex-col" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[78vh] w-auto max-w-full rounded-2xl bg-white object-contain shadow-2xl ring-1 ring-white/10"
        />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/80">
          <span className="font-medium">{image.title}</span>
          <a
            href={image.src}
            download={image.fileName}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-1.5 font-medium text-white transition hover:border-white/50 hover:bg-white/10"
          >
            <DownloadIcon className="h-4 w-4" />
            Download
          </a>
        </figcaption>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-black shadow-lg transition hover:scale-110"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </figure>
    </div>,
    document.body
  );
}
