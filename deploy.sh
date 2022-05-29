set -e

npm run build
cd dist
git init
git branch -M gh-pages
git add -A
git commit -m 'deploy'
git push -f git@github.com:Myphz/Myphz.git gh-pages
cd -
rm -rf ./dist
