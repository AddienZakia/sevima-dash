import axios from "axios";
let link = "http://localhost:5500/kelas";

async function Data() {
  let { data } = await axios.get(link);

  return (
    <>
      {data.map((res) => {
        <p>www</p>;
      })}
    </>
  );
}

function Anggota() {
  return (
    <table className="border-collapse border">
      <thead className="border ">
        <tr className="border">
          <td className="border">Nama</td>
          <td className="border">Agama</td>
          <td className="border">Bahasa Indonesia</td>
          <td className="border">Bahasa Inggris</td>
          <td className="border">Biologi</td>
          <td className="border">Ekonomi</td>
          <td className="border">Fisika</td>
          <td className="border">Geografi</td>
          <td className="border">Kimia</td>
          <td className="border">Matematika</td>
          <td className="border">Sejarah</td>
        </tr>
      </thead>
      <Data />
    </table>
  );
}

export default Anggota;
