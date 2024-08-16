export interface IUser {
    id: number;
    profileImg: string;
    name: string;
    age: string;
    description: string;
    distance: string;
}

export interface IDiscover {
    usersToDiscover: IUser[];
    refetch: () => void;
}
