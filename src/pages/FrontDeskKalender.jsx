const stats = [
  {
    label: 'Tingkat Okupansi',
    value: '84.2%',
    badge: '+4.5% vs kemarin',
    badgeColor: 'text-emerald-600 bg-emerald-50',
    icon: 'hotel',
    color: 'bg-primary-fixed text-on-primary-fixed',
    barColor: 'bg-primary',
    barWidth: '84.2%',
    extra: 'bg-primary/5',
  },
  {
    label: 'Check-In Hari Ini',
    value: '18',
    badge: '12 Selesai',
    badgeColor: 'text-primary bg-primary-fixed',
    icon: 'login',
    color: 'bg-tertiary-fixed text-on-tertiary-fixed',
    barColor: 'bg-tertiary-container',
    barWidth: '66.6%',
    extra: 'bg-tertiary/5',
    note: '6 tamu dijadwalkan sore ini',
  },
  {
    label: 'Check-Out Hari Ini',
    value: '14',
    badge: '3 Pending Housekeeping',
    badgeColor: 'text-amber-600 bg-amber-50',
    icon: 'logout',
    color: 'bg-secondary-fixed text-on-secondary-fixed',
    barColor: 'bg-secondary',
    barWidth: '78.5%',
    extra: 'bg-secondary-fixed/30',
    note: 'Pembersihan kamar aktif',
  },
  {
    label: 'Pendapatan Harian',
    value: 'Rp 28.4 Jt',
    badge: 'ADR Rp 1.6M',
    badgeColor: 'text-emerald-600 bg-emerald-50',
    icon: 'payments',
    color: 'bg-primary-fixed text-on-primary-fixed',
    barColor: 'bg-primary',
    barWidth: '72%',
    extra: 'bg-primary/5',
    note: 'Termasuk F&B dan Layanan',
  },
]

const calendarRows = [
  {
    name: 'Deluxe Ocean (101)',
    desc: 'Double Bed • Sea View',
    cells: [
      { span: 3, bg: 'bg-primary text-on-primary', label: 'Mr. Alexander Vance (VIP)', icon: true },
      { span: 2, bg: 'bg-secondary-fixed text-on-secondary-fixed', label: 'Siti Rahma (OTA)', icon: true },
      { span: 2, bg: 'bg-surface-container-high text-on-surface-variant', label: 'Tersedia', icon: false },
    ],
  },
  {
    name: 'Exec Suite (205)',
    desc: 'King Bed • Balcony',
    cells: [
      { span: 4, bg: 'bg-tertiary-container text-on-tertiary-container', label: 'Dr. Jonathan Harker (Direct)', icon: true },
      { span: 3, bg: 'bg-surface-container-high text-on-surface-variant', label: 'Tersedia', icon: false },
    ],
  },
  {
    name: 'Superior Twin (302)',
    desc: '2 Single Beds • City View',
    cells: [
      { span: 2, bg: 'bg-surface-container-high text-on-surface-variant', label: 'Tersedia', icon: false },
      { span: 5, bg: 'bg-primary text-on-primary', label: 'Family Group Booking (Budi Santoso)', icon: true },
    ],
  },
  {
    name: 'Penthouse (501)',
    desc: 'Private Pool • Butler',
    cells: [
      { span: 7, bg: 'bg-secondary-fixed text-on-secondary-fixed', label: 'CEO Delegation - TechCorp (Weekly)', icon: true },
    ],
  },
]

const funnel = [
  { label: 'Kunjungan Website', value: '1,420 Sesi', percent: '100%', bar: 'bg-primary' },
  { label: 'Pencarian Kamar Tanggal Tersedia', value: '480 Pencarian', percent: '65%', bar: 'bg-primary-container' },
  { label: 'Konversi Checkout Berhasil', value: '34 Reservasi (Conversion 7.1%)', percent: '25%', bar: 'bg-emerald-500' },
]

const crmRows = [
  { initials: 'AV', name: 'Alexander Vance', status: 'VIP Platinum Member', visits: '14 Kali Menginap', spend: 'Total Spend: Rp 84.5 Jt', tags: ['High Floor', 'Extra Pillow'], avatar: 'bg-primary-fixed text-on-primary-fixed' },
  { initials: 'SR', name: 'Siti Rahma', status: 'Regular Guest', visits: '3 Kali Menginap', spend: 'Total Spend: Rp 12.1 Jt', tags: ['Non-Smoking', 'Twin Bed'], avatar: 'bg-secondary-fixed text-on-secondary-fixed' },
  { initials: 'JH', name: 'Dr. Jonathan Harker', status: 'Corporate Partner', visits: '8 Kali Menginap', spend: 'Total Spend: Rp 45.0 Jt', tags: ['Quiet Room', 'Late Checkout'], avatar: 'bg-tertiary-fixed text-on-tertiary-fixed' },
]

export default function FrontDeskKalender() {
  return (
    <div className="flex flex-col w-full pb-16">
      <div className="px-margin-desktop pt-margin-desktop mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-headline-xl text-on-surface">Front Desk & Kalender Reservasi</h1>
            <p className="font-body-md text-on-surface-variant">Kelola ketersediaan kamar, check-in tamu, dan riwayat CRM secara real-time.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-surface-container-high hover:bg-surface-dim text-on-surface px-4 py-2.5 rounded-xl font-label-md flex items-center gap-2 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter Kamar
            </button>
            <button className="bg-primary hover:bg-[#00497d] text-on-primary px-4 py-2.5 rounded-xl font-label-md flex items-center gap-2 transition-all shadow-md">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Reservasi Baru
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl p-5 shadow-sm relative overflow-hidden group">
              <div className={`absolute right-0 top-0 w-24 h-24 ${s.extra} rounded-bl-full transition-transform group-hover:scale-110`}></div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm uppercase tracking-wider text-on-surface-variant">{s.label}</span>
                <span className={`p-2 rounded-xl ${s.color} material-symbols-outlined text-[20px]`}>{s.icon}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg text-on-surface">{s.value}</span>
                <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${s.badgeColor}`}>{s.badge}</span>
              </div>
              {s.note && <p className="text-xs text-on-surface-variant mt-4">{s.note}</p>}
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-4 overflow-hidden">
                <div className={`${s.barColor} h-full rounded-full`} style={{ width: s.barWidth }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-margin-desktop mb-8">
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <h2 className="font-headline-md text-on-surface">Kalendar Reservasi & Kamar</h2>
              <div className="flex items-center bg-surface-container-high rounded-lg p-1">
                <button className="px-3 py-1 bg-surface-container-lowest text-on-surface rounded font-label-sm shadow-sm">Hari Ini</button>
                <button className="px-3 py-1 text-on-surface-variant hover:text-on-surface rounded font-label-sm">Minggu</button>
                <button className="px-3 py-1 text-on-surface-variant hover:text-on-surface rounded font-label-sm">Bulan</button>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-surface-container-high hover:bg-surface-dim text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <span className="font-headline-sm text-on-surface px-2">14 - 20 Oktober 2023</span>
                <button className="p-2 rounded-lg bg-surface-container-high hover:bg-surface-dim text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-primary inline-block"></span> Terisi</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-secondary-fixed inline-block"></span> VIP</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-surface-container-high inline-block"></span> Kosong</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-8 gap-2 mb-3 pb-3 border-b border-surface-container-high">
                <div className="font-label-md text-on-surface-variant">Tipe Kamar</div>
                <div className="text-center font-label-md text-on-surface">Sen, 14 Okt</div>
                <div className="text-center font-label-md text-on-surface">Sel, 15 Okt</div>
                <div className="text-center font-label-md text-on-surface">Rab, 16 Okt</div>
                <div className="text-center font-label-md text-on-surface">Kam, 17 Okt</div>
                <div className="text-center font-label-md text-on-surface">Jum, 18 Okt</div>
                <div className="text-center font-label-md text-on-surface">Sab, 19 Okt</div>
                <div className="text-center font-label-md text-on-surface">Min, 20 Okt</div>
              </div>
              <div className="space-y-3">
                {calendarRows.map((row) => (
                  <div key={row.name} className="grid grid-cols-8 gap-2 items-center py-2 bg-surface-container-low rounded-xl px-3">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-on-surface">{row.name}</span>
                      <span className="text-xs text-on-surface-variant">{row.desc}</span>
                    </div>
                    {row.cells.map((cell, idx) => (
                      <div key={idx} className={`col-span-${cell.span} ${cell.bg} rounded-lg p-2 text-xs font-medium flex items-center justify-between shadow-sm relative group cursor-pointer`}>
                        <span className="truncate">{cell.label}</span>
                        {cell.icon && <span className="material-symbols-outlined text-[14px]">more_vert</span>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-md text-on-surface">Ringkasan Mesin Pemesanan Langsung</h3>
              <span className="bg-primary-fixed text-on-primary-fixed text-xs font-medium px-2.5 py-1 rounded-full">Live Widget</span>
            </div>
            <p className="text-body-sm text-on-surface-variant mb-6">Analisis instan dari sumber konversi direct booking website hotel dalam 24 jam terakhir.</p>
            <div className="space-y-4 mb-6">
              {funnel.map((f, i) => (
                <div key={i} className="bg-surface-container-low p-4 rounded-xl">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-on-surface-variant">{f.label}</span>
                    <span className="font-bold text-on-surface">{f.value}</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className={`${f.bar} h-full rounded-full`} style={{ width: f.percent }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">lightbulb</span>
              <div className="text-xs text-on-surface-variant">
                <strong className="text-on-surface block mb-1">Rekomendasi Pendapatan Otomatis:</strong>
                Lonjakan pencarian untuk akhir pekan depan. Disarankan menaikkan tarif kamar Deluxe sebesar 12% untuk mengoptimalkan RevPAR.
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-surface-container-high flex justify-between items-center">
            <span className="text-xs text-on-surface-variant">Sinkronisasi OTA Terakhir: 2 menit lalu</span>
            <button className="text-primary font-label-md hover:underline flex items-center gap-1">
              Kelola Channel Manager <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <h3 className="font-headline-md text-on-surface">Pencarian Cepat Guest CRM & Preferensi</h3>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">search</span>
                <input className="bg-surface-container-low pl-9 pr-4 py-2 rounded-xl text-xs text-on-surface outline-none w-full sm:w-64 focus:ring-2 focus:ring-primary/20" placeholder="Cari nama tamu, email, telp..." type="text" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container-high text-xs text-on-surface-variant">
                    <th className="py-3 font-medium">Nama Tamu & Status</th>
                    <th className="py-3 font-medium">Riwayat Kunjungan</th>
                    <th className="py-3 font-medium">Preferensi Kamar</th>
                    <th className="py-3 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-surface-container-low">
                  {crmRows.map((row, i) => (
                    <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full ${row.avatar} font-bold flex items-center justify-center text-xs`}>{row.initials}</div>
                          <div>
                            <div className="font-headline-sm text-on-surface">{row.name}</div>
                            <span className="text-xs text-primary font-medium">{row.status}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="text-xs text-on-surface">{row.visits}</div>
                        <span className="text-xs text-on-surface-variant">{row.spend}</span>
                      </td>
                      <td className="py-3">
                        <div className="flex flex-wrap gap-1">
                          {row.tags.map((tag) => (
                            <span key={tag} className="bg-surface-container-high text-on-surface-variant text-xs px-2 py-0.5 rounded">{tag}</span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 text-right">
                        <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-surface-container-high flex justify-between items-center">
            <span className="text-xs text-on-surface-variant">Menampilkan 3 dari 1,240 Total Database Tamu</span>
            <button className="text-primary font-label-md hover:underline flex items-center gap-1">
              Buka Modul CRM Lengkap <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-margin-desktop mt-8">
        <div className="relative rounded-xl overflow-hidden p-8 bg-cover bg-center min-h-[220px] flex flex-col justify-end shadow-md" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBtTctJ8S0fVm8ii7Rti8JwffSX4WbqwjpDPgR_d_SuG2iQSaYIzBI5xkSBIAbIYudI10pTldcfiKHCukejPJCMvXXyorEPmLdVU42MVN-he7NoR0iKT1lwh4hmeI__eckjpN7OzgAJlGxBlTRcmmCjK0GxnQhW6ojkcwx9zA3MuYlX28QIrBQn3sCugghtek3EuOKuUMbq8Uv47bGtkBMTPohyVSD8wWpNghDDGORf7BanibJxgPMbw')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-secondary-fixed uppercase tracking-wider bg-primary/40 px-2.5 py-1 rounded-full mb-2 inline-block">AuraStay Operations Suite</span>
              <h3 className="font-headline-lg text-inverse-on-surface">Standar Pelayanan Prima & Otomasi Resepsionis</h3>
              <p className="text-body-sm text-inverse-on-surface/80 max-w-xl">Kurangi waktu tunggu tamu hingga 75% melalui integrasi fast check-in kiosk dan manajemen kunci digital seluler.</p>
            </div>
            <button className="bg-primary text-on-primary hover:bg-[#00497d] px-5 py-3 rounded-xl font-label-md transition-all shadow-lg whitespace-nowrap">
              Panduan Operasional Shift
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
