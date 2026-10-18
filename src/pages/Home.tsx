import { Link } from 'react-router'
import Button from '../components/Button'
import Card from '../components/Card'

function Home() {
  return (
    <main>
      <h1>Share.Bill</h1>
      <p>Split bills based on what everyone ordered.</p>

      <Card title="Split your bill, simply.">
        <p>Catat pesanan setiap orang dan hitung tagihan dengan lebih mudah.</p>

        <Link to="/create-bill">
          <Button variant="primary" type="button">
            Buat Tagihan
          </Button>
        </Link>
      </Card>
    </main>
  )
}

export default Home
