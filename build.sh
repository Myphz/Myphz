git clone -b redesign https://github.com/Myphz/Myphz.git fe
cd fe
npm i
npm run build
mv dist/* ../static
cd ..
rm -rf ./fe