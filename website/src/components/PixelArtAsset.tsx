import Image from "next/image";

export type PixelArtAssetKey =
  | "heroSystemsMap"
  | "webFoundation"
  | "operationsGrid"
  | "customSystems"
  | "reflexnetDreamscope"
  | "localPresence";

export type PixelArtAsset = {
  key: PixelArtAssetKey;
  title: string;
  description: string;
  src: string;
  alt: string;
  bestUse: "hero" | "card" | "proof";
};

export const pixelArtAssets: Record<PixelArtAssetKey, PixelArtAsset> = {
  heroSystemsMap: {
    key: "heroSystemsMap",
    title: "Systems Map",
    description: "Hero visual for GroveX as a calm operating system: website, support, operations, and custom tools connected by one dependable service layer.",
    src: "/pixel_art/hero-systems-map.svg",
    alt: "Pixel art systems map showing connected service nodes around a central GroveX operations core",
    bestUse: "hero",
  },
  webFoundation: {
    key: "webFoundation",
    title: "Web Foundation",
    description: "Card visual for websites, landing pages, local search basics, and contact-path clarity.",
    src: "/pixel_art/card-web-foundation.svg",
    alt: "Pixel art browser window representing a clean small business website foundation",
    bestUse: "card",
  },
  operationsGrid: {
    key: "operationsGrid",
    title: "Operations Grid",
    description: "Card visual for IT support, device setup, workflow cleanup, and day-to-day reliability.",
    src: "/pixel_art/card-operations-grid.svg",
    alt: "Pixel art operations grid with connected nodes for business technology support",
    bestUse: "card",
  },
  customSystems: {
    key: "customSystems",
    title: "Custom Systems",
    description: "Card visual for software, automations, internal tools, integrations, and reporting systems.",
    src: "/pixel_art/card-custom-systems.svg",
    alt: "Pixel art terminal interface representing custom software systems and automations",
    bestUse: "card",
  },
  reflexnetDreamscope: {
    key: "reflexnetDreamscope",
    title: "Research Feedback Loop",
    description: "Proof visual for paper-mode research: signals moving through evaluation and publication gates.",
    src: "/pixel_art/card-reflexnet-dreamscope.svg",
    alt: "Pixel art signal field representing paper-mode research and evaluation loops",
    bestUse: "proof",
  },
  localPresence: {
    key: "localPresence",
    title: "Local Presence",
    description: "Card visual for GroveX as a reachable local business anchored at 124 Grant Street.",
    src: "/pixel_art/card-local-presence.svg",
    alt: "Pixel art storefront representing GroveX local presence in Turtle Creek",
    bestUse: "card",
  },
};

export function PixelArtImage({
  asset,
  className = "",
}: {
  asset: PixelArtAssetKey;
  className?: string;
}) {
  const item = pixelArtAssets[asset];

  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={512}
      height={512}
      unoptimized
      className={`image-render-pixel ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
