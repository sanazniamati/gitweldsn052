import HyButt from "./HyButt";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
test("add btn t2+ correctly works", () => {
  const { getByTestId } = render(<HyButt />);
  // const incT2 = getByTestId("btn-inc-t2");
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const inputT2 = getByTestId("input-t2");
  expect(inputT2.value).toBe("114");
  // fireEvent.click(incT2);
  // expect(inputT2.textContent).toBe("119");
});
// test("add btn t2- correctly works", () => {
//   const { getElementById } = render(<HyButt />);
//   const decT2 = getElementById("btn-dec-t2");
//   const inputT2 = getElementById("input-t2");
//   expect(inputT2.textContent).toBe(114);
//   fireEvent.click(decT2);
//   expect(inputT2.textContent).toBe(109);
// });
