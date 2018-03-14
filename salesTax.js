var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
   // Implement your code here
  var total =[];
  var results = {};
  var length = 0;
  for (i=0; i<companySalesData.length; i++){
    for (j=0; j<companySalesData[i].sales.length; j++){
      if (j === 0){
        results[companySalesData[i]["totalSales"]] = 0 ;
        // results[companySalesData[i].company = companySalesData[i].name;
      }
        results[companySalesData[i]["totalSales"]] += companySalesData[i].sales[j];
    }
    console.log(results);
    length += 1;
  }
  var taxes = [];
  for (i=0; i < length; i++){
    var taxRate= salesTaxRates[companySalesData[i].province];
    results[companySalesData[i]["totalTaxes"]] = taxRate * results[companySalesData[i]["totalSales"]];
  }
  console.log(results);
}



var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/