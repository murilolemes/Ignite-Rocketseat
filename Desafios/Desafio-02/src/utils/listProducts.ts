import { Product } from '../reducers/products/reducer'

import americanoSVG from '../assets/coffee/Type=Americano.svg'
import expressoCremosoSVG from '../assets/coffee/Type=Expresso Cremoso.svg'
import expressoSVG from '../assets/coffee/Type=Expresso.svg'
import arabeSVG from '../assets/coffee/Type=Árabe.svg'
import cafeLeiteSVG from '../assets/coffee/Type=Café com Leite.svg'
import cafeGeladoSVG from '../assets/coffee/Type=Café Gelado.svg'
import capuccinoSVG from '../assets/coffee/Type=Capuccino.svg'
import chocolateSVG from '../assets/coffee/Type=Chocolate Quente.svg'
import cubanoSVG from '../assets/coffee/Type=Cubano.svg'
import havaianoSVG from '../assets/coffee/Type=Havaiano.svg'
import irlandesSVG from '../assets/coffee/Type=Irlandês.svg'
import latteSVG from '../assets/coffee/Type=Latte.svg'
import macchiatoSVG from '../assets/coffee/Type=Macchiato.svg'
import mochaccinoSVG from '../assets/coffee/Type=Mochaccino.svg'

export const arrayProducts: Product[] = [
  {
    id: '1',
    img: expressoSVG,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 8.9,
    total: 8.9,
    amount: 1,
    types: ['Tradicional'],
  },
  {
    id: '2',
    img: americanoSVG,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 7.9,
    total: 7.9,
    amount: 1,
    types: ['Tradicional'],
  },
  {
    id: '3',
    img: expressoCremosoSVG,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    total: 9.9,
    amount: 1,
    types: ['Tradicional'],
  },
  {
    id: '4',
    img: cafeGeladoSVG,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 10.9,
    total: 10.9,
    amount: 1,
    types: ['Tradicional', 'Gelado'],
  },
  {
    id: '5',
    img: cafeLeiteSVG,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 6.9,
    total: 6.9,
    amount: 1,
    types: ['Tradicional', 'Com Leite'],
  },
  {
    id: '6',
    img: latteSVG,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 11.9,
    total: 11.9,
    amount: 1,
    types: ['Tradicional', 'Com Leite'],
  },
  {
    id: '7',
    img: capuccinoSVG,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 12.9,
    total: 12.9,
    amount: 1,
    types: ['Tradicional', 'Com Leite'],
  },
  {
    id: '8',
    img: macchiatoSVG,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 5.9,
    total: 5.9,
    amount: 1,
    types: ['Tradicional', 'Com Leite'],
  },
  {
    id: '9',
    img: mochaccinoSVG,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 15.9,
    total: 15.9,
    amount: 1,
    types: ['Tradicional', 'Com Leite'],
  },
  {
    id: '10',
    img: chocolateSVG,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 14.9,
    total: 14.9,
    amount: 1,
    types: ['Especial', 'Com Leite'],
  },
  {
    id: '11',
    img: cubanoSVG,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 19.9,
    total: 19.9,
    amount: 1,
    types: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: '12',
    img: havaianoSVG,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 17.9,
    total: 17.9,
    amount: 1,
    types: ['Especial'],
  },
  {
    id: '13',
    img: arabeSVG,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 20.9,
    total: 20.9,
    amount: 1,
    types: ['Especial'],
  },
  {
    id: '14',
    img: irlandesSVG,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 4.9,
    total: 4.9,
    amount: 1,
    types: ['Especial', 'Alcoólico'],
  },
]
