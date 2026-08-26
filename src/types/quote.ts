import { StatusType } from '@/components/Status/types';

import { Service } from '@/types/service';

export interface Quote {
  id: string;
  title: string;
  client: string;
  price: number;
  status: StatusType;
  discountPct: string;
  items: Service[];
  createdAt: string;
  updatedAt: string;
  quoteNumber?: number;
}
