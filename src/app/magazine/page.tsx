"use client";

import { useAppSelector } from "@/store/hooks";
import { useInfiniteMagazines } from "@/hooks/useInfiniteMagazine";
import { useRef, useEffect } from "react";
import MagazineCard from "@/components/MagazineCard";
import RegionButtonMagazine from "@/components/RegionButtonMagazine";

export default function MagazinePage() {
  const { selectedRegion } = useAppSelector((state) => state.ui);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteMagazines(selectedRegion);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer로 무한 스크롤
  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <div>
      <RegionButtonMagazine />
      <h1>Magazine - {selectedRegion}</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {data?.pages.flat().map((mag) => (
          <MagazineCard key={mag.id} {...mag} />
        ))}
      </div>
      <div ref={loadMoreRef} style={{ height: "40px" }} />
      {isFetchingNextPage && <p>로딩 중...</p>}
    </div>
  );
}