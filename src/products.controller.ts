import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('/products')
export class ProductsController{
    static products = [
        {
            id: '1',
            name: 'TV', 
            desciption: 'Best tv',
            image: 'game.png',
            price: '1000',
        },
        {
            id: '2',
            name: 'Iphone', 
            desciption: 'Best Iphone',
            image: 'safe.png',
            price: '999',
        },
        {
            id: '3',
            name: 'ChromeCast', 
            desciption: 'Best ChromeCast',
            image: 'submarine.png',
            price: '30',
        },
        {
            id: '4',
            name: 'Glasses', 
            desciption: 'Best Glasses',
            image: 'game.png',
            price: '100',
        },
    ];

    @Get('/')
    @Render('products/index')
    index(){
        const viewData = [];
        viewData['title'] = 'Products - Oline Store';
        viewData['subtitle'] = 'List of Products';
        viewData['products'] = ProductsController.products;
        return {
            viewData: viewData,
        };
    }

    @Get('/:id')
    @Render('products/show')
    show(@Param() params){
        const product = ProductsController.products[params.id - 1];
        const viewData = [];
        viewData['title'] = product.name + ' - Online Store';
        viewData['subtitle'] = product.name + ' - Product Information';
        viewData['product'] = product;
        return {
            viewData: viewData,
        };
    }
}