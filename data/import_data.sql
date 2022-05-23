BEGIN;

TRUNCATE
  name,
  adjective,
  verb,
  complement,
  sentence
RESTART IDENTITY;

INSERT INTO
  name (label)
VALUES
  ('Un cheval, ou peut-être une licorne'),
  ('Le Dalaï-Lama en personne'),
  ('Une huître'),
  ('Mickey Mouse'),
  ('Mon petit doigt (celui de la main gauche bien sûr)'),
  ('La fusée Ariane (pas le fil, la fusée)'),
  ('Tintin & Milou'),
  ('Le Grand Architecte'),
  ('Jérôme Bosch'),
  ('Le monstre en spaghetti volant'),
  ('Cthulhu');
INSERT INTO
  adjective (label)
VALUES
  ('plaqué or'),
  ('décoloré blond-platine'),
  ('guilleret à l''extérieur, mais mort à l''intérieur'),
  ('en jupe à froufrou'),
  ('blafard sous l''éclairage des néons'),
  ('rasé de près'),
  ('la tête dans les nuages'),
  ('beau comme un camion'),
  ('dans sa plus belle tenue de go-go dancing'),
  ('en équilibre sur la corde raide'),
  ('K''yarnak ch'' tharanak Shub-Niggurath');
INSERT INTO
  verb (label)
VALUES
  ('rêve de'),
  ('consulte lors d''un referendum'),
  ('énerve franchement la communauté de'),
  ('cuisine à l''étouffée'),
  ('remet en question'),
  ('s''immole pour protester contre'),
  ('s''enduit de'),
  ('instaure en grande pompe'),
  ('déguste pour le goûter'),
  ('descend de son perchoir muni de'),
  ('ngAzathoth');
INSERT INTO
  complement (label)
VALUES
  ('un seau en plastique'),
  ('un bon café bien serré'),
  ('le Paradis Pastafarien'),
  ('trois roulettes de trotinette'),
  ('la trop bonne confiture de mûre'),
  ('un taxidermiste en puissance'),
  ('la Mer Noire'),
  ('un machin bien moche et bien nul'),
  ('ses grands morts'),
  ('son Bescherelle'),
  ('R''lyeh wgah''nagl');
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
