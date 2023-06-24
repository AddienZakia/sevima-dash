import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  return (
    <div className="mx-auto text-center">
      <TableData
        data={GetData().rata2_pelajaran}
        tulisan={"Rata-Rata Siswa Tertinggi"}
      />
      <TableData
        data={GetData().rata2_pelajaran}
        tulisan={"Rata-Rata Pelajaran Tertinggi"}
      />
      <TableData
        data={GetData().rata2_pelajaran}
        tulisan={"Jumlah Nilai Mata Pelajaran"}
      />
      {/* <TableData tulisan={}/> */}
    </div>
  );
}

function TableData({ data, tulisan }) {
  return (
    <div className="px-7 py-5 inline-block">
      <p className="text-center my-3 font-semibold">{tulisan}</p>
      <table className="border-collapse border ">
        <thead className="bg-gray-200">
          <tr>
            <th className="table-rowss">Nama</th>
            <th className="table-rowss">Rata-Rata Tertinggi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-rowss">Addien</td>
            <td className="table-rowss">89.5</td>
          </tr>
          <tr>
            <td className="table-rowss">Addien</td>
            <td className="table-rowss">89.5</td>
          </tr>
          <tr>
            <td className="table-rowss">Addien</td>
            <td className="table-rowss">89.5</td>
          </tr>
          <tr>
            <td className="table-rowss">Addien</td>
            <td className="table-rowss">89.5</td>
          </tr>
          <tr>
            <td className="table-rowss">Addien</td>
            <td className="table-rowss">89.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function GetData() {
  let link = "http://localhost:5500/kelas";
  let [Data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(link);

        // Rata2
        let p = [];
        let rata_pelajaran = data.map((data) => {
          let { matematika, kimia, biologi } = data;
          let rata = (matematika + kimia + biologi) / 3;
          p.push({ nama: data.nama, rata2: rata.toFixed(2) });
        });
        p.push(p.sort((a, b) => b.rata2 - a.rata2));

        // jumlah Pelajaran
        let pelajaran = {
          matematika: 0,
          kimia: 0,
          biologi: 0,
        };
        Object.keys(pelajaran).forEach((pel) => {
          data.forEach((x) => (pelajaran[pel] += x[pel]));
        });

        //rata2 pelajaran
        let rata_nilai = {
          matematika: (pelajaran.matematika / data.length).toFixed(2),
          kimia: (pelajaran.kimia / data.length).toFixed(2),
          biologi: (pelajaran.biologi / data.length).toFixed(2),
        };
        rata_nilai = Object.entries(list)
          .sort((a, b) => b[1] - a[1])
          .map(([key, value]) => ({ [key]: value }));

        setData({
          rata2_pelajaran: p,
          jumlah_nilai: [pelajaran],
          rata_nilai: rata_nilai,
        });
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return Data;
}

export default Admin;
