import { notFound } from "next/navigation";
import BackLink from "../../../components/BackLink";
import PartDetail from "../../../components/PartDetail";
import SiteChrome from "../../../components/SiteChrome";
import { findPartByUrlSegment, generatePartStaticParams } from "../../../data/parts";

export function generateStaticParams() {
  return generatePartStaticParams();
}

export function generateMetadata({ params }) {
  const part = findPartByUrlSegment(params.ref);
  return {
    title: part ? `${part.name} — Запчасти` : "Запчасть"
  };
}

export default function PartPage({ params }) {
  const part = findPartByUrlSegment(params.ref);
  if (!part) notFound();

  return (
    <SiteChrome>
      <main className="min-h-screen px-5 pb-24 pt-24 md:px-12">
        <div className="mx-auto max-w-[900px]">
          <BackLink />
          <PartDetail part={part} />
        </div>
      </main>
    </SiteChrome>
  );
}
