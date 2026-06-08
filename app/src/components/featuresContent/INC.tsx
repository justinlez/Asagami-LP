import { LeafButton } from "@/components/ui/button";
import { FeaturesCard } from "@/components/ui/featuresCard";

export function INC() {
  const steps = [
    "Create notes from scratch or transform existing materials (E.G. PDFs, slides, URLs, images) into clearer, more organized learning content.",
    "Customize the depth, length, tone, and generation mode of notes based on your preferences.",
    "Personalize content formatting with editable layouts, highlighted key points, diagrams, and visual learning elements.",
  ];
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-1/2 gap-[6%]">
        {steps.map((step, index) => (
          <FeaturesCard className="flex flex-row gap-2">
            <LeafButton>{index}</LeafButton> <p>{step}</p>
          </FeaturesCard>
        ))}
      </div>
      <div className="flex w-1/2">The image</div>
    </div>
  );
}
