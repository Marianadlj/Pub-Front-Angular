export interface usuario {
  id?: string;
  nome: string;
  isAdmin: boolean;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  eventos: [];
}
