const tasks = [
  {
    room: 'Kamar 103',
    info: 'Check-out baru • Deluxe King',
    status: 'Dibersihkan',
    statusBg: 'bg-amber-100',
    statusColor: 'text-amber-800',
    person: 'Siti Aminah',
    action: 'Selesai',
  },
  {
    room: 'Kamar 203',
    info: 'Persiapan Tamu VIP • Deluxe King',
    status: 'Proses',
    statusBg: 'bg-amber-100',
    statusColor: 'text-amber-800',
    person: 'Budi Santoso',
    action: 'Selesai',
  },
  {
    room: 'Kamar 302',
    info: 'Inspeksi Berkala • Exec Suite',
    status: 'Inspeksi',
    statusBg: 'bg-secondary-fixed',
    statusColor: 'text-on-secondary-fixed',
    person: 'Dewi Lestari',
    action: 'Verifikasi',
  },
]

export default function HousekeepingPanel() {
  return (
    <div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">cleaning_services</span>
          <h2 className="font-headline-md text-on-surface">Tugas Housekeeping</h2>
        </div>
        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-label-sm font-medium">8 Pending</span>
      </div>
      <div className="flex flex-col gap-3 mt-1">
        {tasks.map((t, i) => (
          <div key={i} className="p-3 bg-surface rounded-xl flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-headline-sm text-on-surface">{t.room}</span>
                <span className="text-body-sm text-on-surface-variant block">{t.info}</span>
              </div>
              <span className={`px-2 py-1 ${t.statusBg} ${t.statusColor} rounded-lg text-label-sm font-medium`}>
                {t.status}
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-surface-container-high text-body-sm">
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">person</span>
                <span>{t.person}</span>
              </div>
              <button className="text-primary font-medium hover:underline text-label-md">{t.action}</button>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-2.5 bg-surface-container-high text-on-surface rounded-xl hover:bg-surface-container-highest transition-all text-label-md font-medium mt-2">
        Lihat Semua Tugas (8)
      </button>
    </div>
  )
}
