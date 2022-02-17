BEGIN;
DROP TABLE IF EXISTS "name",
"adjective",
"verb",
"complement",
"composition",
"correction";
CREATE TABLE IF NOT EXISTS "name" (
  "id" serial PRIMARY KEY,
  "text" TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "adjective" (
  "id" serial PRIMARY KEY,
  "text" TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "verb" (
  "id" serial PRIMARY KEY,
  "text" TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "complement" (
  "id" serial PRIMARY KEY,
  "text" TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "composition" (
  "id" serial PRIMARY KEY,
  "phrase" TEXT NOT NULL,
  "name_id" INTEGER REFERENCES "name" ("id") ON DELETE CASCADE,
  "adjective_id" INTEGER REFERENCES "adjective" ("id") ON DELETE CASCADE,
  "verb_id" INTEGER REFERENCES "verb" ("id") ON DELETE CASCADE,
  "complement_id" INTEGER REFERENCES "complement" ("id") ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS "correction" (
  "id" serial PRIMARY KEY,
  "phrase" TEXT NOT NULL,
  "note" INTEGER,
  "composition_id" INTEGER REFERENCES "composition" ("id") ON DELETE CASCADE
);
COMMIT;
