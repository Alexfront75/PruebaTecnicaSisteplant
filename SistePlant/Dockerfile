FROM node:9.11.1-alpine

# instalar un simple servidor http para servir nuestro contenido est�tico
RUN npm install -g http-server

# hacer la carpeta 'app' el directorio de trabajo actual
WORKDIR /app

# copiar 'package.json' y 'package-lock.json' (si est�n disponibles)
COPY package*.json ./

# instalar dependencias del proyecto
RUN npm install

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

# construir aplicaci�n para producci�n minificada
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]