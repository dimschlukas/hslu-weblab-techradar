FROM node:18-alpine AS build
ARG BACKEND_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN sed -i "s|http://localhost:3000|${BACKEND_URL}|g" src/environment/environment.prod.ts
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /app/dist/techradar/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]