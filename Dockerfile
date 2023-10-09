FROM node:20-alpine3.18

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app

# Copia il file .env nel container
COPY .env .env

# Copia il resto del codice nel container
COPY . .

# Cambia il proprietario del codice al nodo utente
RUN chown -R node:node /home/app

USER node

# Installa dotenv per caricare le variabili d'ambiente dal file .env
RUN yarn add dotenv
RUN npm install


# Configura le variabili d'ambiente da .env e avvia l'applicazione
CMD ["yarn", "dotenv"]
