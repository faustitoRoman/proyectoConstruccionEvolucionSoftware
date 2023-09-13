# Proyecto Construcción y Evolución: Documentación API

## Nombre del proyecto: 
APILyon

## Métodos:

### `producto.controller.js`

#### **`getProductos`**
- **Purpose**: To retrieve all products from the database.
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: A JSON object containing all the products.
- **SQL Query Used**: `queries.getAllProducts`.

#### **`createNuevoProducto`**
- **Purpose**: To create a new product in the database.
- **Parameters**:
  - `req`: The request object containing the product details in `req.body`.
  - `res`: The response object.
- **Returns**: A message confirming the creation of the new product.
- **SQL Query Used**: `queries.addNewProduct`.

#### **`getProductoById`**
- **Purpose**: To retrieve a product by its ID from the database.
- **Parameters**:
  - `req`: The request object containing the product ID in `req.params.id`.
  - `res`: The response object.
- **Returns**: A JSON object containing the product details.
- **SQL Query Used**: `queries.getProductById`.

#### **`deleteProductoById`**
- **Purpose**: To delete a product by its ID from the database.
- **Parameters**:
  - `req`: The request object containing the product ID in `req.params.id`.
  - `res`: The response object.
- **Returns**: A message confirming the deletion of the product.
- **SQL Query Used**: `queries.deleteProduct`.

#### **`getTotalProductos`**
- **Purpose**: To get the total number of products in the database.
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: A JSON object containing the total number of products.
- **SQL Query Used**: `queries.getTotalProduct`.

#### **`updateProductoById`**
- **Purpose**: To update the details of a product by its ID in the database.
- **Parameters**:
  - `req`: The request object containing the product ID in `req.params.id` and the new details in `req.body`.
  - `res`: The response object.
- **Returns**: A message confirming the update of the product details.
- **SQL Query Used**: `queries.updateProductById`.

### `query.js`

This file exports an object containing various SQL queries that are used in different methods in the `producto.controller.js` file. Here are the SQL queries:

#### **`queries.getAllProducts`**
- **SQL Query**: `SELECT * FROM producto`.
- **Purpose**: To retrieve all products from the database.

#### **`queries.addNewProduct`**
- **SQL Query**: `INSERT INTO producto (id,nombre,cantidad,tipo) VALUES (@id, @nombre, @cantidad, @tipo)`.
- **Purpose**: To add a new product to the database.

#### **`queries.getProductById`**
- **SQL Query**: `SELECT * FROM producto WHERE id = @id`.
- **Purpose**: To retrieve a product by its ID from the database.

#### **`queries.deleteProduct`**
- **SQL Query**: `DELETE FROM producto WHERE id = @id`.
- **Purpose**: To delete a product by its ID from the database.

#### **`queries.getTotalProduct`**
- **SQL Query**: `SELECT COUNT(*) FROM producto`.
- **Purpose**: To get the total number of products in the database.

#### **`queries.updateProductById`**
- **SQL Query**: `UPDATE producto SET nombre = @nombre, cantidad = @cantidad, tipo = @tipo WHERE id = @id`.
- **Purpose**: To update the details of a product by its ID in the database.
