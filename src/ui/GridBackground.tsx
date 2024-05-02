export function GridBackgroundDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-black bg-grid-white/[0.2]  flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="z-20 py-8 text-4xl font-bold text-transparent  sm:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">
        {children}
      </p>
    </div>
  );
}
