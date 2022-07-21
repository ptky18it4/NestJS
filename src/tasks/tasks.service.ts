/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 1,
      name: 'Potentilla gracilis Douglas ex Hook. var. fastigiata (Nutt.) S. Watson',
      status: false,
      email: 'bmcginty0@adobe.com',
      gender: 'Female',
    },
    {
      id: 2,
      name: 'Dubautia imbricata H. St. John & G.D. Carr',
      status: true,
      email: 'dmcadam1@yahoo.com',
      gender: 'Male',
    },
    {
      id: 3,
      name: 'Hypotrachyna oostingii (J.P. Dey) Hale',
      status: false,
      email: 'jpickburn2@usnews.com',
      gender: 'Male',
    },
    {
      id: 4,
      name: 'Orthothecium Schimp.',
      status: false,
      email: 'ltylor3@adobe.com',
      gender: 'Male',
    },
    {
      id: 5,
      name: 'Quercus gambelii Nutt. var. gambelii',
      status: true,
      email: 'lscherme4@scientificamerican.com',
      gender: 'Male',
    },
    {
      id: 6,
      name: 'Astragalus accidens S. Watson var. accidens',
      status: true,
      email: 'caymerich5@usnews.com',
      gender: 'Male',
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
}
