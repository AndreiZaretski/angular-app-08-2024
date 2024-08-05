export interface UsersData {
  page: Page;
  users: User[];
  data: Data[];
}

interface Page {
  total: number;
  current: number;
  size: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  create_at: number;
  update_at: number;
}

interface Data {
  user_id: number;
  is_admin: boolean;
  is_ecp: boolean;
  status: 'ACTIVE';
}
