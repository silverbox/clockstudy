# 開始

## コンテナビルド
sudo docker-compose -f docker-compose-dev.yml build

## 開発

コンテナ起動しておいた状態で
```
sudo docker-compose -f docker-compose-dev.yml up
```

コンテナにログインする
```
sudo docker exec -it clockstudy-vue-dev bash
```

コンテナ中(/vue/clockstudy 配下)で
```
npm run serve
```