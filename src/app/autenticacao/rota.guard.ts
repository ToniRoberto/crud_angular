import { CanActivateFn, Router } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {
  //constante
  const rota = new Router;

  //redirecionamento
  if(localStorage.getItem('nome') === 'Toni'){
    return true;
  }else{
    rota.navigateByUrl('/pagina1');
  }
  return false;
};
