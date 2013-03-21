#!/bin/sh
 
INFRA_ESSID="ardrone"
 
killall udhcpd
ifconfig ath0 down
iwconfig ath0 mode managed essid $INFRA_ESSID ap any channel auto commit
ifconfig ath0 up
udhcpc -b -i ath0
