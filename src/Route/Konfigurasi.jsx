import { useState } from "react";
import axios from "axios";

function Konfigurasi() {
  return (
    <>
      <TambahData />
    </>
  );
}

function TambahData() {
  const [nama, setNama] = useState("");
  const [mtk, setMtk] = useState("");
  const [kimia, setKimia] = useState("");
  const [biologi, setBiologi] = useState("");
  const [result, setResult] = useState("hidden");
  const [tulisan, setTulisan] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = {
        nama: nama,
        matematika: parseInt(mtk),
        kimia: parseInt(kimia),
        biologi: parseInt(biologi),
      };

      const url = "http://localhost:5500/kelas";

      axios
        .post(url, data)
        .then((res) => {
          console.log(res.data);
          setResult("block bg-green-400");
          setTulisan("Data berhasil disimpan");
        })
        .catch((err) => {
          console.error(err);
          setResult("block bg-red-400");
          setTulisan("Data gagal disimpan");
        });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="konfigur text-center">
      <p className="font-bold my-3">Menambah data siswa</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <p>Nama</p>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="border"
            required
          />
        </div>
        <div>
          <p>Matematika</p>
          <input
            type="text"
            value={mtk}
            onChange={(e) => setMtk(e.target.value)}
            className="border"
            required
          />
        </div>
        <div>
          <p>Kimia</p>
          <input
            type="text"
            value={kimia}
            onChange={(e) => setKimia(e.target.value)}
            className="border"
            required
          />
        </div>
        <div>
          <p>Biologi</p>
          <input
            type="text"
            value={biologi}
            onChange={(e) => setBiologi(e.target.value)}
            className="border"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-block cursor-pointer bg-biru px-3 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      <p className={`${result} inline-block my-3 px-3 py-2 rounded-md`}>
        {tulisan}
      </p>
    </div>
  );
}

export default Konfigurasi;
