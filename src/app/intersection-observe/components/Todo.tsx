import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Todo({ todo }: { todo: any }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });

  useEffect(() => {
    const observe = new IntersectionObserver(
      (entries) => {
        window.requestAnimationFrame(() => {
          console.log("entries", entries);
          for (const entry of entries) {
            setInView(entry.isIntersecting && entry.intersectionRatio >= 0.5);
          }
        });
      },
      {
        root: document.querySelector(".scroller-id"),
        threshold: 0.5,
      }
    );

    observe?.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: 200,
        backgroundColor: inView ? "red" : "blanchedalmond",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      }}
    >
      <h6>{todo.title}</h6>
    </div>
  );
}
