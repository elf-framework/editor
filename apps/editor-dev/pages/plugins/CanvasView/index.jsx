export function Canvas3D() {
  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "black",
      }}
    ></canvas>
  );
}
