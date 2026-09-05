const metrics = [
  {
    title: 'Total Kamar',
    value: '128',
    subtitle: 'Seluruh unit properti',
    icon: 'domain',
    color: 'primary',
    bg: 'primary-fixed',
    textColor: 'on-primary-fixed',
    bgOpacity: 'text-primary/10',
  },
  {
    title: 'Terisi (Occupied)',
    value: '84',
    subtitle: '65.6%',
    percent: '65.6%',
    icon: 'bedroom_parent',
    color: 'secondary',
    bg: 'secondary-fixed',
    textColor: 'on-secondary-fixed',
    bgOpacity: 'text-secondary/10',
    fillStyle: { fontVariationSettings: "'FILL' 1" },
  },
  {
    title: 'Kosong (Available)',
    value: '32',
    subtitle: 'Siap Jual',
    icon: 'door_front',
    color: 'emerald-500',
    bg: 'emerald-100',
    textColor: 'text-emerald-800',
    bgOpacity: 'text-emerald-500/10',
    barColor: 'bg-emerald-500',
    barWidth: '25%',
  },
  {
    title: 'Kotor (Dirty)',
    value: '8',
    subtitle: 'Proses Cleaning',
    icon: 'mop',
    color: 'amber-500',
    bg: 'amber-100',
    textColor: 'text-amber-800',
    bgOpacity: 'text-amber-500/10',
    barColor: 'bg-amber-500',
    barWidth: '6.2%',
  },
  {
    title: 'Pemeliharaan',
    value: '4',
    subtitle: 'Maintenance',
    icon: 'handyman',
    color: 'error',
    bg: 'error-container',
    textColor: 'on-error-container',
    bgOpacity: 'text-error/10',
    barColor: 'bg-error',
    barWidth: '3.1%',
  },
]

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-unit-md">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden"
        >
          <div className={`absolute -right-4 -bottom-4 ${m.bgOpacity}`}>
            <span className="material-symbols-outlined text-[96px]">{m.icon}</span>
          </div>
          <div className="flex items-center justify-between z-10">
            <span className="text-label-md text-on-surface-variant font-medium">{m.title}</span>
            <span className={`p-2 ${m.bg} ${m.textColor} rounded-lg`}>
              <span className="material-symbols-outlined text-[20px]" style={m.fillStyle || {}}>
                {m.icon}
              </span>
            </span>
          </div>
          <div className="mt-4 z-10">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl text-on-surface">{m.value}</span>
              {m.percent && (
                <span className={`text-label-sm ${m.color} font-medium`}>{m.percent}</span>
              )}
            </div>
            {m.barWidth && (
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                <div className={`${m.barColor} h-full rounded-full`} style={{ width: m.barWidth }}></div>
              </div>
            )}
            {!m.barWidth && <p className="text-body-sm text-on-surface-variant mt-1">{m.subtitle}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
