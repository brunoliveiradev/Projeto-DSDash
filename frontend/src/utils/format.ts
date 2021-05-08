import { format } from 'date-fns';

// função para arredondar um numero
export const round = (value: number, precision: number) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

//função auxiliar para formatar data padrão DD/MM/YYYY
export const formatLocalDate = (date: string, pattern: string) => {
  const dt = new Date(date);
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  return format(dtDateOnly, pattern);
}