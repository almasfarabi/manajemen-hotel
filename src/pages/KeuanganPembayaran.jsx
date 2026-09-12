const stats = [
  {
    label: 'Total Pendapatan (Bulan Ini)',
    value: 'Rp 148.500.000',
    icon: 'payments',
    note: '+12.4% dari bulan lalu',
    noteIcon: 'trending_up',
    noteColor: 'text-emerald-700',
    color: 'text-on-primary-fixed',
    bg: 'bg-primary-fixed',
    extra: 'bg-primary/5',
  },
  {
    label: 'Pending / Piutang Tamu',
    value: 'Rp 12.350.000',
    icon: 'pending_actions',
    note: '8 invoice belum lunas',
    noteIcon: 'schedule',
    noteColor: 'text-on-surface-variant',
    color: 'text-on-secondary-fixed-variant',
    bg: 'bg-secondary-fixed',
    extra: 'bg-secondary-fixed/30',
  },
  {
    label: 'Rata-rata Pendapatan Harian',
    value: 'Rp 4.950.000',
    icon: 'analytics',
    note: 'ADR stabil ($85)',
    noteIcon: 'trending_up',
    noteColor: 'text-emerald-700',
    color: 'text-on-tertiary-fixed-variant',
    bg: 'bg-tertiary-fixed',
    extra: 'bg-tertiary-fixed/30',
  },
  {
    label: 'Total Transaksi Gateway',
    value: '342 Berhasil',
    icon: 'sync_alt',
    note: '99.8% Sukses Rate',
    noteIcon: 'check_circle',
    noteColor: 'text-primary',
    color: 'text-on-surface',
    bg: 'bg-surface-container-high',
    extra: 'bg-surface-container-high',
  },
]

const gateways = [
  { name: 'QRIS Instant', desc: 'Midtrans / Doku API', abbr: 'QR', color: 'bg-primary-container text-on-primary-container', status: 'Connected', latency: 'Latency: 140ms' },
  { name: 'Virtual Account (BCA/BNI)', desc: 'Auto-reconciliation', abbr: 'VA', color: 'bg-secondary text-on-secondary', status: 'Connected', latency: 'Latency: 210ms' },
  { name: 'Kartu Kredit / Debit', desc: 'Visa / Mastercard 3DS', abbr: 'CC', color: 'bg-tertiary text-on-tertiary', status: 'Connected', latency: 'Secure 3DS' },
  { name: 'E-Wallet (GoPay/OVO)', desc: 'Direct Deep Link', abbr: 'EW', color: 'bg-surface-container-high text-on-surface', status: 'Connected', latency: 'Active' },
]

const chartBars = [
  { day: 'Sen', value: 65, label: 'Rp 18.2jt' },
  { day: 'Sel', value: 50, label: 'Rp 14.5jt' },
  { day: 'Rab', value: 70, label: 'Rp 21.0jt' },
  { day: 'Kam', value: 60, label: 'Rp 17.8jt' },
  { day: 'Jum', value: 85, label: 'Rp 28.5jt', primary: true },
  { day: 'Sab', value: 95, label: 'Rp 34.2jt', primary: true },
  { day: 'Min', value: 80, label: 'Rp 26.0jt', primary: true },
]

const invoices = [
  { id: 'INV-2023-8821', guest: 'Budi Santoso (Corporate)', room: 'Deluxe #302', method: 'QRIS (Midtrans)', methodIcon: 'qr_code_2', methodColor: 'text-primary', total: 'Rp 2.450.000', status: 'Lunas', statusColor: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500', date: '24 Okt 2023, 14:32' },
  { id: 'INV-2023-8822', guest: 'Sarah Jenkins (OTA - Agoda)', room: 'Suite #501', method: 'Virtual Card', methodIcon: 'credit_card', methodColor: 'text-secondary', total: 'Rp 4.100.000', status: 'Lunas', statusColor: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500', date: '24 Okt 2023, 12:15' },
  { id: 'INV-2023-8823', guest: 'Ahmad Fauzi (Walk-in)', room: 'Superior #104', method: 'Transfer BCA VA', methodIcon: 'account_balance', methodColor: 'text-tertiary', total: 'Rp 1.250.000', status: 'Pending / Menunggu', statusColor: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500', date: '24 Okt 2023, 10:05', reminder: true },
  { id: 'INV-2023-8824', guest: 'Jessica Iskandar (Direct)', room: 'Deluxe #308', method: 'GoPay E-Wallet', methodIcon: 'wallet', methodColor: 'text-primary', total: 'Rp 1.900.000', status: 'Lunas', statusColor: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500', date: '24 Okt 2023, 09:40' },
]

export default function KeuanganPembayaran() {
  return (
    <div className="flex flex-col w-full pb-16">
      <div className="px-margin-desktop py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-label-sm uppercase tracking-wider text-secondary font-semibold">Keuangan & Pembayaran</span>
            <span className="text-on-surface-variant">•</span>
            <span className="text-label-sm text-on-surface-variant">Real-time Gateway Sync</span>
          </div>
          <h1 className="text-headline-xl text-on-surface">Manajemen Finansial & Kasir</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-4 py-2.5 rounded-xl text-label-md transition-all flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Unduh Laporan (PDF)
          </button>
          <button className="bg-primary hover:bg-primary-container text-on-primary px-4 py-2.5 rounded-xl text-label-md transition-all flex items-center gap-2 shadow-md">
            <span className="material-symbols-outlined text-[18px]">add_card</span>
            Buat Tagihan Baru
          </button>
        </div>
      </div>

      <div className="px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-margin-xl">
        {stats.map((s, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 ${s.extra} rounded-full group-hover:scale-125 transition-transform`}></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-label-md text-on-surface-variant font-medium">{s.label}</span>
                <span className={`p-2 rounded-lg ${s.bg} ${s.color} material-symbols-outlined`}>{s.icon}</span>
              </div>
              <div className="text-headline-lg text-on-surface font-bold">{s.value}</div>
            </div>
            <div className={`flex items-center gap-2 mt-4 text-label-sm ${s.noteColor} font-medium`}>
              <span className="material-symbols-outlined text-[16px]">{s.noteIcon}</span>
              <span>{s.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-margin-xl">
        <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">hub</span>
                Status Payment Gateway
              </h2>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-label-sm bg-emerald-50 text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                Semua Aktif
              </span>
            </div>
            <div className="space-y-4">
              {gateways.map((g) => (
                <div key={g.name} className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${g.color} flex items-center justify-center font-bold text-label-md`}>{g.abbr}</div>
                    <div>
                      <div className="text-headline-sm text-on-surface">{g.name}</div>
                      <div className="text-body-sm text-on-surface-variant">{g.desc}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded text-label-sm bg-primary/10 text-primary font-medium">{g.status}</span>
                    <div className="text-body-sm text-on-surface-variant mt-0.5">{g.latency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-surface-container-high flex items-center justify-between">
            <span className="text-body-sm text-on-surface-variant">Webhook Endpoint: OK</span>
            <button className="text-primary text-label-md font-medium hover:underline flex items-center gap-1">
              Pengaturan API <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h2 className="text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">bar_chart</span>
                  Analisis Pendapatan & Okupansi
                </h2>
                <p className="text-body-sm text-on-surface-variant">Perbandingan performa mingguan hotel AuraStay</p>
              </div>
              <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
                <button className="px-3 py-1.5 bg-surface-container-lowest text-primary text-label-sm font-medium rounded shadow-sm">Mingguan</button>
                <button className="px-3 py-1.5 text-on-surface-variant text-label-sm font-medium hover:text-on-surface">Bulanan</button>
                <button className="px-3 py-1.5 text-on-surface-variant text-label-sm font-medium hover:text-on-surface">Tahunan</button>
              </div>
            </div>
            <div className="h-64 w-full flex items-end justify-between gap-4 px-2 pt-8 pb-4 relative">
              <div className="absolute inset-x-0 top-0 border-b border-surface-container-high"></div>
              <div className="absolute inset-x-0 top-1/4 border-b border-surface-container-high"></div>
              <div className="absolute inset-x-0 top-2/4 border-b border-surface-container-high"></div>
              <div className="absolute inset-x-0 top-3/4 border-b border-surface-container-high"></div>
              {chartBars.map((bar) => (
                <div key={bar.day} className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group">
                  <div className={`w-full max-w-[40px] ${bar.primary ? 'bg-primary' : 'bg-primary-container'} rounded-t-lg transition-all group-hover:bg-primary relative`} style={{ height: `${bar.value}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">{bar.label}</div>
                  </div>
                  <span className={`text-body-sm text-on-surface-variant ${bar.primary ? 'font-medium text-primary' : ''}`}>{bar.day}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-surface-container-high flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-body-sm text-on-surface-variant">Pendapatan Kamar (Room Revenue)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
                <span className="text-body-sm text-on-surface-variant">F&B & Layanan Lain</span>
              </div>
            </div>
            <div className="text-label-md font-semibold text-primary">Okupansi Minggu Ini: 84.5%</div>
          </div>
        </div>
      </div>

      <div className="px-margin-desktop">
        <div className="bg-surface-container-lowest rounded-xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Daftar Invoice & Generator Otomatis
              </h2>
              <p className="text-body-sm text-on-surface-variant">Kelola penagihan tamu, riwayat pembayaran, dan pengiriman invoice otomatis via WhatsApp/Email</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">search</span>
                <input className="pl-9 pr-4 py-2 bg-surface-container-low rounded-xl text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 w-64" placeholder="Cari nama tamu, no. kamar..." type="text" />
              </div>
              <select className="bg-surface-container-low px-4 py-2 rounded-xl text-body-md text-on-surface focus:outline-none">
                <option>Semua Status</option>
                <option>Lunas (Paid)</option>
                <option>Pending</option>
                <option>Jatuh Tempo</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant text-label-md">
                  <th className="py-3 px-4 rounded-l-xl font-medium">No. Invoice & Tamu</th>
                  <th className="py-3 px-4 font-medium">Kamar</th>
                  <th className="py-3 px-4 font-medium">Metode Bayar</th>
                  <th className="py-3 px-4 font-medium">Total Tagihan</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium">Tanggal</th>
                  <th className="py-3 px-4 rounded-r-xl font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-body-md text-on-surface divide-y divide-surface-container-high">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-primary">{inv.id}</div>
                      <div className="text-body-sm text-on-surface-variant">{inv.guest}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2.5 py-1 rounded-lg bg-surface-container font-medium text-label-sm">{inv.room}</span>
                    </td>
                    <td className="py-4 px-4 flex items-center gap-2 pt-5">
                      <span className={`material-symbols-outlined text-[18px] ${inv.methodColor}`}>{inv.methodIcon}</span>
                      <span>{inv.method}</span>
                    </td>
                    <td className="py-4 px-4 font-semibold">{inv.total}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-label-sm ${inv.statusColor} font-medium`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${inv.dot} mr-1.5`}></span>
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-body-sm text-on-surface-variant">{inv.date}</td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {inv.reminder ? (
                          <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-amber-600 hover:text-amber-700 transition-all" title="Kirim WhatsApp Reminder">
                            <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
                          </button>
                        ) : (
                          <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all" title="Kirim WhatsApp">
                            <span className="material-symbols-outlined text-[18px]">send</span>
                          </button>
                        )}
                        <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all" title="Cetak PDF">
                          <span className="material-symbols-outlined text-[18px]">print</span>
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all" title="Detail Invoice">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-container-high">
            <div className="text-body-sm text-on-surface-variant">
              Menampilkan <span className="font-medium text-on-surface">1-4</span> dari <span className="font-medium text-on-surface">342</span> total invoice
            </div>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant text-label-md hover:bg-surface-container-high transition-all disabled:opacity-50" disabled>Sebelumnya</button>
              <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-label-md">1</button>
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container-high transition-all">2</button>
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container-high transition-all">3</button>
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container-high transition-all">Berikutnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
