const stats = [
  {
    label: 'Total Kamar Aktif',
    value: '124 Unit',
    icon: 'hotel',
    note: '98% Siap Huni (Housekeeping OK)',
    noteIcon: 'check_circle',
    color: 'text-primary',
    bg: 'bg-surface-container-high',
    extra: 'bg-[#90CAF9]/20',
  },
  {
    label: 'Channel Terhubung',
    value: '3 OTA Aktif',
    icon: 'hub',
    note: 'Latensi Sinkronisasi < 1s',
    noteIcon: 'bolt',
    color: 'text-primary',
    bg: 'bg-surface-container-high',
    extra: 'bg-[#2196F3]/20',
  },
  {
    label: "Rata-rata Harga (ADR)",
    value: 'Rp 850.000',
    icon: 'payments',
    note: '+12% dari bulan lalu',
    noteIcon: 'trending_up',
    color: 'text-primary',
    bg: 'bg-surface-container-high',
    extra: 'bg-[#0D47A1]/10',
  },
  {
    label: 'Layanan Tambahan Aktif',
    value: '8 Layanan',
    icon: 'room_service',
    note: 'Populer: Spa & Airport Shuttle',
    noteIcon: 'star',
    color: 'text-primary',
    bg: 'bg-surface-container-high',
    extra: 'bg-[#90CAF9]/30',
  },
]

const channels = [
  { name: 'Traveloka', abbr: 'T', id: 'TVLK-99281-ID', status: 'Connected', mapping: '124 / 124 Kamar', lastPing: '2 detik lalu', komisi: '15%' },
  { name: 'Agoda', abbr: 'A', id: 'AGD-44192-INT', status: 'Connected', mapping: '120 / 124 Kamar', lastPing: '5 detik lalu', komisi: '18%' },
  { name: 'Booking.com', abbr: 'B', id: 'BKG-88301-EU', status: 'Connected', mapping: '124 / 124 Kamar', lastPing: '1 detik lalu', komisi: '15%' },
]

const categories = [
  { name: 'Deluxe King Room', guest: '2 Dewasa, 1 Anak', luas: '32 m²', unit: '45 Unit', harga: 'Rp 750.000', img: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUhVKiGRkw2BCzW12NsO4BfC-hmyKq7ZN35veLSUDm2O_7-c3IkHwkUzDZXaz2vNYDr2Xzr_GLbUHzOfDEOCI1lNNlWyQJHUPYI5Fegvok7zhelExFAwwj57M3dNMuYnuHWrRBckvmcyELR_faFduISYMCjOE3tJ1MfSUWhMdPDSdMMJnOFfPz0QSYUxEXNDyovblPrpBrtlWtqWLf2MASSVEcNHKrNgi0O7l4aNCmYrB8HFssyX0reg')" },
  { name: 'Executive Suite', guest: '3 Dewasa, 2 Anak', luas: '54 m²', unit: '18 Unit', harga: 'Rp 1.450.000', img: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1OEGCo8pQT43pMQhJlvWf8aqAx6XI1lqg2_P3DhipH7tZgqSb7rwcaSb9j2Q-yaUhP0yRT0-TyjR82AS0O6tccUmgeul__NWahd6D4suMliUpxFV73e13a_65vwz3UlqN6IZUIgNx0tzrQGoBv7OwonePGerEv2buVRXb7IPFHzpJUoSJYiMFrT3dOrGHsHHdNPAmD87s7YjviGUR0oTqthBjahsCIK6xF1ESu6BR4Xp-VX9YYfGTVQ')" },
  { name: 'Superior Twin Room', guest: '2 Dewasa', luas: '28 m²', unit: '61 Unit', harga: 'Rp 650.000', img: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsbxeWvjbJneC76PXphpugFtTfwif5Z-Bpns72x2RU2-EdTtuz6U96kOPYH_eltamLxYBK-iEBDD7qzBbbXjiLe2di4t1_GS335Z1NTDKmXBNj9DroTlnacvwb9wk3MYNGvrX27INJmoCJCcuqRV_qQhqKioiQEXlOVaVVOSugIA6w2BTW3TtkfP1MX-CBu4jBBD_ayWHRZP28OqZ1WHcypPZ6X94eqJy2mObWAwtNa92bni97qZKDpg')" },
]

const yieldRules = [
  { title: 'High Occupancy (>85%)', value: '+20% Tarif', desc: 'Otomatis menaikkan harga semua channel saat kamar tersisa kurang dari 15%.', color: 'text-primary' },
  { title: 'Weekend Surge (Jum - Sab)', value: '+15% Tarif', desc: 'Penyesuaian tarif akhir pekan terjadwal secara berkala.', color: 'text-primary' },
  { title: 'Last Minute Promo (< 24h)', value: '-10% Diskon', desc: 'Meningkatkan konversi okupansi kamar kosong di menit terakhir.', color: 'text-error' },
]

const amenities = [
  { icon: 'ac_unit', name: 'Air Conditioner (AC) Inverter', kategori: 'Semua Kategori (124 Unit)', ota: 'Mapped (Traveloka, Agoda, Booking)', kondisi: 'Prima (100%)' },
  { icon: 'tv', name: 'Smart TV 50" 4K Netflix Ready', kategori: 'Deluxe King & Executive Suite', ota: 'Mapped (Traveloka, Agoda)', kondisi: 'Prima (98%)' },
  { icon: 'bathtub', name: 'Bathtub & Hot Water Jacuzzi', kategori: 'Executive Suite (18 Unit)', ota: 'Mapped (All Channels)', kondisi: 'Prima (100%)' },
  { icon: 'wifi', name: 'High-Speed Dedicated Wi-Fi (100 Mbps)', kategori: 'Semua Kategori (124 Unit)', ota: 'Mapped (All Channels)', kondisi: 'Prima (100%)' },
]

const services = [
  { icon: 'room_service', title: 'In-Room Dining (Room Service)', desc: 'Aneka menu lokal & internasional diantar langsung ke kamar tamu.', harga: 'Mulai dari', price: 'Rp 45.000', badge: 'Tersedia 24 Jam', btn: 'Kelola Menu' },
  { icon: 'directions_car', title: 'Vehicle Rental & Airport Shuttle', desc: 'Rental mobil harian dengan supir profesional atau antar-jemput bandara.', harga: 'Tarif / Hari', price: 'Rp 350.000', badge: 'Armada Ready', btn: 'Kelola Armada' },
  { icon: 'spa', title: 'Spa & Wellness Packages', desc: 'Pijat relaksasi tradisional, aromaterapi, dan perawatan tubuh eksklusif.', harga: 'Mulai dari', price: 'Rp 200.000', badge: 'Booking Terjadwal', btn: 'Kelola Sesi' },
]

export default function PengaturanKamarOTA() {
  return (
    <div className="flex flex-col w-full p-margin-desktop gap-unit-xxl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-unit-md">
        <div>
          <div className="flex items-center gap-unit-xs mb-unit-xs">
            <span className="text-label-sm uppercase tracking-wider text-primary font-bold">Inventory & Channels</span>
            <span className="text-label-sm text-outline">•</span>
            <span className="text-label-sm text-outline">Real-time OTA Sync Active</span>
          </div>
          <h1 className="text-headline-xl text-on-surface">Manajemen Kamar & Channel Manager</h1>
        </div>
        <div className="flex items-center gap-unit-md">
          <button className="bg-surface-container-high text-on-surface hover:bg-surface-dim px-unit-lg py-unit-sm rounded-xl font-medium flex items-center gap-unit-xs transition-all shadow-sm">
            <span className="material-symbols-outlined text-[18px]">sync</span>
            Sinkronkan OTA Manual
          </button>
          <button className="bg-primary text-on-primary hover:bg-[#0D47A1] px-unit-lg py-unit-sm rounded-xl font-medium flex items-center gap-unit-xs transition-all shadow-md">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Tambah Kategori Kamar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-unit-lg">
        {stats.map((s, i) => (
          <div key={i} className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 ${s.extra} rounded-full blur-xl`}></div>
            <div>
              <div className="flex justify-between items-center mb-unit-md">
                <span className="text-label-md text-on-surface-variant font-medium">{s.label}</span>
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
              </div>
              <div className="text-headline-lg font-bold text-on-surface">{s.value}</div>
            </div>
            <div className={`mt-4 flex items-center gap-unit-xs text-label-sm ${s.color}`}>
              <span className="material-symbols-outlined text-[16px]">{s.noteIcon}</span>
              <span>{s.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-unit-lg gap-unit-md">
          <div>
            <h2 className="text-headline-md font-bold text-on-surface">Status Sinkronisasi Channel Manager</h2>
            <p className="text-body-md text-on-surface-variant">Monitoring ketersediaan tarif dan kamar secara real-time di berbagai platform OTA.</p>
          </div>
          <div className="flex items-center gap-unit-sm bg-[#E3F2FD] px-unit-md py-unit-xs rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-label-sm font-medium text-primary">Live Two-Way Sync Active</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-lg">
          {channels.map((ch) => (
            <div key={ch.name} className="bg-surface-container-low p-unit-lg rounded-xl flex flex-col justify-between gap-unit-md">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-unit-md">
                  <div className="w-12 h-12 rounded-xl bg-[#2196F3]/10 flex items-center justify-center text-primary font-bold text-headline-md">{ch.abbr}</div>
                  <div>
                    <h3 className="text-headline-sm font-bold text-on-surface">{ch.name}</h3>
                    <span className="text-label-sm text-on-surface-variant">ID: {ch.id}</span>
                  </div>
                </div>
                <span className="bg-primary/10 text-primary px-unit-sm py-unit-xs rounded-full text-label-sm font-medium">{ch.status}</span>
              </div>
              <div className="space-y-2 py-unit-sm">
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Mapping Status</span>
                  <span className="font-medium text-on-surface">{ch.mapping}</span>
                </div>
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Last Ping</span>
                  <span className="font-medium text-on-surface">{ch.lastPing}</span>
                </div>
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Komisi</span>
                  <span className="font-medium text-primary">{ch.komisi}</span>
                </div>
              </div>
              <div className="flex items-center gap-unit-sm pt-unit-sm">
                <button className="flex-1 bg-surface-container-lowest hover:bg-surface-container-high py-unit-sm rounded-xl text-label-md font-medium text-on-surface transition-all">Konfigurasi</button>
                <button className="p-unit-sm bg-surface-container-lowest hover:bg-surface-container-high rounded-xl text-on-surface"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-unit-xl">
        <div className="lg:col-span-2 bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-unit-lg">
            <div>
              <h2 className="text-headline-md font-bold text-on-surface">Kategori Kamar & Harga Dasar</h2>
              <p className="text-body-md text-on-surface-variant">Atur kapasitas, tarif dasar per malam, dan ketersediaan unit.</p>
            </div>
            <div className="flex gap-unit-sm">
              <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">filter_list</span>
              <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">sort</span>
            </div>
          </div>
          <div className="space-y-unit-md">
            {categories.map((cat, i) => (
              <div key={i} className="bg-surface-container-low p-unit-lg rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-unit-md hover:bg-surface-container transition-all">
                <div className="flex items-center gap-unit-md">
                  <div className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0" style={{ backgroundImage: cat.img }}></div>
                  <div>
                    <h3 className="text-headline-sm font-bold text-on-surface">{cat.name}</h3>
                    <div className="flex items-center gap-unit-sm text-body-sm text-on-surface-variant mt-0.5">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">group</span> {cat.guest}</span>
                      <span>•</span>
                      <span>{cat.luas}</span>
                      <span>•</span>
                      <span className="text-primary font-medium">{cat.unit}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto gap-unit-xl">
                  <div className="text-right">
                    <div className="text-headline-sm font-bold text-on-surface">{cat.harga}</div>
                    <span className="text-label-sm text-on-surface-variant">/ malam (Base Rate)</span>
                  </div>
                  <div className="flex items-center gap-unit-sm">
                    <button className="p-unit-sm bg-surface-container-lowest hover:bg-surface-container-high rounded-xl text-on-surface transition-all"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                    <button className="p-unit-sm bg-surface-container-lowest hover:bg-surface-container-high rounded-xl text-on-surface transition-all"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-headline-md font-bold text-on-surface mb-unit-xs">Yield Management</h2>
            <p className="text-body-md text-on-surface-variant mb-unit-lg">Atur otomatisasi kenaikan harga berdasarkan okupansi hotel.</p>
            <div className="space-y-unit-lg">
              {yieldRules.map((y, i) => (
                <div key={i} className="bg-surface-container-low p-unit-md rounded-xl">
                  <div className="flex justify-between items-center mb-unit-xs">
                    <span className="text-headline-sm font-bold text-on-surface">{y.title}</span>
                    <span className={`${y.color} font-bold text-headline-sm`}>{y.value}</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">{y.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full mt-unit-xl bg-surface-container-high hover:bg-surface-dim text-on-surface py-unit-md rounded-xl font-medium transition-all text-center">
            Kelola Aturan Yield Lanjutan
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-unit-lg gap-unit-md">
          <div>
            <h2 className="text-headline-md font-bold text-on-surface">Manajemen Fasilitas Kamar</h2>
            <p className="text-body-md text-on-surface-variant">Daftar fasilitas yang terasosiasi pada setiap kategori kamar untuk sinkronisasi OTA.</p>
          </div>
          <div className="flex items-center gap-unit-md">
            <div className="flex items-center bg-surface-container-low px-unit-md py-unit-xs rounded-xl">
              <span className="material-symbols-outlined text-outline text-[18px] mr-2">search</span>
              <input className="bg-transparent border-none outline-none text-body-md text-on-surface placeholder:text-outline w-48" placeholder="Cari fasilitas..." type="text" />
            </div>
            <button className="bg-primary text-on-primary hover:bg-[#0D47A1] px-unit-lg py-unit-sm rounded-xl font-medium text-label-md transition-all">Tambah Fasilitas</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-label-md">
                <th className="p-unit-md rounded-l-xl">Nama Fasilitas</th>
                <th className="p-unit-md">Kategori Terkait</th>
                <th className="p-unit-md">Status OTA</th>
                <th className="p-unit-md">Kondisi Unit</th>
                <th className="p-unit-md rounded-r-xl text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-body-md text-on-surface divide-y divide-surface-container-low">
              {amenities.map((a, i) => (
                <tr key={i} className="hover:bg-surface-container-low/50 transition-all">
                  <td className="p-unit-md font-medium flex items-center gap-unit-sm">
                    <span className="material-symbols-outlined text-primary">{a.icon}</span>
                    {a.name}
                  </td>
                  <td className="p-unit-md text-on-surface-variant">{a.kategori}</td>
                  <td className="p-unit-md"><span className="bg-[#2196F3]/10 text-primary px-unit-sm py-unit-xs rounded-full text-label-sm font-medium">{a.ota}</span></td>
                  <td className="p-unit-md"><span className="text-primary font-medium">{a.kondisi}</span></td>
                  <td className="p-unit-md text-right">
                    <button className="text-primary hover:underline font-medium text-label-md mr-4">Edit</button>
                    <button className="text-error hover:underline font-medium text-label-md">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-unit-lg gap-unit-md">
          <div>
            <h2 className="text-headline-md font-bold text-on-surface">Manajemen Layanan Tambahan (Extra Services)</h2>
            <p className="text-body-md text-on-surface-variant">Layanan opsional yang dapat dipesan tamu saat reservasi atau langsung di front desk.</p>
          </div>
          <button className="bg-primary text-on-primary hover:bg-[#0D47A1] px-unit-lg py-unit-sm rounded-xl font-medium text-label-md transition-all flex items-center gap-unit-xs">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Tambah Layanan
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-lg">
          {services.map((s, i) => (
            <div key={i} className="bg-surface-container-low p-unit-lg rounded-xl flex flex-col justify-between gap-unit-md">
              <div>
                <div className="flex justify-between items-start mb-unit-md">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <span className="bg-primary/10 text-primary px-unit-sm py-unit-xs rounded-full text-label-sm font-medium">{s.badge}</span>
                </div>
                <h3 className="text-headline-sm font-bold text-on-surface mb-1">{s.title}</h3>
                <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
              </div>
              <div className="flex justify-between items-center pt-unit-md">
                <div>
                  <span className="text-label-sm text-on-surface-variant">{s.harga}</span>
                  <div className="text-headline-sm font-bold text-primary">{s.price}</div>
                </div>
                <button className="bg-surface-container-lowest hover:bg-surface-container-high px-unit-md py-unit-sm rounded-xl text-label-md font-medium text-on-surface transition-all">{s.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
