-- Revert testUnitaire_errorDebug_validatorSchema:init_db from pg

BEGIN;

DROP TABLE sentence, noun, adjective, verb, complement;

COMMIT;
