import Filters from '@/components/products/filters';
import List from '@/components/products/list';
import { productModel, categoryModel } from '@/models';

export default async function Page({ searchParams }) {
    const category = await categoryModel.getCategory({ slug: searchParams.category });
    const products = await productModel.getProducts({ category: category?.name });
    const categories = await categoryModel.getCategories();
    return (
        <div className='mx-auto py-10 max-w-7xl flex md:flex-row flex-col gap-8 mb-8'>
            <div className='w-full md:w-96 px-3 md:px-0'>
                <Filters categories={categories} />
            </div>
            <div className='w-full'>
                <List products={products} />
            </div>
        </div>
    );
}
