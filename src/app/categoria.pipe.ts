import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(ordem: any): any {
    switch (ordem) {
      case 'TROCA_MAIS':
        return 'Venda / Troca';
      case 'TROCA_MENOS':
        return 'Comprou';
        case 'DEPOSITO':
          return 'Depósito';
        case 'SAQUE':
          return 'Saque';

      default:
        return;
    }
  }

}
