export default function Skeleton() {
  return (
    <div className="w-full h-screen p-3 md:p-6 space-y-3 max-w-6xl mx-auto">
      <div className="w-full h-12 bg-neutral-800 animate-pulse rounded-lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full h-48 bg-neutral-800 animate-pulse rounded-lg" />
        <div className="w-full h-48 bg-neutral-800 animate-pulse rounded-lg" />
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="w-48 h-12 bg-neutral-800 animate-pulse rounded-lg" />
        <div className="w-1/2 h-12 bg-neutral-800 animate-pulse rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="w-full h-36 bg-neutral-800 animate-pulse rounded-lg" />
        <div className="w-full h-36 bg-neutral-800 animate-pulse rounded-lg" />
        <div className="w-full h-36 bg-neutral-800 animate-pulse rounded-lg" />
      </div>
    </div>
  );
}
