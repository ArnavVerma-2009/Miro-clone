import Image from "next/image";
export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src={"/empty-favorites.svg"}
        alt="empty-favorite"
        height={200}
        width={200}
      />
      <h2 className="text-2xl font-semibold mt-6">No results found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Star something to see it appear  here
      </p>
    </div>
  );
};
