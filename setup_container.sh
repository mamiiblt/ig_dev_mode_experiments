# echo 'Downloading android-studio'
# wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.1.1.28/android-studio-2023.1.1.28-linux.tar.gz 
# echo 'Exracting android-studio'
# tar -xf android-studio-2023.1.1.28-linux.tar.gz

echo '1 > Installing graphical envinmorent and chrome_remote_desktop'

sudo apt-get update | sudo apt-get upgrade
sudo apt install xvfb xfce4 xfce4-goodies mpv firefox-esr plank papirus-icon-theme dbus-x11 neofetch krita --assume-yes
wget https://dl.google.com/linux/direct/chrome-remote-desktop_current_amd64.deb
sudo dpkg -i chrome-remote-desktop*
sudo apt --fix-broken install --assume-yes
rm chrome-remote-desktop*

echo '2 > Install brave-browser'

sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt install brave-browser


