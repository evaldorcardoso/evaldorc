#!/bin/sh
#
# script for get backup everyday

#change directory to your backup directory
cd /backup
#get backup of database of applications
mysqldump u254912787_erc tmp_db.sql;

#compress it in zip file
zip app_database-$(date +%Y-%m-%d).sql.zip tmp_db.sql;

#remove  sql file
rm -rf tmp_db.sql;