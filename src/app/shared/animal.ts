import { Porte } from './porte.enum';
import { Raca } from './raca.enum';
import { Sexo } from './sexo.enum';
import { Tipo } from './tipo.enum';

export class Animal {
    id: number;
    nome: string;
    tipo: Tipo;
    raca: Raca;
    porte: Porte;
    sexo: Sexo;
}
