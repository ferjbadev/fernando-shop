import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    }
}

/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line react/display-name
export default function ({ params }: Props) {

    const { id } = params
    if (id === 'kids') {
        notFound();
    }

    return (
        <div className="">
            <h1>Category Page {id}</h1>
        </div>
    );
}