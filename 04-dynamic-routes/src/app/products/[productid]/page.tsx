import { notFound } from "next/navigation";

export default function Products({params}:{params: {productid:string}}) {
    if(parseInt(params.productid)>1000)notFound();
    if(isNaN(parseInt(params.productid)))notFound();
    return (

        <h1>product {params.productid}</h1>

    );
  }