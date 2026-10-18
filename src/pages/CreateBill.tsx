import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import FormField from '../components/FormField'

function CreateBill() {
  const [billName, setBillName] = useState('')
  const [touched, setTouched] = useState(false)

  const hasError = touched && billName.trim() === ''

  return (
    <main>
      <h1>Buat Tagihan</h1>
      <p>Catat pesanan dan hitung tagihan setiap anggota.</p>

      <Card title="Informasi Tagihan">
        <FormField
          id="bill-name"
          label="Nama tagihan"
          placeholder="Contoh: Makan bersama"
          value={billName}
          onChange={(e) => setBillName(e.target.value)}
          onBlur={() => setTouched(true)}
          error={hasError ? 'Nama tagihan wajib diisi.' : undefined}
          helperText={
            !hasError
              ? 'Beri nama untuk mengidentifikasi sesi tagihan ini.'
              : undefined
          }
          required
        />
      </Card>

      <Card title="Anggota">
        <p>Tambahkan orang yang ikut dalam tagihan.</p>
        <Button variant="secondary" type="button">
          + Tambah Anggota
        </Button>
      </Card>

      <Card title="Daftar Menu">
        <p>Tambahkan menu, harga, dan orang yang memesannya.</p>
        <Button variant="secondary" type="button">
          + Tambah Menu
        </Button>
      </Card>

      <div
        style={{
          marginTop: '28px',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="primary"
          disabled
          title="Lengkapi anggota dan daftar menu terlebih dahulu"
        >
          Hitung Tagihan
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            setBillName('')
            setTouched(false)
          }}
        >
          Reset Form
        </Button>
      </div>
    </main>
  )
}

export default CreateBill
