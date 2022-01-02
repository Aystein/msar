import React from 'react';
import logo from './logo.svg';
import './App.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';
import { Chip } from '@mui/material';
import Papa from 'papaparse';
import EnhancedTable from './EnhancedTable';
import { generateKeyPairSync } from 'crypto';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];



function App() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [currentSource, setCurrentSource] = React.useState("")
  const [genres, setGenres] = React.useState<string[]>([])

  const [rows, setRows] = React.useState<any[]>([])
  const [filteredRows, setFilteredRows] = React.useState<any[]>([])

  React.useEffect(() => {
    Papa.parse("predictions.csv", {
      download: true,
      skipEmptyLines: true,
      complete: function (results) {
        const result = [] as any[]

        results.data.forEach((row: any, index) => {
          if (index !== 0) {
            result.push({
              id: row[0],
              artist: row[1],
              name: row[2],
              album: row[3],
              genres: JSON.parse(row[12].replaceAll('\'', '\"'))
            })
          }
        })

        setRows(result)
        setFilteredRows([...result])


        Papa.parse("dev_tags.csv", {
          download: true,
          skipEmptyLines: true,
          complete: function (results) {
            const genreSet = new Set<string>()

            results.data.forEach((row: any, index) => {
              if (index !== 0) {
                const genreArray = JSON.parse(row[1].replaceAll('\'', '\"'))
                genreArray.forEach((genre) => genreSet.add(genre))

                /**const r = result.find(e => e.id === row[0])
                if (r) {
                  r.genres = genreArray
                } else {
                  r.genres = []
                }**/
              }
            })

            setGenres(Array.from(genreSet))
          }
        });



        Papa.parse("id_youtube.csv", {
          download: true,
          skipEmptyLines: true,
          complete: function (results) {
            results.data.forEach((row: any, index) => {
              if (index !== 0) {
                const r = result.find(e => e.id === row[0])
                if (r) r.youtube = row[1]
              }
            })
          }
        });
      }
    })
  }, [])

  const filter = (personName) => {
    if (personName.length === 0) {
      setFilteredRows(rows)
    } else {
      setFilteredRows(rows.filter((row) => {
        return row.genres.find((genre) => personName.includes(genre)) !== undefined
      }))
    }
  }

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
    filter(event.target.value)
  };

  const handleDelete = (genre) => {
    const newState = [...personName]
    newState.splice(newState.indexOf(genre), 1)
    setPersonName(newState)
    filter(newState)
  };

  return (
    <div className="App">
      <header className="App-header">
        <FormControl sx={{ m: 2, width: 500 }}>
          <InputLabel id="demo-multiple-checkbox-label">Genres</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Genres" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip onMouseDown={(event) => {
                    event.stopPropagation();
                  }} key={value} label={value} onDelete={() => handleDelete(value)} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {genres.map((name) => (
              <MenuItem disableRipple key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <EnhancedTable
          cellClick={(name) => {
            const row = rows.find((row) => row.name === name)
            setCurrentSource(row.youtube)
          }}
          key={filteredRows.length} rows={filteredRows} />

        <iframe id="player" width="640" height="250"
          src={`http://www.youtube.com/embed/${currentSource.substr(32)}?enablejsapi=1&origin=http://example.com`}
        >
        </iframe>
      </header>
    </div>
  );
}



export default App;
