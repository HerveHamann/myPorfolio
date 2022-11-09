import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1.5,
      tablet: { smooth: true },
      smartphone: { smouth: true },
    });
    const observer = new ResizeObserver(() => locoScroll.update()).observe(
      document.querySelector("[data-scroll-container]")
    );

    return () => locoScroll.destroy();
  }, []);
}
