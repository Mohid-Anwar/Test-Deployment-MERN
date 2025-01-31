import { useState, useEffect } from "react";
import api from "./config/axiosConfig";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/data");
        console.log("Response:", response.data);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

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
