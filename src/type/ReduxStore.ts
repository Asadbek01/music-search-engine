import { Track } from "./Interface";

interface ISongs {
    songs: Track
}

export interface ReduxStore {
music:{
    songs:ISongs[]
}
}