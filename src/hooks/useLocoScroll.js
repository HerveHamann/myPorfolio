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
      tablet: { smooth: true, multiplier: 1.5, breakpoint: 0 },
      smartphone: { smouth: true, multiplier: 2, breakpoint: 0 },
    });
    const observer = new ResizeObserver(() => locoScroll.update()).observe(
      document.querySelector("[data-scroll-container]")
    );

    return () => locoScroll.destroy();
  }, []);
}
