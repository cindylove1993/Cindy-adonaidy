/* Estilo general */
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff0f5;
  color: #4a004a;
  text-align: center;
  margin: 0;
  padding: 20px;
}

/* Encabezado */
header {
  background-color: #ff66b2;
  color: white;
  padding: 25px 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
  margin: 0 0 10px;
  font-size: 2rem;
}

header select {
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #fff;
  color: #4a004a;
  font-weight: bold;
  margin-top: 10px;
}

/* Productos */
#productos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
}

.producto {
  background-color: #ffe6f0;
  border: 2px solid #ff99cc;
  border-radius: 15px;
  width: 230px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.producto:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.producto img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 12px;
}

.producto h3 {
  margin: 10px 0 5px;
}

.producto p {
  font-weight: bold;
  margin: 5px 0 10px;
}

.producto button {
  background-color: #ff66b2;
  border: none;
  padding: 10px 16px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.producto button:hover {
  background-color: #cc007a;
}

/* Carrito */
.carrito {
  background-color: #fff0f5;
  border: 2px dashed #ff99cc;
  padding: 25px;
  border-radius: 15px;
  margin-top: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.carrito h2 {
  text-align: center;
  margin-bottom: 15px;
}

.carrito ul {
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px;
}

.carrito li {
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
}

.carrito button {
  background-color: #ff66b2;
  border: none;
  padding: 8px 12px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
}

.carrito button:hover {
  background-color: #cc007a;
}

/* Pago */
.pago {
  margin-top: 20px;
  background-color: #ffe6f0;
  padding: 15px;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 600px) {
  #productos {
    flex-direction: column;
    align-items: center;
  }

  .producto {
    width: 90%;
  }

  .carrito {
    width: 90%;
  }
}
