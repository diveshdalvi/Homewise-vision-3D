import Spline from "@splinetool/react-spline";

export default function ThreeBG() {
  return (
    <div className="relative w-full h-full">
      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/AmVFT4XmMNtSaQnk/scene.splinecode"
        scrollControls={false}
        onLoad={(spline) => {
          // Disable zoom
          spline.setZoom(1);
        }}
      />
    </div>
  );
}
