import { Badge } from "@yasa/badge";

// @end imports@ //

export function BadgeScreen() {
  return (
    <article>
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
              title={variant}
              roundness="lg"
            />
          )
        )}
      </div>
    </article>
  );
}
