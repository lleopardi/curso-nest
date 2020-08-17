import { Injectable, Scope } from '@nestjs/common';
import { CoffeesService } from '../coffees/coffees.service';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeServices: CoffeesService) {}
}
