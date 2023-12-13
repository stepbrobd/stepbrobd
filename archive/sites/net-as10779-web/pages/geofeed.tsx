import { GetServerSideProps } from "next";

const Geofeed = () => null;

const data = [
  {
    prefix: "23.161.104.0/24",
    country: "US",
    region: "US-MA",
    city: "Boston",
    postal: "02115",
  },
  {
    prefix: "2620:BE:A000::/48",
    country: "US",
    region: "US-MA",
    city: "Boston",
    postal: "02115",
  },
];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    res.setHeader("Content-Type", "text/csv");
    res.write(
      `${data
        .map(
          (d) => `${d.prefix},${d.country},${d.region},${d.city},${d.postal}`,
        )
        .join("\n")}`,
    );
    res.end();
  }
  return {
    props: {},
  };
};

export default Geofeed;
