import { Controller, Get, Render } from "@nestjs/common";
import { ProductService } from "../models/products.service";

@Controller('/admin/products')
export class AdminProductsController {
    constructor(private readonly productService: ProductService) { }

    @Get('/')
    @Render('admin/products/index')
    async index() {
        const viewData = [];
        viewData['title'] = 'Admin Page - Admin - Online Store';
        viewData['products'] = await this.productService.findAll();
        return {
            viewData: viewData,
        };
    }
}