import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [points, setPoints] = useState(null);

  const fetchPoints = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("/api/usuario/saldo", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPoints(data.saldo);
    } catch (err) {
      console.error("❌ Error al obtener puntos:", err);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  return (
    <UserContext.Provider value={{ points, setPoints, fetchPoints }}>
      {children}
    </UserContext.Provider>
  );
};
