# Use official Nginx image
FROM nginx:alpine

# Copy your static files to Nginx’s default public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
