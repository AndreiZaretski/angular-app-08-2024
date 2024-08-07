export interface FilterFormData {
  role: 'Админ' | 'Пользователь';
  status: 'ACTIVE' | 'INACTIVE';
  login: string | string;
  email: string | string;
  phone: number | string;
  create_at: number | string | Date;
  update_at: number | string | Date;
}
