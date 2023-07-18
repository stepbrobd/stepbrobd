import Theme from "components/theme";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Theme />
    </div>
  );
};

export { metadata };
export default Page;
