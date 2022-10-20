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

On my device, I made my `/lib/systemd/system/bettercap.service` look like this, to auto-start it:

```service
[Unit]
Description=bettercap api.rest service.
Documentation=https://bettercap.org
Wants=network.target
After=network.target

[Service]
Type=simple
PermissionsStartOnly=true
ExecStart=/usr/bin/bettercap -no-colors -eval 'set events.stream.output /var/log/bettercap.log;https-ui enable'
Restart=always
RestartSec=30

[Install]
WantedBy=multi-user.target
```

The default URL will be `https://HOSTNAME:8083/api`

## thanks

- [pipoya](https://pipoya.itch.io/pipoya-free-rpg-character-sprites-32x32)
- [kenney](https://www.kenney.nl/assets/tiny-dungeon)