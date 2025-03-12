# Usa una imagen oficial de Node.js
FROM node:18 

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto (el mismo que usa Express)
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["npx","nodemon"]
