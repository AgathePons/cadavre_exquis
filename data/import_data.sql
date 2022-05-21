BEGIN;
INSERT INTO
  name (label)
VALUES
  ('un cheval'),
  ('la mairie de Neuilly-sur-Seine'),
  ('une huître'),
  ('Julie Andrieu'),
  ('Jacky et sa Subaru Impreza'),
  ('la gendarmerie hollandaise'),
  ('un chauve'),
  ('Simon'),
  ('2 chatons');
INSERT INTO
  adjective (label)
VALUES
  ('bien cuit'),
  ('blond'),
  ('guilleret'),
  ('ankylosé'),
  ('blafard'),
  ('rasé de près'),
  ('amputé d''un doigt');
INSERT INTO
  complement (label)
VALUES
  ('un seau en plastique'),
  ('la consommation de café'),
  ('Yann'),
  ('3 roues de voiture'),
  ('2 mains gauches'),
  ('un skieur débutant'),
  ('la Mer Noire');
INSERT INTO
  verb (label)
VALUES
  ('consulte'),
  ('franchit'),
  ('cuisine'),
  ('remet en question'),
  ('s''immole pour protester contre'),
  ('enduit de confiture'),
  ('instaure'),
  ('déguste');
INSERT INTO
  sentence (
    noun_id,
    adjective_id,
    verb_id,
    complement_id,
    clean_version
  )
VALUES
  (
    2,
    1,
    2,
    1,
    'la mairie de Neuilly-sur-Seine bien cuite franchit un seau en plastique'
  ),
  (
    4,
    4,
    3,
    1,
    'Julie Andrieu ankylosée cuisine un seau en plastique'
  );
COMMIT;
