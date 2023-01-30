import { CategoryType } from '../Core/Enum/CategoryType';
import { ProductType } from '../Core/Enum/ProductType';
import { Product } from '../Core/Interfaces/Auth/Product';
import $api from '../http';

function capitalize(s:any)
{
    return s && s[0].toUpperCase() + s.slice(1);
}
  
export default  class ProductService {
	static async get(type: ProductType, category: CategoryType) {
		let product = capitalize(type);
		let res = ProductType[product]
		
		const { data } = await $api.post<Product[]>('shoe', res,  );
		 return data;
		 
	}
}
