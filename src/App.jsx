import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MetricsGrid from './components/MetricsGrid'
import RoomGrid from './components/RoomGrid'
import HousekeepingPanel from './components/HousekeepingPanel'
import QuickActions from './components/QuickActions'
import TambahKamar from './pages/TambahKamar'
import FrontDeskKalender from './pages/FrontDeskKalender'
import PengaturanKamarOTA from './pages/PengaturanKamarOTA'

export default function App() {
  return (
    <div className="bg-surface font-body-md text-on-surface">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="relative pt-16 bg-surface min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-col w-full p-margin-desktop gap-unit-xl">
                  <div className="flex flex-col gap-unit-md">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-label-sm uppercase tracking-wider text-primary font-bold">AuraStay PMS Core</span>
                        <h1 className="font-headline-xl text-on-surface">Status Kamar & Dashboard Real-time</h1>
                      </div>
                      <div className="flex items-center gap-unit-md">
                        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl text-on-surface hover:bg-surface-container-highest transition-all text-label-md">
                          <span className="material-symbols-outlined text-[18px]">refresh</span>
                          <span>Sinkronisasi OTA</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-xl hover:bg-primary-container transition-all text-label-md shadow-sm">
                          <span className="material-symbols-outlined text-[18px]">add</span>
                          <span>Check-in Cepat</span>
                        </button>
                      </div>
                    </div>
                    <MetricsGrid />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-lg">
                    <div className="lg:col-span-8 flex flex-col gap-unit-md">
                      <div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-md">
                        <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
                          <div className="flex items-center gap-2">
                            <h2 className="font-headline-md text-on-surface">Matriks Kamar</h2>
                            <span className="px-2.5 py-0.5 bg-surface-container-high text-on-surface-variant rounded-full text-label-sm font-medium">Lantai 1 - 5</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg text-label-sm font-medium">Semua</button>
                            <button className="px-3 py-1.5 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest rounded-lg text-label-sm font-medium transition-all">Deluxe</button>
                            <button className="px-3 py-1.5 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest rounded-lg text-label-sm font-medium transition-all">Suite</button>
                            <button className="px-3 py-1.5 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest rounded-lg text-label-sm font-medium transition-all">Superior</button>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 py-2 px-3 bg-surface rounded-lg text-label-sm text-on-surface-variant">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                            <span>Terisi</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            <span>Kosong / Bersih</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <span>Kotor / Cleaning</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-error"></div>
                            <span>Maintenance</span>
                          </div>
                        </div>
                        <RoomGrid />
                      </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-unit-md">
                      <HousekeepingPanel />
                      <QuickActions />
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/tambah-kamar" element={<TambahKamar />} />
            <Route path="/front-desk" element={<FrontDeskKalender />} />
            <Route path="/rooms-ota" element={<PengaturanKamarOTA />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
