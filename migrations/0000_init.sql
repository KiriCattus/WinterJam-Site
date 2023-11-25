-- Migration number: 0000 	 2023-11-25T13:31:27.331Z
DROP TABLE IF EXISTS submissions;
DROP INDEX IF EXISTS submissions_by_year;
DROP INDEX IF EXISTS submissions_by_platform_modid_year;

CREATE TABLE submissions (
    id INTEGER PRIMARY KEY,
    platform TEXT NOT NULL DEFAULT 'curseforge',
    modId TEXT NOT NULL,
    year INTEGER NOT NULL DEFAULT (strftime('%Y', 'now')),
    resubmission BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX submissions_by_year ON submissions (year);
CREATE UNIQUE INDEX submissions_by_platform_modid_year ON submissions (platform, modId, year);