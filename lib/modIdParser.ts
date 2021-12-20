import fs from "fs";
import * as csvParse from "csv-parse";

export const getModIDs: (year: string) => Promise<number[]> = async (year: string) => {
    const filePath = `submissions/${year}.csv`;

    return new Promise((resolve, reject) => {
        const parser: csvParse.Parser = csvParse.parse({delimiter: ','}, (err, data: any[], info) => {
            if(err) {
                reject(err);
                return;
            }
            data.shift();
            resolve(data.map(row => parseInt(row[0])));
            resolve(data);
        });
        fs.createReadStream(filePath, { encoding: "utf8" }).pipe(parser);
    });
}