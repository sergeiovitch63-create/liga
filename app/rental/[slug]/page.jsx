import { notFound } from "next/navigation";
import BackLink from "../../../components/BackLink";
import RentalBikeDetail from "../../../components/RentalBikeDetail";
import SiteChrome from "../../../components/SiteChrome";
import { getBikeBySlug, getBikeSlugs } from "../../../data/bikes";

export function generateStaticParams() {
  return getBikeSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const bike = getBikeBySlug(params.slug);
  return {
    title: bike ? `${bike.model} — Лига Скорости` : "Аренда"
  };
}

export default function RentalSlugPage({ params }) {
  const bike = getBikeBySlug(params.slug);
  if (!bike) notFound();

  return (
    <SiteChrome>
      <main className="min-h-screen px-5 pb-24 pt-24 md:px-12">
        <div className="mx-auto max-w-[1160px]">
          <BackLink />
          <RentalBikeDetail bike={bike} />
        </div>
      </main>
    </SiteChrome>
  );
}
