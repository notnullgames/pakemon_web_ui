This is an alternate webui for bettercap that uses [PIXI.js](https://pixijs.com/). The idea is it will be Pakémon branded, and feel more game-like. 

The webui goes in `/usr/local/share/bettercap/ui` by default.

## development

Install dependdencies & tools:

```
npm i
```

Run the local dev-server:

```
npm start
```

Then point it at an instance of bettercap that has the `api.rest` module running:

```
sudo bettercap -eval 'https-ui enable'
```

The default will be `https://HOSTNAME:8083/api`