import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/data").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4 text-center">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Made by Mohid</h1>
        <img
          src="/Mohid_pfp.jpeg"
          alt="Mohid's Profile"
          className="w-20 h-20 rounded-full mx-auto mt-2"
        />
      </header>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Image</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 5).map((item) => (
            <tr key={item.id} className="border">
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.title}</td>
              <td className="py-2 px-4 border">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-32 h-20 object-cover mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
