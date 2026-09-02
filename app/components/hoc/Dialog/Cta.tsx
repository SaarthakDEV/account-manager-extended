import { CTAButton } from "@/app/types";

export const CTAs = {
  CONFIRM: "confirm",
  CANCEL: "cancel",
} as const;

const CTA_TYPE = [...Object.values(CTAs)];

const ctaClasses = {
    [CTAs.CONFIRM]: "bg-green-500 text-white",
    [CTAs.CANCEL]: "bg-red-500 text-white",
}

const CTA = (ctaConfig: CTAButton) =>
  CTA_TYPE.map((cta) => {
    if (!ctaConfig[cta]) return null;
    return (
      <button
        key={cta}
        onClick={ctaConfig[cta].onClick}
        className={`py-1.5 px-6 cursor-pointer rounded-md shadow-lg ${ctaClasses[cta]} ${ctaConfig[cta].className}`}
      >
        {ctaConfig[cta].title}
      </button>
    );
  });
export default CTA;
