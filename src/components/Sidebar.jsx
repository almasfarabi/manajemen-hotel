import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col py-6">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="h-8 w-auto flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">AuraStay</span>
        </div>
        <span className="text-headline-sm font-bold text-primary">AuraStay PMS</span>
      </div>
      <nav className="flex-1 px-4 flex flex-col gap-unit-xs">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            [
              'flex items-center px-4 py-3 rounded-xl transition-all',
              isActive ? 'bg-primary-container text-on-primary-container font-medium' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
            ].join(' ')
          }
        >
          <span className="material-symbols-outlined mr-3 text-[20px]">dashboard</span>
          Status Kamar & Dashboard
        </NavLink>
        <NavLink
          to="/front-desk"
          className={({ isActive }) =>
            [
              'flex items-center px-4 py-3 rounded-xl transition-all',
              isActive ? 'bg-primary-container text-on-primary-container font-medium' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
            ].join(' ')
          }
        >
          <span className="material-symbols-outlined mr-3 text-[20px]">calendar_month</span>
          Front Desk & Kalender
        </NavLink>
        <NavLink
          to="/finance"
          className={({ isActive }) =>
            [
              'flex items-center px-4 py-3 rounded-xl transition-all',
              isActive ? 'bg-primary-container text-on-primary-container font-medium' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
            ].join(' ')
          }
        >
          <span className="material-symbols-outlined mr-3 text-[20px]">payments</span>
          Keuangan & Pembayaran
        </NavLink>
        <NavLink
          to="/rooms-ota"
          className={({ isActive }) =>
            [
              'flex items-center px-4 py-3 rounded-xl transition-all',
              isActive ? 'bg-primary-container text-on-primary-container font-medium' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
            ].join(' ')
          }
        >
          <span className="material-symbols-outlined mr-3 text-[20px]">hotel</span>
          Pengaturan Kamar & OTA
        </NavLink>
        <NavLink
          to="/tambah-kamar"
          className={({ isActive }) =>
            [
              'flex items-center px-4 py-3 rounded-xl transition-all',
              isActive ? 'bg-primary-container text-on-primary-container font-medium' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
            ].join(' ')
          }
        >
          <span className="material-symbols-outlined mr-3 text-[20px]">add_box</span>
          Tambah Kamar
        </NavLink>
      </nav>
    </aside>
  )
}
