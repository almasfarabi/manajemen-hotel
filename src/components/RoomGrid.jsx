const rooms = [
  { number: '101', type: 'Deluxe King', status: 'Terisi', guest: 'Bpk. Haryanto', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '102', type: 'Deluxe Twin', status: 'Tersedia', dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
  { number: '103', type: 'Deluxe King', status: 'Dibersihkan', dot: 'bg-amber-500', border: 'border-amber-500/20', textColor: 'text-amber-600' },
  { number: '104', type: 'Superior', status: 'Terisi', guest: 'Ibu Siska', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '105', type: 'Suite Room', status: 'Perbaikan AC', dot: 'bg-error', border: 'border-error/20', textColor: 'text-error' },
  { number: '106', type: 'Deluxe King', status: 'Tersedia', dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
  { number: '201', type: 'Executive Suite', status: 'Terisi', guest: 'Mr. David Smith', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '202', type: 'Deluxe Twin', status: 'Terisi', guest: 'Dr. Rahmat', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '203', type: 'Deluxe King', status: 'Check-out 12:00', dot: 'bg-amber-500', border: 'border-amber-500/20', textColor: 'text-amber-600' },
  { number: '204', type: 'Superior', status: 'Tersedia', dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
  { number: '205', type: 'Deluxe King', status: 'Tersedia', dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
  { number: '206', type: 'Suite Room', status: 'Terisi', guest: 'Kel. Wijaya', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '301', type: 'Penthouse', status: 'Terisi', guest: 'Mr. Alexander', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '302', type: 'Executive Suite', status: 'Inspeksi', dot: 'bg-amber-500', border: 'border-amber-500/20', textColor: 'text-amber-600' },
  { number: '303', type: 'Deluxe Twin', status: 'Tersedia', dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
  { number: '304', type: 'Deluxe King', status: 'Terisi', guest: 'Ibu Lestari', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '305', type: 'Deluxe King', status: 'Terisi', guest: 'Mr. John Doe', dot: 'bg-secondary', border: 'border-secondary/20', textColor: 'text-secondary' },
  { number: '306', type: 'Suite Room', status: 'Tersedia', dot: 'bg-emerald-500', border: 'border-emerald-500/20', textColor: 'text-emerald-600' },
]

export default function RoomGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-2">
      {rooms.map((room) => (
        <div
          key={room.number}
          className={`p-3 bg-surface rounded-xl ${room.border} border flex flex-col justify-between h-28 relative hover:shadow-md transition-all cursor-pointer group`}
        >
          <div className="flex justify-between items-start">
            <span className="font-headline-sm text-on-surface">{room.number}</span>
            <span className={`w-2 h-2 rounded-full ${room.dot}`}></span>
          </div>
          <div>
            <span className="text-label-sm text-on-surface-variant block">{room.type}</span>
            <span className={`text-body-sm ${room.textColor} font-medium mt-0.5 block truncate`}>
              {room.status}
            </span>
          </div>
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
          </div>
        </div>
      ))}
    </div>
  )
}
