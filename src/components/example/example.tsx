import { component$, useStore } from "@qwik.dev/core";

export const ExampleTest = component$((props: { flag: boolean }) => {
  const state = useStore({
    counter: -1,
  });

  const randomFunction = () => {
    if (state.counter === 0) {
      return "is zero";
    } else if (state.counter === 1) {
      return "is one";
    } else {
      return "is many";
    }
  };

  const result = randomFunction();

  return (
    <>
      <span>
        Count:{state.counter} {result}
      </span>
      <div class="icon">Flag: {props.flag ? "⭐" : "💣"}</div>
      <button class="btn-counter" onClick$={() => state.counter++}>
        Increment counter
      </button>
    </>
  );
});
