import { useInfiniteQuery } from "@tanstack/react-query";

interface Magazine {
  id: number;
  title: string;
  image: string;
}

async function fetchMagazines({ pageParam = 1, region }: { pageParam?: number; region: string }) {
  const res = await fetch(`https://picsum.photos/v2/list?page=${pageParam}&limit=6`);
  const data = await res.json();
  return data.map((item: any, idx: number) => ({
    id: item.id,
    title: `${region} - 더미 메거진 ${pageParam}-${idx + 1}`,
    image: item.download_url,
  }));
}

export function useInfiniteMagazines(region: string) {
  return useInfiniteQuery<Magazine[], Error>({
    queryKey: ["magazines", region],
    queryFn: ({ pageParam = 1 }) => fetchMagazines({ pageParam, region }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1, 
  });
}