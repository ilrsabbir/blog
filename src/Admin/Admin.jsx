import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/bloglist')
  }, [navigate])
  
  return (
    <div></div>
  )
}
