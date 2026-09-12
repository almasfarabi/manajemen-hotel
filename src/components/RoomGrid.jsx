import { useRooms } from '../hooks/useRooms'

const statusConfig = {
  'Terisi': { dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  'Tersedia': { dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
  'Dibersihkan': { dot: 'bg-amber-500', border: 'border-amber-500/20', textColor: 'text-amber-600' },
  'Perbaikan AC': { dot: 'bg-error', border: 'border-error/20', textColor: 'text-error' },
  'Check-out 12:00': { dot: 'bg-amber-500', border: 'border-amber-500/20', textColor: 'text-amber-600' },
  'Inspeksi': { dot: 'bg-amber-500', border: 'border-amber-500/20', textColor: 'text-amber-600' },
  'available': { dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
  'occupied': { dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  'cleaning': { dot: 'bg-amber-500', border: 'border-amber-500/20', textColor: 'text-amber-600' },
  'maintenance': { dot: 'bg-error', border: 'border-error/20', textColor: 'text-error' },
}

const typeLabels = {
  'deluxe': 'Deluxe King',
  'executive': 'Executive Suite',
  'superior': 'Superior Twin',
  'penthouse': 'Penthouse',
  'Deluxe King': 'Deluxe King',
  'Executive Suite': 'Executive Suite',
  'Superior Twin': 'Superior Twin',
  'Penthouse': 'Penthouse',
}

function getStatusConfig(status) {
  return statusConfig[status] || statusConfig['Tersedia']
}

function getTypeLabel(tipe) {
  return typeLabels[tipe] || tipe
}

export default function RoomGrid() {
  const { rooms, loading } = useRooms()

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-3 bg-surface rounded-xl border border-surface-container-high flex flex-col justify-between h-28 animate-pulse">
            <div className="h-4 bg-surface-container-high rounded w-1/2"></div>
            <div className="h-3 bg-surface-container-high rounded w-3/4 mt-2"></div>
            <div className="h-3 bg-surface-container-high rounded w-1/2 mt-1"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-2">
      {rooms.map((room) => {
        const config = getStatusConfig(room.status)
        return (
          <div
            key={room.id}
            className={`p-3 bg-surface rounded-xl ${config.border} border flex flex-col justify-between h-28 relative hover:shadow-md transition-all cursor-pointer group`}
          >
            <div className="flex justify-between items-start">
              <span className="font-headline-sm text-on-surface">{room.nomor_kamar}</span>
              <span className={`w-2 h-2 rounded-full ${config.dot}`}></span>
            </div>
            <div>
              <span className="text-label-sm text-on-surface-variant block">{getTypeLabel(room.tipe)}</span>
              <span className={`text-body-sm ${config.textColor} font-medium mt-0.5 block truncate`}>
                {room.status}
              </span>
            </div>
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
