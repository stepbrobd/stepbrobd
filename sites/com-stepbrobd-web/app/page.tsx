import { Metadata } from "next";
import { Button } from "com-stepbrobd-ui";

const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      123321
      <Button />
    </div>
  );
};

export { metadata };
export default Page;
