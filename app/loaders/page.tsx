import MandalaLoader from "@/components/loaders/Mandala";
import Link from "next/link";

export default function LoaderPage() {
  return (
    <div className="min-h-screen items-center flex justify-center">
      <Link href="/">go home</Link>
      <MandalaLoader />
    </div>
  );
}
