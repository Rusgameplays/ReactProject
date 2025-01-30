import {Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import {useState} from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {Genre} from "./hooks/useGenres";
import React from "react";


const App = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

    return <Grid
        templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav""aside main"`
        }}
        templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
        }}
    >
        <GridItem area="nav">
            <NavBar/>
        </GridItem>
        <GridItem area="aside">
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        <GridItem area="main" paddingX={"17px"}>
            <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
    </Grid>
};

export default App;
