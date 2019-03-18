#!/bin/sh
# this script will search for the most recent thorium executable in the same directory 
# (or in another one, if you adjust the thoriumdir variable).
# If this is started from a GUI, it will open a terminal window (default: xterm) and run thorium inside of it.
# don't forget to make this script executable before

terminalemu="xterm" # should support the -e option to execute a file
thoriumdir=$PWD # replace it by the proper dir if you don't want to throw the script into the same directory as the thorium executable

ps -e | grep thorium-linux > /dev/null # is thorium already running?
if [ $? -eq 0 ]; then
    running=true;
else
    running=false
fi

if tty -s # was this script started from the command line?
then    
    if [ $running = true ]; then
        echo Thorium is already running; exit 1
    fi
    ${thoriumdir}/`ls -t thorium-linux* | head -1`

else
    if [ $running = true ]; then
        $terminalemu -e "echo Thorium is already running; read -n1"
        exit 1
    fi
    $terminalemu -e "${thoriumdir}/`ls -t thorium-linux* | head -1`"
fi
