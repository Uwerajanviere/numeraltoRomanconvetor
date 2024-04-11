let numbersAndRoman = [
    {number:1000,roman:'M'},//0
    {number:900,roman:'CM'},//1
    {number:500,roman:'D'},//2
    {number:400,roman:'CD'},//3
    {number:100,roman:'C'},//4
    {number:90,roman:'XC'},//5
    {number:50,roman:'L'},//6
    {number:40,roman:'XL'},//7
    {number:10,roman:'X'},//8
    {number:9,roman:'IX'},//9
    {number:5,roman:'V'},//10
    {number:4,roman:'IV'},//11
    {number:1,roman:'I'},//12
  
  ];
  function convert(arabicnumber){
  let romanleter= '';
  number = arabicnumber;
  for(let i=0;i<=numbersAndRoman.length;i++){
  if(numbersAndRoman[i].number <=  number){
  number = number - numbersAndRoman[i].number;
  romanleter = romanleter + numbersAndRoman[i].roman;
  i--;
  document.querySelector('#output').innerText = romanleter;

  }
  
  }
  }
  
  document.querySelector('#convert-btn').addEventListener('click',()=>{
    let number = document.querySelector('#number').value;
    convert(number);
    
  })
  
