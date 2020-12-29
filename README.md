# 開始

## コンテナビルド
sudo docker-compose -f docker-compose-dev.yml build

## 開発

コンテナ起動しておいた状態で
```
sudo docker-compose -f docker-compose-dev.yml up
```

```
sudo docker exec -it clockstudy-vue-dev bash
```

コンテナ中で
```
npm run serve
```