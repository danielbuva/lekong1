import Spirograph from "../svgs/Spirographs";

export default function MandalaLoader() {
  return (
    <>
      {/* <span className="relative box-border inline-block h-96 w-96 animate-[rotation_4s_linear_infinite] rounded-full border-2 border-indigo-600 opacity-30 before:absolute before:left-5 before:top-5 before:h-60 before:w-60 before:rounded-full before:border-2 before:border-indigo-600 before:content-[''] after:absolute after:left-2 after:top-2 after:box-border after:h-80 after:w-80 after:rounded-full after:border-2 after:border-indigo-600 after:content-['']" /> */}
      <div className="absolute">
        <Spirograph />
      </div>
    </>
  );
}
