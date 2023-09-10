import {getConnection, sql, queries} from '../database';

export const getProductos = async (req, res) => {   
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);    
        res.json(result.recordset);        
    } catch (error) {
        res.status(500);
        res.send(error.message);        
    } 
    
};

export const createNuevoProducto = async(req, res) => {
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
};

export const getProductoById = async (req, res) => {  
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
     
};

export const deleteProductoById = async (req, res) => {  
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
    
};

export const getTotalProductos = async (req, res) => {   
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTotalProduct);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);            
    }    
};

export const updateProductoById = async(req, res) => {
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
};

