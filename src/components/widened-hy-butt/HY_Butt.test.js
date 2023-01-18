import HY_Butt from "./HY_Butt";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("add btn t2+ correctly works", () => {
  const { getElementById } = render(<HY_Butt />);
  const incT2 = getElementById("btn-inc-t2");
  const inputT2 = getElementById("input-t2");
  expect(inputT2.textContent).toBe("114");
  fireEvent.click(incT2);
  expect(inputT2.textContent).toBe("119");
});
