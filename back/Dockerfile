FROM node:12.14.0

WORKDIR /user/src/app

# 앱 의존성 설치
COPY package*.json ./

RUN npm install

# 앱 소스코드 추가
ADD . /user/src/app

# 앱이 8080포트에 바인딩 되어있음
EXPOSE 8080

RUN npm run build

CMD [ "node","./dist/server.js" ]
