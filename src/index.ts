import askQuestion from "./functions/askQuestion"
import ConvertAndSave from "./functions/ConvertAndSave"

(async () => {
  try {
    console.log('Your File will generate in the json folder. Please have it in the data folder.')
    const fileName = await askQuestion('What file would you like to convert, NAME ONLY? ')

    ConvertAndSave({
      fileName: `${__dirname}\\data\\${fileName}.csv`,
      saveName: `${__dirname}\\json\\${fileName}.json`
    })
  } catch (err) {
    console.error(err);
  }
})()