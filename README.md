# Fabric JS to PNG

Convert JSON from Fabric JS library to PNG file

### Installation

```sh
sudo apt install curl
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo aptitude install nodejs
sudo aptitude install npm
npm install fabric --save
```

### Usage

```sh
nodejs fabricjs2png.js -i example.json -o image.png -w 320 -h 240
```

### Licence

    FabricJS2PNG
    Copyright (C) <2022>  <Ernesto Gigliotti>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.