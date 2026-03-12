export default function Index() {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Left Section - Navy Blue (50%) */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute left-0 top-0 w-[50%] h-full bg-[#1A1A59] z-10 animate-slide-in-left"></div>

        {/* Right Section - Burgundy Red (50%) */}
        <div className="absolute right-0 top-0 w-[50%] h-full bg-[#8A1919] z-10 animate-slide-in-right"></div>
      </div>

      {/* Centered Image */}
      <div className="absolute inset-0 flex items-end justify-center z-20">
        <div className="animate-scale-in">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/960fdbe5cbd2ea8636d43f75f1ba0a2bef04942e?width=1636"
            alt="Kendrick Lamar"
            className="h-screen w-auto object-cover object-bottom opacity-85"
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-30 h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8 lg:p-12 flex justify-between items-start animate-fade-in-down relative">
          <div className="text-white font-island-moments text-4xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none tracking-wide">
            K-dot
          </div>

          {/* Menu Button - Mobile */}
          <button className="md:hidden text-white flex flex-col items-center gap-2">
            <span className="text-lg font-semibold">Menu</span>
            <div className="w-8 h-0.5 bg-white"></div>
          </button>
        </header>

        {/* Menu Button - Desktop (Right Side) */}
        <div className="hidden md:flex absolute top-8 lg:top-12 right-8 lg:right-16 flex-col items-center gap-2 z-40 animate-fade-in-down">
          <span className="text-white text-xl lg:text-2xl xl:text-[25px] font-semibold">
            Menu
          </span>
          <div className="w-12 lg:w-16 h-1 bg-white"></div>
        </div>

        {/* Bottom Left Content */}
        <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-6 md:left-8 lg:left-12 space-y-6 md:space-y-8 animate-fade-in-up-delayed">
          {/* Divider Line */}
          <div className="w-48 md:w-64 lg:w-[270px] h-px bg-white/50"></div>

          {/* Tagline */}
          <p className="text-white font-inria-serif italic text-lg md:text-2xl lg:text-3xl xl:text-[35px] leading-relaxed tracking-wide max-w-sm">
            Poetic justice in every bar.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3 md:space-y-4 lg:space-y-[11px]">
            <button className="block text-white font-inria-serif text-lg md:text-2xl lg:text-[30px] font-light tracking-wide hover:opacity-80 transition-opacity text-left animate-fade-in-stagger-1">
              Listen now
            </button>
            <button className="block text-white font-inria-serif text-lg md:text-2xl lg:text-[30px] font-light tracking-wide hover:opacity-80 transition-opacity text-left animate-fade-in-stagger-2">
              Tour dates
            </button>
            <button className="block text-white font-inria-serif text-lg md:text-2xl lg:text-[30px] font-light tracking-wide hover:opacity-80 transition-opacity text-left animate-fade-in-stagger-3">
              Merch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
