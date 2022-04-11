// Write your solution below:

const sorter = (str) => {
  const strArr = str.split("");
  let listS = 0;
  let listM = 0;
  let listL = 0;

  listSorted = "";

  strArr.forEach((element) => {
    if (element.toLowerCase() === "s") {
      listS++;
    }
    if (element.toLowerCase() === "m") {
      listM++;
    }
    if (element.toLowerCase() === "l") {
      listL++;
    }
  });
  for (let i = 0; i < listS; i++) {
    listSorted += "s";
  }
  for (let i = 0; i < listM; i++) {
    listSorted += "m";
  }
  for (let i = 0; i < listL; i++) {
    listSorted += "l";
  }
  return listSorted;
};

console.log(sorter("ssmlssmmllmmsmlmsmlmsss"));
