import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const data = GetData();

  return (
    <div className="mx-auto text-center">
      {data && (
        <>
          <TableData
            data={data.rata2_pelajaran}
            tulisan={"Rata-Rata Siswa Tertinggi"}
          />
          <TableData
            data={data.rata_nilai}
            tulisan={"Rata-Rata Pelajaran Tertinggi"}
          />
          <TableData
            data={data.jumlah_nilai}
            tulisan={"Jumlah Nilai Mata Pelajaran"}
          />
        </>
      )}
    </div>
  );
}
//|| item.matematika || item.biologi || item.kimia ||
function TableData({ data, tulisan }) {
  return (
    <div className="px-7 py-5 inline-block">
      <p className="text-center my-3 font-semibold">{tulisan}</p>
      <table className="border-collapse border">
        <thead className="bg-gray-200">
          <tr>
            <th className="table-rowss">Nama</th>
            <th className="table-rowss">Hasil Tertinggi</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 5).map((item, index) => (
            <tr key={index}>
              <td className="table-rowss">{item.nama || item[0]}</td>
              <td className="table-rowss">{item.rata2 || item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GetData() {
  const link = "http://localhost:5500/kelas";
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(link);
        const fetchedData = response.data;

        // Rata-Rata Pelajaran
        let rataPelajaran = fetchedData.map((data) => {
          const { matematika, kimia, biologi } = data;
          const rata = (matematika + kimia + biologi) / 3;
          return { nama: data.nama, rata2: rata.toFixed(2) };
        });
        rataPelajaran.sort((a, b) => b.rata2 - a.rata2);

        // Jumlah Nilai Pelajaran
        let jumlahNilai = [
          ["Matematika", 0],
          ["Kimia", 0],
          ["Biologi", 0],
        ];
        fetchedData.forEach((data) => {
          switch (data) {
            case data.matematika:
              jumlahNilai[0][1] += data.matematika;
              break;
            case data.kimia:
              jumlahNilai[1][1] += data.kimia;
              break;
            case data.biologi:
              jumlahNilai[2][1] += data.biologi;
              break;
            default:
          }
          if (data.matematika) jumlahNilai[0][1] += data.matematika;
          if (data.kimia) jumlahNilai[1][1] += data.kimia;
          jumlahNilai[2][1] += data.biologi;
        });
        jumlahNilai = jumlahNilai.sort((a, b) => b[1] - a[1]);

        // Rata-Rata Nilai Pelajaran Tertinggi
        let rataNilai = {
          Matematika: (jumlahNilai[0][1] / fetchedData.length).toFixed(2),
          Kimia: (jumlahNilai[1][1] / fetchedData.length).toFixed(2),
          Biologi: (jumlahNilai[2][1] / fetchedData.length).toFixed(2),
        };
        const sortedRataNilai = Object.entries(rataNilai).sort(
          (a, b) => b[1] - a[1]
        );

        setData({
          rata2_pelajaran: rataPelajaran,
          jumlah_nilai: jumlahNilai,
          rata_nilai: sortedRataNilai,
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return data;
}

export default Admin;
