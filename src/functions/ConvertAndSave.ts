import fs from 'fs'
import csv from 'csv-parser'

export default function ConvertAndSave ({
  fileName,
  saveName
}: {
  fileName: string,
  saveName: string
}): void {
  const results: object[] = []

  fs
    .createReadStream(fileName)
    .pipe(csv())
    .on('data', row => results.push(row))
    .on('end', () => {
      const formJsonFromObject = JSON.stringify(results, null, 2);
      fs.writeFileSync(saveName, formJsonFromObject)
    })
}