cd /root/CSSA_OFFICIAL_WEBSITE
git pull
cd templete
cp -r public /var/www
cd /var/www
rm -r cssa.old
mv ucsdcssa.com cssa.old
mv public ucsdcssa.com
