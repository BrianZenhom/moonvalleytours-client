import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])

  const reFetch = async () => {
    setLoading(true)
    try {
      const res = await axios.get(url)
      setData(res.data)
    } catch (err) {
      setError(err)
    }
  }

  return { data, loading, error, reFetch }
}

const useCityFetch = url => {
  const [dataCity, setDataCity] = useState([])
  const [loadingCity, setLoadingCity] = useState(false)
  const [errorCity, setErrorCity] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoadingCity(true)
      try {
        const res = await axios.get(url)
        setDataCity(res.data)
      } catch (error) {
        setErrorCity(error)
      }
      setLoadingCity(false)
    }
    fetchData()
  }, [url])

  return { dataCity, loadingCity, errorCity }
}

export default { useFetch, useCityFetch }
