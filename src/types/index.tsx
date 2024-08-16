export interface Breed {
    name: string;
    origin: string;
    energy_level: number;
    temperament: string;
}

export interface IUser {
    id: string;
    url: string;
    breeds: Breed[];
}

export interface IDiscover {
    usersToDiscover: IUser[];
    refetch: () => void;
    postVoteApi: () => void;
}
