-- Deploy cadex:rename_table_name to pg

BEGIN;

ALTER TABLE noun RENAME TO name;

COMMIT;
