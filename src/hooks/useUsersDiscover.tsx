import { useState, useEffect } from 'react';
import { IUser } from '../types';

export interface IUseUserDiscover {
    usersToDiscover: IUser[];
    refetch: () => void;
}
export const useUsersDiscover = ({ usersToDiscover, refetch }: IUseUserDiscover) => {
    const [users, setUsers] = useState<IUser[]>([]);

    const handleFetchNewPeopleWhenIsFullySwiped = () => {
        refetch();
    };

    useEffect(() => {
        if (users.length > 0) {
            return;
        }

        handleFetchNewPeopleWhenIsFullySwiped();
    }, [users.length]);

    useEffect(() => {
        setUsers(usersToDiscover);
    }, [usersToDiscover]);

    return { users, setUsers };
};
