data = [{
      "title": "Phantasm Brigade",
      "lastPlayedDate": "2022/11/10 10:59"
    },
    {
      "title": "Southern Cross",
      "lastPlayedDate": "2022/08/28 10:31"
    },
    {
      "title": "JUMPIN' JUMPIN'",
      "lastPlayedDate": "2022/09/10 09:24"
    },
    {
      "title": "GOODMEN",
      "lastPlayedDate": "2022/12/01 10:31"
    }]

data.sort((a, b) => new Date(a.lastPlayedDate) - new Date(b.lastPlayedDate));

  let table = ''

  data.map((song, i) => {
    const title = song.title
    const date = song.lastPlayedDate.split(' ')[0]
    table += `${title}\t${date}\n`
  })

  navigator.clipboard
  .writeText(table)
  .then(() => {
    confirm("Copied!")
  })
  .catch((error) => {
    confirm("Failed to copy content to clipboard:", error)
  })

  console.log(table)
