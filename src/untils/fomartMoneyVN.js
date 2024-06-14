const fomartMoneyVN = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ';

};

export default fomartMoneyVN;
