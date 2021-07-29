import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeConfig } from './config/sequelize.config';
import { ProdutosController } from './controllers/produtos.controller';
import { Produto } from './models/produto.model';
import { ProdutosService } from './services/produtos.service';

@Module({
  imports: [SequelizeModule.forRoot(new SequelizeConfig().databaseInfo()), 
    SequelizeModule.forFeature([Produto])],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
