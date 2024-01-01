-- Migration number: 0002 	 2024-01-01T13:10:57.399Z
DELETE FROM submissions WHERE year = 2023;

INSERT INTO submissions (platform, modId, year, resubmission, created_at) VALUES
    ("curseforge", '426387', 2023, TRUE, "2023-12-07 00:12:48"),
    ("curseforge", '946184', 2023, FALSE, "2023-12-07 01:40:01"),
    ("curseforge", '948439', 2023, FALSE, "2023-12-14 14:28:34"),
    ("curseforge", '951142', 2023, FALSE, "2023-12-17 16:45:24"),
    ("curseforge", '410698', 2023, TRUE, "2023-12-18 05:57:28"),
    ("curseforge", '354046', 2023, TRUE, "2023-12-19 00:54:38"),
    ("curseforge", '701458', 2023, TRUE, "2023-12-19 01:54:19"),
    ("curseforge", '566142', 2023, TRUE, "2023-12-19 02:22:26"),
    ("curseforge", '952071', 2023, FALSE, "2023-12-20 20:13:46"),
    ("curseforge", '426031', 2023, TRUE, "2023-12-21 01:26:20"),
    ("curseforge", '353942', 2023, TRUE, "2023-12-21 01:26:55"),
    ("curseforge", '308663', 2023, TRUE, "2023-12-21 01:27:29"),
    ("curseforge", '558761', 2023, TRUE, "2023-12-21 01:28:02"),
    ("curseforge", '310088', 2023, TRUE, "2023-12-21 01:28:41"),
    ("curseforge", '424431', 2023, TRUE, "2023-12-21 01:29:04"),
    ("curseforge", '556372', 2023, TRUE, "2023-12-21 01:29:48"),
    ("curseforge", '566213', 2023, TRUE, "2023-12-21 01:31:29"),
    ("curseforge", '915336', 2023, FALSE, "2023-12-24 03:19:20"),
    ("curseforge", '953945', 2023, FALSE, "2023-12-25 07:06:45"),
    ("curseforge", '953740', 2023, FALSE, "2023-12-25 11:47:26"),
    ("curseforge", '552628', 2023, TRUE, "2023-12-27 18:37:42"),
    ("curseforge", '954660', 2023, FALSE, "2023-12-28 12:53:35"),
    ("curseforge", '430836', 2023, TRUE, "2023-12-31 21:38:27");