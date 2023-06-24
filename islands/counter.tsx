import type { Signal } from "@preact/signals";
import Button from "../components/button.tsx";

const Counter = ({ count }: { count: Signal<number> }) => {
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => (count.value -= 1)}>-1</Button>
      <Button onClick={() => (count.value += 1)}>+1</Button>
    </div>
  );
};

export default Counter;
