import HyButt from "./HyButt";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("add btn t2+ correctly works", () => {
  const { getElementById } = render(<HyButt />);
  const incT2 = getElementById("btn-inc-t2");
  const inputT2 = getElementById("input-t2");
  expect(inputT2.textContent).toBe(114);
  fireEvent.click(incT2);
  expect(inputT2.textContent).toBe(119);
});
test("add btn t2- correctly works", () => {
  const { getElementById } = render(<HyButt />);
  const decT2 = getElementById("btn-dec-t2");
  const inputT2 = getElementById("input-t2");
  expect(inputT2.textContent).toBe(114);
  fireEvent.click(decT2);
  expect(inputT2.textContent).toBe(109);
});
test("change inputT2 works correctly", () => {
  const { getElementById } = render(<HyButt />);
  const inputT2 = getElementById("input-t2");
  expect(inputT2.value).toBe("114");
  fireEvent.change(inputT2, {
    target: {
      value: "120",
    },
  });
  expect(inputT2.value).toBe("120");
});
test("changing input-T2 value then clicking on decT2 works correctly", () => {
  const { getElementById } = render(<HyButt />);
  const decT2 = getElementById("btn-dec-t2");
  const inputT2 = getElementById("input-t2");
  expect(inputT2.value).toBe("114");
  fireEvent.change(inputT2, {
    target: {
      value: "120",
    },
  });
  expect(inputT2.value).toBe("120");
  fireEvent.click(decT2);
  expect(inputT2.value).toBe("125");
});
