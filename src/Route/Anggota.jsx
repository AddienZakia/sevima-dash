import { useEffect, useState } from "react";
import axios from "axios";

function Anggota() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5500/kelas");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <table className="border-collapse border">
      <thead className="border">
        <tr className="border">
          <th className="border">Nama</th>
          <th className="border">Agama</th>
          <th className="border">Bahasa Indonesia</th>
          <th className="border">Bahasa Inggris</th>
          <th className="border">Biologi</th>
          <th className="border">Ekonomi</th>
          <th className="border">Fisika</th>
          <th className="border">Geografi</th>
          <th className="border">Kimia</th>
          <th className="border">Matematika</th>
          <th className="border">Sejarah</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border">
            <td className="border">{item.nama}</td>
            <td className="border">{item.agama}</td>
            <td className="border">{item.bahasa_indonesia}</td>
            <td className="border">{item.bahasa_inggris}</td>
            <td className="border">{item.biologi}</td>
            <td className="border">{item.ekonomi}</td>
            <td className="border">{item.fisika}</td>
            <td className="border">{item.geografi}</td>
            <td className="border">{item.kimia}</td>
            <td className="border">{item.matematika}</td>
            <td className="border">{item.sejarah}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Anggota;
