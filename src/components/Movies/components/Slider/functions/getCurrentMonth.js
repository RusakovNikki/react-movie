// Функция возвращает текущий месяц в необходимом для API формате

function getCurrentMonth() {
  const date = new Date();
  
  switch (date.getMonth()) {
    case 0:
      return 'JANUARY';
    case 1:
      return 'FEBRUARY';
    case 2:
      return 'MARCH';
    case 3:
      return 'APRIL';
    case 4:
      return 'MAY';
    case 5:
      return 'JUNE';
    case 6:
      return 'JULY';
    case 7:
      return 'AUGUST';
    case 8:
      return 'SEPTEMBER';
    case 9:
      return 'OCTOBER';
    case 10:
      return 'NOVEMBER';
    default:
      return 'DECEMBER';
  }
};

export {getCurrentMonth};