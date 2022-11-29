 # Starting image
 # stage compilation
 FROM alpine:3.15 as builder

 # Work path
 WORKDIR /mini-project-2022-main

 #COPY package*.json ./

 # Install system packages
 RUN apk add --update nodejs npm && apk add --update npm

 # Copy files from repository
 COPY . .

 # Install dependencies with npm
 RUN npm install  

 # Build with npm
 RUN npm run build

 # Add node user and node group
 # RUN . .
 # Downgrade privileges
 #USER Mustapha-gh


 # execution stage
 FROM alpine:3.15 as runner

 RUN apk --no-cache add ca-certificates

# Copy th output to the builder
 COPY --from=builder /mini-project-2022-main/dist /app 

 # Execution
 CMD ["node","/mini-project-2022-main/src/sysinfo.js"] 