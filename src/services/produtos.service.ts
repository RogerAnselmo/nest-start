import { Injectable } from "@nestjs/common";
import { Produto } from "src/models/produto.model";

@Injectable()
export class ProdutosService {

    constructor() { }

    produtos: Produto[] = [
    //     new Produto('CD-01', 'Game of Thrones', 300),
    //     new Produto('CD-02', 'Ted mike', 129.90),
    //     new Produto('CD-03', 'Baby boy', 75.79),
    //     new Produto('CD-04', 'Bazingudo', 113),
    //     new Produto('CD-05', 'Shaman Help fracview', 50.99),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id:number): Produto {
        return this.produtos.find(p=> p.id == id);
    }

    cadastrar(produto: Produto): Produto {
        this.produtos.push(produto);
        console.log(this.produtos)
        return produto;
    }

    atualizar(produtoAtualizado: Produto): Produto {

        this.produtos.map(p=> {
            if(p.id === produtoAtualizado.id){
                p = produtoAtualizado;
            }
        });

        return produtoAtualizado;
    }

    delete(id: number){
        this.produtos = this.produtos.filter(p=> p.id != id);
    }

}