import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRooms } from '../hooks/useRooms'

const amenities = [
  { id: 'ac', label: 'Air Conditioner (AC) Inverter', desc: 'Pendingin ruangan hemat energi dengan kontrol digital.', icon: 'ac_unit', checked: true },
  { id: 'tv', label: 'Smart TV 50" 4K Netflix Ready', desc: 'Layar UHD berukuran besar dengan akses streaming premium.', icon: 'tv', checked: true },
  { id: 'bathtub', label: 'Bathtub & Hot Water Jacuzzi', desc: 'Fasilitas rendam air panas relaksasi bertekanan tinggi.', icon: 'bathtub', checked: false },
  { id: 'wifi', label: 'High-Speed Dedicated Wi-Fi (100 Mbps)', desc: 'Koneksi internet stabil khusus untuk tamu eksekutif.', icon: 'wifi', checked: true },
  { id: 'minibar', label: 'Mini Bar & Safe Deposit Box', desc: 'Pendingin minuman ringan dan brankas digital pribadi.', icon: 'kitchen', checked: true },
]

const channels = [
  { name: 'Traveloka', abbr: 'TV', id: 'TVL-DLX-304', color: 'bg-blue-100', text: 'text-blue-600', mapped: 'Otomatis Mapped', active: true },
  { name: 'Agoda', abbr: 'AG', id: 'AGO-DLX-304', color: 'bg-indigo-100', text: 'text-indigo-600', mapped: 'Otomatis Mapped', active: true },
  { name: 'Booking.com', abbr: 'BC', id: 'BKG-DLX-304', color: 'bg-blue-50', text: 'text-blue-800', mapped: 'Otomatis Mapped', active: true },
]

export default function TambahKamar() {
  const [form, setForm] = useState({
    nomor: '',
    lantai: '',
    tipe: '',
    dewasa: 2,
    anak: 1,
    luas: '',
    tarif: '750.000',
    penyesuaian: 15,
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const [selectedAmenities, setSelectedAmenities] = useState(
    amenities.filter((a) => a.checked).map((a) => a.id)
  )
  const [activeChannels, setActiveChannels] = useState(
    channels.filter((ch) => ch.active).map((ch) => ch.name)
  )
  const { addRoom } = useRooms()
  const navigate = useNavigate()

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const toggleAmenity = (id) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const toggleChannel = (name) => {
    setActiveChannels((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    )
  }

  const formatTarif = (value) => {
    const numeric = value.replace(/[^\d]/g, '')
    if (!numeric) return ''
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const handleTarifChange = (e) => {
    const formatted = formatTarif(e.target.value)
    setForm((prev) => ({ ...prev, tarif: formatted }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    const selectedAmenityNames = amenities
      .filter((a) => selectedAmenities.includes(a.id))
      .map((a) => a.label)

    const selectedChannelObjects = channels
      .filter((ch) => activeChannels.includes(ch.name))
      .map((ch) => ({
        name: ch.name,
        id: ch.id,
        mapped: ch.mapped,
        active: true,
      }))

    const roomData = {
      nomor_kamar: form.nomor,
      lantai: parseInt(form.lantai, 10),
      tipe: form.tipe,
      kapasitas_dewasa: parseInt(form.dewasa, 10),
      kapasitas_anak: parseInt(form.anak, 10),
      luas: form.luas ? parseFloat(form.luas) : null,
      tarif_dasar: parseInt(form.tarif.replace(/\./g, ''), 10) || 0,
      penyesuaian_weekend: parseFloat(form.penyesuaian) || 0,
      fasilitas: selectedAmenityNames,
      channel_manager: selectedChannelObjects,
      foto: [],
      status: 'available',
    }

    const { error } = await addRoom(roomData)

    if (error) {
      setMessage({ type: 'error', text: `Gagal menyimpan: ${error}` })
    } else {
      setMessage({ type: 'success', text: 'Kamar berhasil disimpan!' })
      setTimeout(() => {
        navigate('/')
      }, 1500)
    }

    setSaving(false)
  }

  return (
    <div className="flex flex-col w-full p-margin-desktop gap-unit-xl pb-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-unit-md">
          <button
            type="button"
            className="p-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-all flex items-center justify-center"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div>
            <h1 className="text-headline-lg text-on-surface">Tambah Data Kamar Baru</h1>
            <p className="text-body-sm text-on-surface-variant">Lengkapi formulir di bawah untuk mendaftarkan unit kamar baru ke dalam sistem AuraStay PMS.</p>
          </div>
        </div>
        <div className="flex items-center gap-unit-sm">
          <button className="px-4 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all text-label-md" type="button">
            Batal
          </button>
          <button className="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm text-label-md flex items-center gap-2" type="submit" form="add-room-form" disabled={saving}>
            <span className="material-symbols-outlined text-[18px]">{saving ? 'hourglass_top' : 'save'}</span>
            {saving ? 'Menyimpan...' : 'Simpan Data Kamar'}
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-xl ${message.type === 'error' ? 'bg-error-container text-on-error-container' : 'bg-emerald-50 text-emerald-700'}`}>
          {message.text}
        </div>
      )}

      <form className="flex flex-col gap-unit-xl" id="add-room-form" onSubmit={handleSubmit}>
        <section className="bg-surface-container-lowest rounded-xl p-unit-lg shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>hotel</span>
            </div>
            <div>
              <h2 className="text-headline-md text-on-surface">Informasi Dasar Kamar</h2>
              <p className="text-body-sm text-on-surface-variant">Nomor, lokasi, tipe, serta kapasitas fisik unit kamar.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-md">
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Nomor Kamar</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">door_front</span>
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md"
                  placeholder="Contoh: 304"
                  required
                  type="text"
                  value={form.nomor}
                  onChange={update('nomor')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Lantai</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">layers</span>
                </span>
                <select
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md appearance-none"
                  value={form.lantai}
                  onChange={update('lantai')}
                  required
                >
                  <option value="">Pilih Lantai</option>
                  <option value="1">Lantai 1</option>
                  <option value="2">Lantai 2</option>
                  <option value="3">Lantai 3</option>
                  <option value="4">Lantai 4</option>
                  <option value="5">Lantai 5</option>
                </select>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Kategori / Tipe Kamar</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">king_bed</span>
                </span>
                <select
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md appearance-none"
                  value={form.tipe}
                  onChange={update('tipe')}
                  required
                >
                  <option value="">Pilih Tipe Kamar</option>
                  <option value="deluxe">Deluxe King Room</option>
                  <option value="executive">Executive Suite</option>
                  <option value="superior">Superior Twin Room</option>
                  <option value="penthouse">Penthouse</option>
                </select>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Kapasitas Dewasa</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md"
                  max={6}
                  min={1}
                  type="number"
                  value={form.dewasa}
                  onChange={update('dewasa')}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Kapasitas Anak</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">child_care</span>
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md"
                  max={4}
                  min={0}
                  type="number"
                  value={form.anak}
                  onChange={update('anak')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Luas Kamar (m²)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">straighten</span>
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md"
                  placeholder="Contoh: 32"
                  type="number"
                  value={form.luas}
                  onChange={update('luas')}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-xl p-unit-lg shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            </div>
            <div>
              <h2 className="text-headline-md text-on-surface">Tarif & Yield Management</h2>
              <p className="text-body-sm text-on-surface-variant">Pengaturan harga dasar dan penyesuaian dinamis untuk musim liburan.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Tarif Dasar per Malam (Rp)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline font-semibold">Rp</span>
                <input
                  className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md font-semibold"
                  type="text"
                  value={form.tarif}
                  onChange={handleTarifChange}
                  required
                />
              </div>
              <span className="text-body-sm text-on-surface-variant">Belum termasuk pajak 10% dan servis 5%.</span>
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="text-label-md text-on-surface">Penyesuaian Weekend / High Season (%)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[18px]">trending_up</span>
                </span>
                <input
                  className="w-full pl-10 pr-12 py-2.5 rounded-xl bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all text-body-md"
                  type="number"
                  value={form.penyesuaian}
                  onChange={update('penyesuaian')}
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-outline font-semibold">%</span>
              </div>
              <span className="text-body-sm text-on-surface-variant">Kenaikan otomatis pada hari Jumat, Sabtu, dan libur nasional.</span>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-xl p-unit-lg shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>concierge</span>
            </div>
            <div>
              <h2 className="text-headline-md text-on-surface">Fasilitas & Amenitas Kamar</h2>
              <p className="text-body-sm text-on-surface-variant">Pilih fasilitas utama yang tersedia di dalam unit kamar.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-unit-md">
            {amenities.map((a) => (
              <label key={a.id} className="flex items-start gap-3 p-4 rounded-xl bg-surface hover:bg-surface-container-high transition-all cursor-pointer">
                <input
                  checked={selectedAmenities.includes(a.id)}
                  className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary accent-primary"
                  type="checkbox"
                  onChange={() => toggleAmenity(a.id)}
                />
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">{a.icon}</span>
                    {a.label}
                  </span>
                  <span className="text-body-sm text-on-surface-variant">{a.desc}</span>
                </div>
              </label>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-xl p-unit-lg shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
            </div>
            <div>
              <h2 className="text-headline-md text-on-surface">Sinkronisasi Channel Manager (OTA)</h2>
              <p className="text-body-sm text-on-surface-variant">Hubungkan ketersediaan kamar secara real-time ke berbagai platform agen perjalanan online.</p>
            </div>
          </div>
          <div className="flex flex-col gap-unit-md">
            {channels.map((ch) => (
              <div key={ch.name} className="flex items-center justify-between p-4 rounded-xl bg-surface">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${ch.color} flex items-center justify-center ${ch.text} font-bold text-sm`}>{ch.abbr}</div>
                  <div>
                    <span className="text-label-md text-on-surface font-medium block">{ch.name}</span>
                    <span className="text-body-sm text-outline flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                      Mapped ID: {ch.id}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-primary-container text-body-sm font-medium">{ch.mapped}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input checked={activeChannels.includes(ch.name)} className="sr-only peer" type="checkbox" onChange={() => toggleChannel(ch.name)} />
                    <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-xl p-unit-lg shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
            </div>
            <div>
              <h2 className="text-headline-md text-on-surface">Unggah Foto Kamar</h2>
              <p className="text-body-sm text-on-surface-variant">Tambahkan galeri foto berkualitas tinggi untuk ditampilkan pada aplikasi PMS dan channel OTA.</p>
            </div>
          </div>
          <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center bg-surface hover:bg-surface-container transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[32px]">cloud_upload</span>
            </div>
            <p className="text-headline-sm text-on-surface mb-1">Seret & lepas foto kamar di sini</p>
            <p className="text-body-sm text-on-surface-variant mb-4">Mendukung format PNG, JPG, atau WEBP hingga 10MB per berkas</p>
            <button className="px-4 py-2 rounded-xl bg-surface-container-lowest text-primary font-medium text-label-md shadow-sm hover:bg-primary hover:text-on-primary transition-all" type="button">
              Pilih Berkas dari Komputer
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-surface-container group">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx3xPST9n-pAovSlXtiwdETSuEniRaGtwtEHUI07g6vjBx56-uCwZq6WeK5MFHoW9719lBx6ESXrN_TXYJ23oK_5W_TYwBCHPNHEavBibkTE0UhGe7RacD5MwJ1w0Gu_YogXTDiX6PXVDEWLlow3fKKkBsxwWYdIHU4NEN8TQgsB1uvh2QDXkSP4tYHCBOKPjiC6H_lkR637XbryRVGHWfZwMjVgftEwLKZ2xacBlv_S6TuQviXRKq6w')",
                }}
              ></div>
              <div className="absolute inset-0 bg-inverse-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="p-2 rounded-full bg-surface text-on-surface hover:bg-error hover:text-on-error transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/70 text-inverse-on-surface text-body-sm">Utama</span>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-video bg-surface-container group">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAR2WdghqiJsnh9uGZ7mS2ER4xESUZJmlnZ_G4ChEIW9MZckVQ0jesXkgLneQ_-NnnuC3g622BSH7JLM3WAgNKh8w16XIYVP-0f-bgG2_Da7qEHSxcsrG-kGODgzELJZStl6l7pGR_i4lLMoSR7mqwO6A_49Y3JKmyAb3Wmw-WYF0g4QGxh-F0jCGfkcZ1wJCG-1oaQUQe_iCgzNNnJ2ktaGDUGh8CEgxLZTpriK6K37MH8CPfVPejsLw')",
                }}
              ></div>
              <div className="absolute inset-0 bg-inverse-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="p-2 rounded-full bg-surface text-on-surface hover:bg-error hover:text-on-error transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>
            </div>
            <div className="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center aspect-video bg-surface hover:bg-surface-container transition-all cursor-pointer">
              <span className="material-symbols-outlined text-outline text-[24px]">add_photo_alternate</span>
              <span className="text-body-sm text-outline mt-1">Tambah Foto</span>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-end gap-unit-sm pt-4">
          <button className="px-5 py-2.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all text-label-md" type="button">
            Batal
          </button>
          <button className="px-6 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md text-label-md flex items-center gap-2" type="submit" disabled={saving}>
            <span className="material-symbols-outlined text-[18px]">{saving ? 'hourglass_top' : 'save'}</span>
            {saving ? 'Menyimpan...' : 'Simpan Data Kamar'}
          </button>
        </div>
      </form>
    </div>
  )
}
