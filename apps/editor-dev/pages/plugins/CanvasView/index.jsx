import {
  useComponentRender,
  useEffect,
  useRef,
  useState,
} from "@elf-framework/sapa";

export function Canvas3D() {
  const canvasRef = useRef();
  const lastCanvasWidth = useRef(0);
  const [counter, setCounter] = useState(0);
  useComponentRender("resize.window", {
    debounce: 100,
    checkFunction: () => {
      setCounter((v) => v + 1);
      return true;
    },
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    const rectWidth = canvasRef.current.clientWidth;
    const rectHeight = canvasRef.current.clientHeight;

    const width = canvasRef.current.clientWidth;

    if (lastCanvasWidth.current != width) {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const backingStoreRatio = ctx.backingStorePixelRatio || 1;
      const ratio = devicePixelRatio / backingStoreRatio;

      canvasRef.current.width = rectWidth * ratio;
      canvasRef.current.height = rectHeight * ratio;

      lastCanvasWidth.current = width;
      // ctx.scale(ratio, ratio);
    }

    let requestId;

    function draw() {
      const canvas = ctx.canvas;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgb(255, 100, 0)";
      ctx.fillRect(100, 100, 200, 200);
      ctx.clearRect(120, 120, 160, 160);
      ctx.strokeStyle = "rgb(255, 255, 0)";
      ctx.lineWidth = 5;
      ctx.strokeRect(80, 160, 80, 80);
    }

    function render() {
      draw();

      requestId = requestAnimationFrame(render);
    }

    render();
    return () => {
      console.log("cancelAnimationFrame");
      cancelAnimationFrame(requestId);
    };
  }, [lastCanvasWidth, counter]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        backgroundColor: "#ececec",
      }}
    ></canvas>
  );
}
