document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const namaBaju = document.getElementById("namaBaju").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const harga = parseInt(document.getElementById("harga").value);

    const bahanDipilih = [];
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');

    checkbox.forEach(item => {
        bahanDipilih.push(item.value);
    });

    const totalHarga = jumlah * harga;

    document.getElementById("hasil").innerHTML = `
        <h3>Ringkasan Pesanan</h3>
        <p><strong>Nama Baju:</strong> ${namaBaju}</p>
        <p><strong>Jumlah:</strong> ${jumlah}</p>
        <p><strong>Harga per Baju:</strong> Rp ${harga.toLocaleString()}</p>
        <p><strong>Jenis Bahan:</strong> ${bahanDipilih.join(", ") || "-"}</p>
        <p><strong>Total Harga:</strong> Rp ${totalHarga.toLocaleString()}</p>
    `;
});
