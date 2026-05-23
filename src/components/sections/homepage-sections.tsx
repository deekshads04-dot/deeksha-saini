import { homepageSections } from "@/config/homepage";
import { homepageSectionRegistry } from "./registry";

export function HomepageSections() {
  const enabledSections = homepageSections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      {enabledSections.map((section) => {
        const Component = homepageSectionRegistry[section.id];
        if (!Component) return null;
        return <Component key={section.id} />;
      })}
    </>
  );
}
