import { social } from "../data/social";

const icons = {
  facebook: (
    <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" />
    </>
  ),
  linkedin: <path d="M6 9v11M6 5v.01M11 20v-7a3 3 0 0 1 6 0v7M11 9v11" />,
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l6 3-6 3z" />
    </>
  ),
  x: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
};

const labels = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  x: "X",
};

export default function SocialIcons() {
  return (
    <div className="social">
      {Object.entries(social).map(([key, url]) =>
        url ? (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={labels[key]}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {icons[key]}
            </svg>
          </a>
        ) : null,
      )}
    </div>
  );
}
