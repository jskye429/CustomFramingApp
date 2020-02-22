DROP DATABASE IF EXISTS frame_db;
CREATE database frame_db;

USE frame_db;

CREATE TABLE frames (
  sku INT NOT NULL,
  series VARCHAR(100) NULL,
  finish VARCHAR(100) NULL,
  height INT NOT NULL,
  width  INT NOT NULL,
  catalog_page VARCHAR(100),
  price_per_foot VARCHAR(100),

  PRIMARY KEY (SKU)
);

SELECT * FROM frames;

LOAD DATA INFILE 'desktop/BootCampNW/CustomFramingApp/frameSKU.csv'
INTO TABLE frames
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;