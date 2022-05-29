set -e

npm run build
cd dist
git init
git checkout -b devfolio
git add -A
git commit -m 'deploy'
git push -f git@github.com:Myphz/Myphz.git devfolio:gh-pages
cd -
rm -rf ./dist
