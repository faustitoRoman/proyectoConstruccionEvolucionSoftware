
export const queries = {
    getAllProducts: 'SELECT * FROM producto',
    addNewProduct: 'INSERT INTO producto (id,nombre,cantidad,tipo) VALUES (@id, @nombre, @cantidad, @tipo)',
    getProductById: 'SELECT * FROM producto WHERE id = @id',
    deleteProduct: 'DELETE FROM producto WHERE id = @id',
    getTotalProduct: 'SELECT COUNT(*) FROM producto',
    updateProductById: 'UPDATE producto SET nombre = @nombre, cantidad = @cantidad, tipo = @tipo WHERE id = @id'
}