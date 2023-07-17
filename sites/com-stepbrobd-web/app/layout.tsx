import "com-stepbrobd-tailwind/tailwind.css";
import "com-stepbrobd-ui/tailwind.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
