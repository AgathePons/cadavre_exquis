-- Verify testUnitaire_errorDebug_validatorSchema:init_db on pg

BEGIN;

SELECT * FROM noun WHERE false;

SELECT * FROM adjective WHERE false;

SELECT * FROM verb WHERE false;

SELECT * FROM complement WHERE false;

ROLLBACK;
