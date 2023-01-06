import { Controller, Get, Render, Req } from "@nestjs/common";
import { OrderService } from "../models/order.service";

@Controller('/account')
export class AccountController {
    constructor(private readonly orderService: OrderService) { }

    @Get('/orders')
    @Render('account/orders')
    async orders(@Req() request) {
        const viewData = [];
        viewData['title'] = 'My Orders - Online Store';
        viewData['subtitle'] = 'My Orders';
        console.log(request.session.user);
        viewData['orders'] = await this.orderService.findByUserId(
            request.session.user.id,
        );
        return {
            viewData: viewData,
        };
    }
}