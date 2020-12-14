import { Porte } from './porte.enum';
import { Local } from './local.enum';
import { Sexo } from './sexo.enum';
import { Tipo } from './tipo.enum';

export class Animal {
    id: number;
    nome: string;
    tipo: Tipo;
    local: Local;
    porte: Porte;
    sexo: Sexo;
}
