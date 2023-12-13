const Ordered = ({ children }: { children: React.ReactNode }) => (
  <ol className="mb-2 list-inside list-decimal">{children}</ol>
);

const Unordered = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-2 list-inside list-disc">{children}</ul>
);

const Item = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-1">{children}</li>
);

export const List = { Ordered, Unordered, Item };
