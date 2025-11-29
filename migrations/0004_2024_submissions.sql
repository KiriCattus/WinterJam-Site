-- Migration number: 0004 	 2025-01-01T19:08:54.969Z
DELETE FROM submissions WHERE year = 2024;

INSERT INTO submissions (platform, modId, year, resubmission, created_at) VALUES
    ('curseforge', '954660', 2024, TRUE, '2024-12-27 13:41:34'),
    ('curseforge', '354046', 2024, TRUE, '2025-01-01 14:08:01'),
    ('curseforge', '951142', 2024, TRUE, '2025-01-24 18:27:13'),
    ('curseforge', '1185137', 2024, FALSE, '2025-01-24 22:33:14'),
    ('curseforge', '1186635', 2024, FALSE, '2025-01-25 12:03:53'),
    ('curseforge', '566213', 2024, TRUE, '2025-01-25 22:53:48'),
    ('curseforge', '424431', 2024, TRUE, '2025-01-26 17:17:17'),
    ('curseforge', '701458', 2024, TRUE, '2025-01-28 19:11:48'),
    ('curseforge', '1196769', 2024, FALSE, '2025-02-12 19:24:49'),
    ('curseforge', '1201244', 2024, FALSE, '2025-02-16 13:00:27'),
    ('curseforge', '561319', 2024, TRUE, '2025-02-16 15:32:38'),
    ('curseforge', '1203137', 2024, FALSE, '2025-02-18 12:24:26'),
    ('curseforge', '420856', 2024, TRUE, '2025-02-20 13:45:25'),
    ('curseforge', '1200113', 2024, FALSE, '2025-02-24 21:41:02'),
    ('curseforge', '1207777', 2024, FALSE, '2025-03-14 00:20:55'),
    ('curseforge', '1208424', 2024, FALSE, '2025-03-14 00:22:11'),
    ('curseforge', '556372', 2024, TRUE, '2025-03-14 13:44:52'),
    ('curseforge', '1212135', 2024, FALSE, '2025-03-16 09:43:33'),
    ('curseforge', '308081', 2024, TRUE, '2025-03-19 22:03:25'),
    ('curseforge', '746338', 2024, FALSE, '2025-03-19 22:11:44')
    ;
