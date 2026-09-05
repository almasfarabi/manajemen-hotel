export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-margin-desktop">
      <div className="flex items-center gap-unit-md">
        <span className="material-symbols-outlined text-on-surface-variant">search</span>
        <span className="text-body-md text-on-surface-variant">Cari reservasi, tamu, atau nomor kamar...</span>
      </div>
      <div className="flex items-center gap-unit-md">
        <button className="p-unit-xs rounded-full hover:bg-surface-container-high text-on-surface-variant">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </header>
  )
}
