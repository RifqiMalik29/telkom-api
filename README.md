Simple e-commerce API

# Tools
* Visual Studio Code
* XAMPP

# Documentation
https://documenter.getpostman.com/view/12575735/TVzPoK7e

# Table Structure in MySQL
#### cart
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|seller|varchar(200)|NO| |NULL| |
|checklist|int(11)|NO| |1| |
|total_product|int(11)|NO| |NULL| |
|cart_user|int(11)|YES| |NULL| |
|cart_product|int(11)|YES| |NULL| |

#### product
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|product_id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|product_name|varchar(255)|NO| |NULL| |
|store|varchar(255)|NO| |NULL| |
|price|varchar(255)|NO| |NULL| |
|city|varchar(255)|NO| |NULL| |
|photo|varchar(100|NO| |blank| |
|seller_id|int(11)|NO|FK|NULL| |

#### user
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|user_id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|name|varchar(255)|NO| |NULL| |
|email|varchar(255)|NO| |NULL| |
|owner|varchar(200|YES| |NULL| |
|phone|varchar(16)|YES| |NULL| |
|password|varchar(100)|NO| |NULL| |
|pin|char(6)|NO| |NULL| |
|role|int(11)|NO| |5| |
|photo|varchar(100)|NO| |blank| |
|createdAt|timestamp|NO| |current_timestamp| |
|updateAt|timestamp|NO| |current_timestamp|ON UPDATE CURRENT_TIMESTAMP()|
