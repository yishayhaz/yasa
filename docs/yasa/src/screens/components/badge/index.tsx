import { Badge } from "@yasa/badge";

export function BadgeScreen() {
  return (
    <>
      <h1>Badge</h1>
      <div className="d-flex flex-start gap-10">
        {(["primary", "success", "danger", "warning", "neutral"] as const).map(
          (variant, idx) => (
            <Badge key={idx} variant={variant} size="sm" title={variant} />
          )
        )}
      </div>
      <div className="d-flex flex-start gap-10">
        {(["primary", "success", "danger", "warning", "neutral"] as const).map(
          (variant, idx) => (
            <Badge key={idx} variant={variant} size="md" title={variant} />
          )
        )}
      </div>
      <div className="d-flex flex-start gap-10">
        {(["primary", "success", "danger", "warning", "neutral"] as const).map(
          (variant, idx) => (
            <Badge
              key={idx}
              variant={variant}
              size="lg"
              title={idx * 10}
              roundness="lg"
            />
          )
        )}
      </div>
    </>
  );
}
