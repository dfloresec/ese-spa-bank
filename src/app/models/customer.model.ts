export interface Customer {
  id?: number; // Opcional, si se usa para identificar clientes existentes
  name: string;
  gender: 'M' | 'F';
  age: number;
  identification: string;
  address: string;
  phone: string;
  password: string;
  state: boolean;
}