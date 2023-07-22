import Cobe from "components/cobe";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "StepBroBD Inc.",
};

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Cobe />
    </div>
  );
};

export { metadata };
export default Page;
