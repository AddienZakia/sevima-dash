import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TemplateKata from "../Component/Laporan.json";

function Laporan() {
  let { id } = useParams();
  let [Data, setData] = useState(null);
  let link = "http://localhost:5500/kelas/" + id;

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(link);
        setData(response.data);
      } catch (err) {
        setData({ name: null });
      }
    }

    fetchData();
  }, [link]);

  return (
    <>
      <SetTemplate data={Data} />
    </>
  );
}

function SetTemplate({ data }) {
  let error = "Tidak ditemukan";
  let fungsi = Catatan({ data });

  return (
    <div className="">
      <table className="border mx-auto">
        <tbody>
          <tr>
            <td className="table-rowss">Nama</td>
            <td className="table-rowss">
              {data && data.nama ? data.nama : error}
            </td>
          </tr>
          <tr>
            <td className="table-rowss">Nilai Matematika</td>
            <td className="table-rowss">
              {data && data.matematika ? data.matematika : 0}
            </td>
          </tr>
          <tr>
            <td className="table-rowss">Nilai Kimia</td>
            <td className="table-rowss">
              {data && data.kimia ? data.kimia : 0}
            </td>
          </tr>
          <tr>
            <td className="table-rowss">Nilai Biologi</td>
            <td className="table-rowss">
              {data && data.biologi ? data.biologi : 0}
            </td>
          </tr>
          <tr>
            <td className="table-rowss font-semibold">Rata-Rata</td>
            <td className="table-rowss">
              {data && data.biologi
                ? ((data.biologi + data.matematika + data.kimia) / 3).toFixed(2)
                : 0}
            </td>
          </tr>
          <tr>
            <td className="table-rowss font-semibold">Catatan</td>
            <td className="table-rowss">
              {data && data.nama ? fungsi.catatan : "Tidak ada"}
            </td>
          </tr>
          <tr>
            <td className="table-rowss font-semibold">Saran Pembelajaran</td>
            <td className="table-rowss">
              {data && data.nama ? fungsi.saran : "Tidak ada"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Catatan(data) {
  let p1 = data.matematika,
    p2 = data.kimia,
    p3 = data.biologi;
  let rata2 = Math.round((p1 + p2 + p3) / 3);

  let { link, kata, saran } = TemplateKata;
  let random = Math.floor(Math.random() * 4);

  let hasil = {
    catatan: "",
    saran: "",
  };

  if (rata2 >= 91) {
    hasil.catatan = kata.atas[random];
    hasil.saran = saran.atas[random];
  } else if (rata2 >= 81 && rata2 < 91) {
    hasil.catatan = kata.sedang_atas[random];
    hasil.saran = saran.sedang_atas[random];
  } else if (rata2 >= 75 && rata2 < 80) {
    hasil.catatan = kata.sedang_bawah[random];
    hasil.saran = saran.sedang_bawah[random];
  } else {
    hasil.catatan = kata.bawah[random];
    hasil.saran = saran.bawah[random];
  }

  //   let detect = {
  //     [p1]: "matematika",
  //     [p2]: "kimia",
  //     [p3]: "biologi",
  //   };
  //   console.log(p1, p2, p3, detect);
  //   hasil.saran += "\n";
  //   let minimal = Math.min(p1, p2, p3);
  let mapel = ["matematika", "kimia", "biologi"];
  let mapelRandom = mapel[Math.floor(Math.random() * mapel.length)];
  let link_video = link[mapelRandom][random];

  hasil.saran +=
    " Materi link video yang bagus untuk meningkatkan nilai kamu\n" +
    link_video;

  return hasil;
}

export default Laporan;
