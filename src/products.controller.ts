import { Controller, Get, Logger, Param, Render, Res } from '@nestjs/common';
import { ProductService } from './models/products.service';

@Controller('/products')
export class ProductsController{
    constructor(private readonly productService: ProductService){}
    
    @Get('/')
    @Render('products/index')
    async index(){
        const viewData = [];
        viewData['title'] = 'Products - Oline Store';
        viewData['subtitle'] = 'List of Products';
        viewData['products'] = await this.productService.findAll();
        return {
            viewData: viewData,
        };
    }

    @Get('/:id')
    async show(@Param() params, @Res() response){
        const product = await this.productService.findOne(params.id);
        if (product === null){
            return response.redirect('/products');
        }
        const viewData = [];
        viewData['title'] = product.getName() + ' - Online Store';
        viewData['subtitle'] = product.getName() + ' - Product Information';
        viewData['product'] = product;
        return response.render('products/show', {viewData:viewData});
    }
}