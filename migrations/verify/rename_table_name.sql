-- Verify cadex:rename_table_name on pg

BEGIN;

SELECT * FROM "name" WHERE false;

ROLLBACK;
