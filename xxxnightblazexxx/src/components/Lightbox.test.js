import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Lightbox from "./Lightbox";

test("contains keyboard focus and restores background access when closed", () => {
  const opener = document.createElement("button");
  document.body.appendChild(opener);
  opener.focus();
  const onClose = jest.fn();
  const { rerender } = render(
    <Lightbox image={{ src: "/certificate.jpg", alt: "Certificate", title: "Certificate" }} onClose={onClose} />
  );
  expect(opener).toHaveAttribute("inert");
  expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
  userEvent.tab();
  expect(screen.getByRole("link", { name: "Download" })).toHaveFocus();
  userEvent.tab({ shift: true });
  expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
  userEvent.keyboard("{Escape}");
  expect(onClose).toHaveBeenCalledTimes(1);
  rerender(<Lightbox image={null} onClose={onClose} />);
  expect(opener).not.toHaveAttribute("inert");
  expect(opener).toHaveFocus();
  opener.remove();
});
