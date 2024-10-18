import { Link } from "react-router-dom"

const ProductItem = (props) => {
    const product = props.product
    return (
        <div class="postion-relative w-100">
            <Link href="">
                <img src={product.image} class="w-100 lazyload rounded" style={{ aspectRatio: 1 }} alt="" />
                <div class="text-center d-flex flex-column mt-2 item-info">
                    <div class="px-2">
                        <p class="mb-1 fw-bold">{product.name}</p>
                    </div>
                    {product.price ? (
                        <div>
                            {
                                product.special ? (
                                    <div>
                                        <del class="old-price small">{product.listed_price_format}</del>
                                        <span class="fw-bold price ms-1">{product.special_format}</span>
                                    </div>
                                ) : (
                                    <span class="">{product.price_format}</span>
                                )
                            }
                            {product.price && product.special && (
                                <div class="text-white d-flex justify-content-center align-items-center ms-2 position-absolute sale_off" style={{ top: '10px', right: '10px' }}>
                                    {Math.ceil((product.price - product.special) * 100 / product.price)}%
                                </div>
                            )

                            }

                        </div>
                    ) : (
                        <span class="text-primary">Liên hệ</span>
                    )}

                </div>
            </Link>
        </div>
    )
}

export default ProductItem