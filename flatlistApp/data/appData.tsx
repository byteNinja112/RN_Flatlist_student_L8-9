/*
    we can also declare arrays 
 */

type dataType = {
    id: string; // unique identifier for each element in a list (ex: student id number)
    title: string; // what I display (ex: George [when there are multiple Georges])
  }

  const DATA: dataType[] = [
    {id: "1", title: "First"},
    {id: "2", title: "Second"},
    {id: "3", title: "Third"},
    {id: "4", title: "Fourth"},

  ];

  // don't use "default" when you are exporting multiple items from the same file
  export {dataType, DATA}