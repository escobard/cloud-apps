import { useModal } from "hooks";

describe("useModal hook", () => {
  describe("> renders", () => {
    it(">> title and content ", () => {
      const { result } = renderHook(() => useModal());

      actHook(() => {
        result.current.openModal();
      });

      const { getByText } = render(
        result.current.renderModal({
          title: <h2>Test title</h2>,
          content: <div>Test content</div>
        })
      );

      expect(getByText("Test title"));
      expect(getByText("Test content"));
    });
  });

  describe("> user actions", () => {
    it(">> opens modal", () => {
      const { result } = renderHook(() => useModal());

      actHook(() => {
        result.current.openModal();
      });

      expect(result.current.showModal).toEqual(true);
    });
    it(">> closes modal", () => {
      const { result } = renderHook(() => useModal());
      actHook(() => {
        result.current.closeModal();
      });
      expect(result.current.showModal).toEqual(false);
    });
  });
});
