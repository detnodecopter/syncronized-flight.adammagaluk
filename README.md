#Ar Drone Syncronized Flight

##Setting up wifi to connect to router

1. Connect to drone's wifi
```
telnet 192.168.1.1
vi setupwifi.sh
```

Paste the contents of setupwifi.sh to that file. Also change the essid to what ever network name you are using, keep in mind the ar drone assumes no security like wep/wpa is enabled on the network.

```
chmod +x setupwifi.sh
./setupwifi.sh
```

Once you run the script above the drone will shutdown its network and connect to the essid provided and use a dhcp client to get an IP address.

Dissconnect from the node's wifi and connect to the same essid as the ar drone. Use `nmap -n -sP` or look at the routers connected clients to figure out what ip address the ar drone got.

