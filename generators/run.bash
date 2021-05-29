
#!/bin/bash

#FILE NAME
#PROGRAMTYPE

date +”%m/%d/%Y”

cd ..
echo "Enter project name: "
read dirname
mkdir dirname
cd dirname

if [ -d "$dirname" ] 
then
    echo "dirname already exists";
    # if not, exit with an exit code != 0
    exit 2;
fi


mkdir src
mkdir generators
mkdir utilities
cd src
mkdir html
mkdir css
mkdir js
touch home.html
cd js
touch home.js
cd ..
cd css 
touch home.css 
cd ..
cd ..
touch readme.txt
 
