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
  var length = 0;
  for (i=0; i<companySalesData.length; i++){
    for (j=0; j<companySalesData[i].sales.length; j++){
      if (j === 0){
        total[i] = 0 ;
        // results[companySalesData[i].company = companySalesData[i].name;
      }
        total[i] += companySalesData[i].sales[j];
    }

  }
  var taxes = [];
  var company = [];
  for (i=0; i < total.length; i++){
    var taxRate= salesTaxRates[companySalesData[i].province];
    taxes[i] = taxRate * total[i];
    company[i] = companySalesData[i].name;
  }
  // console.log(taxes[0]);
  // console.log(total[0]);
  // console.log(company[0]);
  var results = {};
  for (i=0; i <company.length; i++){
    if (company[i] in results){
     results[company[i]].totalSales += total[i];
     results[company[i]].totalTaxes += taxes[i];
    }
    else {
      results[company[i]] = { totalSales: total[i],
                              totalTaxes: taxes[i]};
    }
  }
  return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

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

object = {}
object[company[0]] = {total salee etc...}
*/