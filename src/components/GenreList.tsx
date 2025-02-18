import React from "react";
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, List, ListItem} from "@chakra-ui/react";


interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data} = useGenres()
    return (

        <List.Root style={{listStyleType: "none", padding: 0, margin: 0}}>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY={"5px"} paddingX={"10px"}>
                    <Button whiteSpace={'normal'} textAlign={'left'}
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            onClick={() => onSelectGenre(genre)}
                            variant={"ghost"} fontSize={"20px"}>
                        {genre.name}
                    </Button>
                </ListItem>))}
        </List.Root>

    )
}

export default GenreList