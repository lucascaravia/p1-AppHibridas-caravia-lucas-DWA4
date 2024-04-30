import usersRouter from './usersRouter.js'
import productsRouter from './productsRouter.js'
import cartRouter from './cartRouter.js'

export function routerAPI(app){

    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
    app.use('/cart', cartRouter);
}