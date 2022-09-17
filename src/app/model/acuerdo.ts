import { Agricultor } from "./agricultor"
import { Mayorista } from "./mayorista"

export class Acuerdo{
    id:number = 0
    descuento:number = 0
    fechaInicio: Date = new Date()
    fechaFin: Date = new Date()
    agricultor: Agricultor = new Agricultor()
    mayorista: Mayorista = new Mayorista()
}