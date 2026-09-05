const actions = [
  {
    label: 'Check-in Tamu',
    icon: 'how_to_reg',
    bg: 'bg-primary-fixed',
    text: 'text-on-primary-fixed',
  },
  {
    label: 'Check-out & Bill',
    icon: 'logout',
    bg: 'bg-secondary-fixed',
    text: 'text-on-secondary-fixed',
  },
  {
    label: 'Pindah Kamar',
    icon: 'swap_horiz',
    bg: 'bg-amber-100',
    text: 'text-amber-800',
  },
  {
    label: 'Lapor Kerusakan',
    icon: 'report_problem',
    bg: 'bg-error-container',
    text: 'text-on-error-container',
  },
]

export default function QuickActions() {
  return (
    <div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-md">
      <h2 className="font-headline-md text-on-surface">Aksi Cepat Front Desk</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((a, i) => (
          <button
            key={i}
            className="p-3 bg-surface rounded-xl hover:bg-surface-container-high transition-all flex flex-col items-center text-center gap-2 group"
          >
            <span className={`p-2.5 ${a.bg} ${a.text} rounded-xl group-hover:scale-105 transition-transform`}>
              <span className="material-symbols-outlined text-[20px]">{a.icon}</span>
            </span>
            <span className="text-label-md font-medium text-on-surface">{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
