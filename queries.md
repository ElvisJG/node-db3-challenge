# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName FROM [Products]
JOIN Categories
ON Products.CategoryID = Categories.CategoryID
ORDER BY ProductName ASC;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName, OrderDate FROM [Orders]
JOIN Shippers
ON Orders.ShipperID = Shippers.ShipperID
WHERE OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity, ContactName from [Products]
JOIN [OrderDetails]
ON OrderDetails.ProductID = Products.ProductID
JOIN [Orders]
ON Orders.OrderID = OrderDetails.OrderID
JOIN [Customers]
ON Orders.CustomerID = Customers.CustomerID
WHERE Orders.OrderID = 10251
ORDER BY ProductName ASC;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName from [Customers]
JOIN [Orders]
ON Orders.CustomerID = Customers.CustomerID
JOIN [Employees]
ON Employees.EmployeeID = Orders.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT CategoryName, COUNT(DISTINCT Products.CategoryID) as Count from [Categories]
JOIN [Products]
ON Products.CategoryID = Categories.CategoryID

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT OrderID, SUM(Quantity) as ItemCount from [OrderDetails] GROUP BY OrderID
