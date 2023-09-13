# Proyecto Construcción y Evolución: Documentación API

## Métodos:

### `producto.controller.js`
    
#### **`getProductos`**
- **Purpose**: 
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: 
- **SQL Query Used**: 
```javascript
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);    
        res.json(result.recordset);        
    } catch (error) {
        res.status(500);
        res.send(error.message);        
    } 
    
```

#### **`createNuevoProducto`**
- **Purpose**: 
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: 
- **SQL Query Used**: 
```javascript
    const {id,nombre,cantidad} = req.body;
    let { tipo } = req.body;
    if (id == null || nombre == null || cantidad == null){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});               
    } 
    if (tipo == null) tipo = "POR ESPECIFICAR";
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input("id",sql.Int,id)
        .input("nombre",sql.VarChar,nombre)
        .input("cantidad",sql.Int,cantidad)
        .input("tipo",sql.VarChar,tipo)
        .query(queries.addNewProduct);   
        res.json({id,nombre,cantidad,tipo});
    } catch (error) {
        res.status(500);
        res.send(error.message);            
    }
```

#### **`getProductoById`**
- **Purpose**: 
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: 
- **SQL Query Used**: 
```javascript
    const{id} = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('id',sql.Int,id).query(queries.getProductById);
        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);            
    }
     
```

#### **`deleteProductoById`**
- **Purpose**: 
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: 
- **SQL Query Used**: 
```javascript
    const{id} = req.params;
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id',sql.Int,id)
        .query(queries.deleteProduct);     
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);            
    }
    
```

#### **`getTotalProductos`**
- **Purpose**: 
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: 
- **SQL Query Used**: 
```javascript
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTotalProduct);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);            
    }    
```

#### **`updateProductoById`**
- **Purpose**: 
- **Parameters**:
  - `req`: The request object.
  - `res`: The response object.
- **Returns**: 
- **SQL Query Used**: 
```javascript
    const {nombre, cantidad, tipo} = req.body;
    const {id}= req.params;
    if (nombre == null || cantidad == null, tipo === null){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});               
    } 
    try{
        const pool = await getConnection();
        await pool.request()
        .input("nombre",sql.VarChar,nombre)
        .input("cantidad",sql.Int,cantidad)
        .input("tipo",sql.VarChar,tipo)
        .input("id",sql.Int,id)    
        .query(queries.updateProductById); 
        res.json({nombre, tipo, cantidad});        
    } catch (error) {
        res.status(500);
        res.send(error.message);            
    }        
```

### `query.js`
    - **Purpose**: To define all the SQL queries used in the `producto.controller.js` file.
```javascript
    getAllProducts: 'SELECT * FROM producto',
    addNewProduct: 'INSERT INTO producto (id,nombre,cantidad,tipo) VALUES (@id, @nombre, @cantidad, @tipo)',
    getProductById: 'SELECT * FROM producto WHERE id = @id',
    deleteProduct: 'DELETE FROM producto WHERE id = @id',
    getTotalProduct: 'SELECT COUNT(*) FROM producto',
    updateProductById: 'UPDATE producto SET nombre = @nombre, cantidad = @cantidad, tipo = @tipo WHERE id = @id'
```
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
