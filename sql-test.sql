/* QUERY untuk menampilkan customerNumber siapa saja yang memesan
productLine Classic Cars dimana total hitung atau COUNT productionline
tersebut lebih besar dari 23. 
*/

SELECT customerNumber
FROM orders o
JOIN orderdetails od
    ON od.orderNumber = o.orderNumber
JOIN products p
    ON p.productCode = od.productCode
WHERE p.productLine = 'Classic Cars'
GROUP BY o.customerNumber
HAVING COUNT(p.productLine) > 23;
ORDER BY o.customerNumber;