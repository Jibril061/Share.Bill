function CreateBill() {
  return (
    <main>
      <h1>Buat Tagihan</h1>
      <p>Catat pesanan dan hitung tagihan setiap anggota.</p>

      <section>
        <h2>Informasi Tagihan</h2>
        <label htmlFor="bill-name">Nama tagihan</label>
        <input id="bill-name" type="text" placeholder="Contoh: Makan bersama" />
      </section>

      <section>
        <h2>Anggota</h2>
        <p>Tambahkan orang yang ikut dalam tagihan.</p>
        <button type="button">+ Tambah Anggota</button>
      </section>

      <section>
        <h2>Daftar Menu</h2>
        <p>Tambahkan menu, harga, dan orang yang memesannya.</p>
        <button type="button">+ Tambah Menu</button>
      </section>
    </main>
  )
}

export default CreateBill
