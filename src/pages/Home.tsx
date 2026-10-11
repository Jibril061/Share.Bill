import { Link } from 'react-router'

function Home() {
  return (
    <main>
      <h1>Share.Bill</h1>
      <p>Split bills based on what everyone ordered.</p>

      <section>
        <h2>Split your bill, simply.</h2>
        <p>Catat pesanan setiap orang dan hitung tagihan dengan lebih mudah.</p>

        <Link to="/create-bill">
          <button type="button">Buat Tagihan</button>
        </Link>
      </section>
    </main>
  )
}

export default Home
