import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useRooms() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchRooms = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setRooms(data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const addRoom = async (roomData) => {
    try {
      const { data, error } = await supabase
        .from('rooms')
        .insert([roomData])
        .select()

      if (error) throw error
      await fetchRooms()
      return { data, error: null }
    } catch (err) {
      return { data: null, error: err.message }
    }
  }

  useEffect(() => {
    let mounted = true
    let subscription = null

    const init = async () => {
      if (!mounted) return
      await fetchRooms()
      if (!mounted) return

      try {
        subscription = supabase
          .channel('rooms_changes')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'rooms' }, () => {
            if (mounted) fetchRooms()
          })
          .subscribe()
      } catch (err) {
        console.error('Failed to subscribe to rooms changes:', err)
      }
    }

    init()

    return () => {
      mounted = false
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  return { rooms, loading, error, fetchRooms, addRoom }
}
