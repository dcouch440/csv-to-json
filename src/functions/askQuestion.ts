import readline from 'readline';

export default function askQuestion (query: string): Promise<string | void> | void {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  })

  return new Promise<string | void>(
    (resolve, reject) => {
      try {
        rl.question(query, (ans: string) => {
          rl.close()
          resolve(ans)
        })
      } catch (err) {
        reject(err)
      }
    }
  )
}