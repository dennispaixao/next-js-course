export default function Review({params}:{
    params: {
        productid:string
        reviewid:string
    }
}) {
    return (
        <h1>product {params.productid} review {params.reviewid}</h1>

    );
  }