# `CSV To JSON`

### `Created By: David Couch`
#### `Created On: 7/25/2021`

## `About`

An application to convert CSV to JSON

## `Tech Used: `

- `csv-parser`
- `TypeScrip`

## `Installation :`
* Go to ( https://github.com/dcouch440/csv-to-json ).

*  Navigate to the code button on the Github website.\

- Copy the HTTPS code by clicking the clipboard next to the link.

- Within your Bash terminal navigate to your desired location by using cd fallowed by your desired directory.

```bash
 cd Desktop
```

- Once you have chosen your desired directory use the command.

```bash
git clone https://github.com/dcouch440/csv-to-json.git
```

<div
  style="
    background-color: #d1ecf1;
    color: grey; padding: 6px;
    font-size: 9px;
    border-radius: 5px;
    border: 1px solid #d4ecf1;
    margin-bottom: 12px"
>
  <span
    style="
      font-size: 12px;
      font-weight: 600;
      color: #0c5460;"
  >
    ⓘ
  </span>
  <span
    style="
      font-size: 12px;
      font-weight: 900;
      color: #0c5460;
      margin-bottom: 24px"
  >
    Note :
  </span>
  If you have any problems make sure your HTTPS code is correct! The example above might not be the most recent HTTPS code!
</div>

* Then after the process is completed use the command.

``` bash
code .
```

From here with the project open type.

```
yarn install
```

Drop your CSV in the data folder (located in the data folder).

then type

```
yarn convert
```

this will prompt you for a file name.
  
Enter the file name excluding the extension, we already know its a csv.
  
Your file will be located in the json folder.
  