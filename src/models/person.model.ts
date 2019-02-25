import { Entity, model, property } from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;


  constructor(data?: Partial<Person>) {
    super(data);
  }
}
