import { useEffect, useState } from "react";
import axios from "axios";

function Anggota() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5500/kelas");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <table className="border-collapse border w-full my-10">
      <thead className="border bg-gray-200">
        <tr className="border">
          <th className="table-rowss">Nama</th>
          <th className="table-rowss">Biologi</th>
          <th className="table-rowss">Kimia</th>
          <th className="table-rowss">Matematika</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border">
            <td className="table-rowss">{item.nama}</td>
            <td className="table-rowss">{item.biologi}</td>
            <td className="table-rowss">{item.kimia}</td>
            <td className="table-rowss">{item.matematika}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Anggota;
