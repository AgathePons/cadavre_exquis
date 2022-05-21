-- Revert cadex:rename_table_name from pg

BEGIN;

ALTER TABLE name RENAME TO noun;

COMMIT;
