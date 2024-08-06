import { User, UsersData } from '../models/users-data';
import { UsersTableData } from '../models/users-table-data';

export const mergeUserData = (usersData: UsersData): UsersTableData[] => {
  const userMap = new Map<number, User>();

  let id = 1;

  usersData.users.forEach(user => {
    userMap.set(user.id, user);
  });

  return usersData.data.map(dataItem => {
    const user = userMap.get(dataItem.user_id);

    return {
      ...dataItem,
      table_id: id++,
      name: user?.name || 'NoUser',
      email: user?.email || 'NoEmail',
      phone: user?.phone || 'NoPhone',
      create_at: user?.create_at || 'NoData',
      update_at: user?.update_at || 'NoData',
    };
  });
};
