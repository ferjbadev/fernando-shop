import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
    params: {
        id: Category;
    }
}

/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line react/display-name
export default function ({ params }: Props) {

    const { id } = params
    const products = seedProducts.filter(product => product.gender === id)

    const labels: Record<Category, string> = {
        'kid': 'Kids',
        'men': 'Men',
        'women': 'Women',
        'unisex': 'Unisex',
    }
    // if (id === 'not-found') {
    //     notFound();
    // }

    return (
        <>

            <Title
                className="flex flex-col justify-center items-center hover:underline font-semibold"
                title={`Products for ${labels[id]}`}
                subtitle="You can find what you are looking for:" />

            <ProductGrid products={products} />
        </>
    );
}