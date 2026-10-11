import { Link } from 'react-router'

function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <h2>Halaman tidak ditemukan</h2>
      <p>Maaf, halaman yang kamu cari tidak tersedia.</p>
      <Link to="/">Kembali ke Home</Link>
    </main>
  )
}

export default NotFound
