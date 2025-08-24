import Image from "next/image";

interface Props {
  id: number;
  title: string;
  image: string;
}

export default function MagazineCard({ id, title, image }: Props) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden" }}>
      <Image src={image} alt={title} width={400} height={250} style={{ objectFit: "cover" }} />
      <div style={{ padding: "8px" }}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}