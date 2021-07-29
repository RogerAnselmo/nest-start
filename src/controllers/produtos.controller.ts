import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "src/models/produto.model";
import { ProdutosService } from "src/services/produtos.service";

@Controller('produtos')
export class ProdutosController{

    constructor(private produtosService: ProdutosService){}

    @Get()
    obterTodos(): Produto[]{
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id as number);
    }

    @Post()
    cadastrar(@Body() body): Produto{
        return this.produtosService.cadastrar(body as Produto);
    }

    @Put()
    atualizar(@Body() body): Produto{
        return this.produtosService.atualizar(body as Produto);
    }

    @Delete(':id')
    deletar(@Param() params): string {
        this.produtosService.delete(params.id as number)
        return `Produto ${params.id} apagado`;
    }

}