/* tslint:disable */
import { Category } from './category';
import { Tag } from './tag';
export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: Array<string>;
  tags?: Array<Tag>;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';
}
