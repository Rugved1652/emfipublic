FROM 949020832080.dkr.ecr.us-east-1.amazonaws.com/node:16-linux-amd64
ARG AWS_REGION 
ARG AWS_ACCESS_KEY_ID 
ARG AWS_SECRET_ACCESS_KEY 
ARG AWS_SESSION_TOKEN
ARG AWS_PARAMETER_NAME

# Create app directory
WORKDIR /usr/src/app
RUN mkdir /usr/src/app/logs/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN apt-get update -y && \
    apt-get install curl -y
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install

# RUN aws ssm get-parameter \
#     --with-decryption \
#     --name $AWS_PARAMETER_NAME \
#     --output text \
#     --region $AWS_REGION \
#     --query 'Parameter.Value' > .env
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# npm build to build the project
RUN npm run dev

EXPOSE 3000
CMD ["npm", "start"]
