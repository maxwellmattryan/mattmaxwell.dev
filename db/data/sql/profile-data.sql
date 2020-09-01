INSERT INTO profile_status(id, status) VALUES (1, 'ACTIVE');
INSERT INTO profile_status(id, status) VALUES (2, 'INACTIVE');

INSERT INTO profile(id, status_id, name, tagline, landing, about, image_url)
VALUES (1,
       2,
       'Audio Development',
       'I make noises happen through code.',
       'I''m an software engineer based in Austin, TX. I love to build and develop audio-related software, whether it''s plugins, game audio engines, and more.',
       'I strive to develop clean and optimized audio software, which in and of itself is an vastly interesting problem domain. In addition to my passion for audio, I have experience ranging from building simple audio plugins to audio middleware solutions in games.',
       'portrait.png');
INSERT INTO profile(id, status_id, name, tagline, landing, about, image_url)
VALUES (2,
       2,
       'Game Development',
       'Looking for a game programmer? I''m your guy.',
       'I''m a software engineer based in Austin, TX. I enjoy developing games, whether it''s audio programming or technical sound design.',
       'I strive to develop clean and neatly architectured code for games, pertaining to things such as systems, behaviors, mechanics, and more. Each and every game is different, which makes the entire process so enjoyable and informative.',
       'portrait.png');
INSERT INTO profile(id, status_id, name, tagline, landing, about, image_url)
VALUES (3,
       1,
       'Software Engineering',
       'Looking for a software engineer? I''m your guy.',
       'I''m a software engineer based in Austin, TX. I love working on all sides of web development, whether it involves the front-end, back-end, database, or cloud computing.',
       'I strive to develop clean and neatly architectured software for the web. I have experience ranging from developing simple single-page applications to working in complex enterprise-level solutions.',
       'portrait.png');

INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (1, 1, 'C++', 1);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (2, 1, 'JUCE', 2);

INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (3, 2, 'C#', 1);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (4, 2, 'Unity', 2);

INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (5, 3, 'TypeScript', 1);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (6, 3, 'Angular', 2);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (7, 3, 'Scala', 3);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (8, 3, 'Play', 4);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (9, 3, 'NestJS', 5);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (10, 3, 'Node', 6);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (11, 3, 'PostgreSQL', 7);
INSERT INTO profile_technology(id, profile_id, name, display_order) VALUES (12, 3, 'Google Cloud', 8);
