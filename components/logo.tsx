const Logo = ({
  StepBroBD = false,
  animated = false,
  size,
}: {
  StepBroBD?: boolean;
  animated?: boolean;
  size: "small" | "medium" | "large";
}) => {
  switch (size) {
    case "small":
      return (
        <a href="/">
          <div class="flex items-center select-none">
            {animated
              ? (
                <video
                  src="/assets/stepbrobd.webm"
                  autoPlay
                  loop
                  muted
                  class="w-8 h-8 rounded-full"
                />
              )
              : (
                <img
                  src="/assets/stepbrobd.webp"
                  alt="StepBroBD Inc."
                  class="w-8 h-8 rounded-full"
                />
              )}
            {StepBroBD && (
              <div class="text-2xl ml-1 font-bold tracking-tight">
                StepBroBD Inc.
              </div>
            )}
          </div>
        </a>
      );
    case "medium":
      return (
        <a href="/">
          <div class="flex items-center select-none">
            {animated
              ? (
                <video
                  src="/assets/stepbrobd.webm"
                  autoPlay
                  loop
                  muted
                  class="w-16 h-16 rounded-full"
                />
              )
              : (
                <img
                  src="/assets/stepbrobd.webp"
                  alt="StepBroBD Inc."
                  class="w-16 h-16 rounded-full"
                />
              )}
            {StepBroBD && (
              <div class="text-4xl ml-2 font-bold tracking-tight">
                StepBroBD Inc.
              </div>
            )}
          </div>
        </a>
      );
    case "large":
      return (
        <a href="/">
          <div class="flex items-center select-none">
            {animated
              ? (
                <video
                  src="/assets/stepbrobd.webm"
                  autoPlay
                  loop
                  muted
                  class="w-32 h-32 rounded-full"
                />
              )
              : (
                <img
                  src="/assets/stepbrobd.webp"
                  alt="StepBroBD Inc."
                  class="w-32 h-32 rounded-full"
                />
              )}
            {StepBroBD && (
              <div class="text-8xl ml-4 font-bold tracking-tight">
                StepBroBD Inc.
              </div>
            )}
          </div>
        </a>
      );
  }
};

export default Logo;
