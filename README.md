# fe.house-network <img src="https://user-images.githubusercontent.com/45575898/184987964-64477382-1df1-4512-9b77-9d6ec0eef470.jpg" width="60" height="60" />

<img src="https://github.com/lucaimbalzano/fe.house-network/assets/45575898/f141adcc-187f-4711-b59b-8c11920eb112" width="1200" height="700" />


## nextjs front-end




Install dependencies:
```
$ npm install
```

Install db by using migrate prisma feature:
```
$ npm prisma migrate dev
or
$ npx prisma migrate dev
```


run postgresql:
```
(Linux)
$ systemctl start postgresql.service
(Window)
$ net start postgresql-[YOUR_VERSION]
```

create to the root .env file:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/dev?schema=public"
JWT_SECRET_KEY=my_ultra_secure_jwt_secret_key
JWT_EXPIRES_IN=60
```

run the server in development mode:
```
$ npm run dev
```




















``` Dreams without Goals are just Dreams ```


ᵈᵉᵛᵉˡᵒᵖᵉᵈ ᵇʸ 𝙡𝙪𝙘𝙖𝙞𝙢𝙗𝙖𝙡𝙯𝙖𝙣𝙤@𝙜𝙢𝙖𝙞𝙡.𝙘𝙤𝙢