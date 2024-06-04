import { images } from './image.model';

interface products {
  categoryId: number;
  description: string;
  hair: string;
  id: number;
  link: images[];
  length: number;
  name: string;
  popular: string;
  price: number;
  sex: boolean;
  size: string;
  status: string;
  statusHair: string;
  stock: number;
}

interface productsForm {
  category: string;
  color: string;
  descrition: string;
  file: string;
  hair_loss: string;
  name: string;
  popularity: string;
  price: string;
  quantity: string;
  sex: string;
  size: string;
  style_hair: string;
}
interface productsLink {
  link: string;
}
interface productsDetal {
  name: string;
  price: number;
  id: number;
  status: string;
  stock: number;
  hair: string;
  categoryId: number;
  description: string;
  statusHair: string;
  popular: string ;
  size: string;
  sex: boolean;
  color: string;
  link: productsLink[];
}

class _productsModel {
  static FormRequest(item: productsForm, files: File[]): FormData {
    let form = new FormData();
    form.append('name', item.name);
    form.append('price', item.price);
    form.append('statusHair', item.hair_loss);
    form.append('hair', item.style_hair);
    form.append('status', 'Còn hàng');
    form.append('color', item.color);
    form.append('size', item.size);
    form.append('sex', item.sex);
    form.append('popular', item.popularity);
    form.append('stock', item.quantity);
    form.append('description', item.descrition);
    form.append('idCategory', item.category);
    for (let file of files) {
      form.append('images', file);
    }
    return form;
  }
}

export { products, productsForm, _productsModel , productsDetal};
