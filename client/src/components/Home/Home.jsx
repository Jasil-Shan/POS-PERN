import { Card, Divider } from "antd"
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(null)


    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    useEffect(() => {
        try {
            (async function () {
                const { data } = await axios.get('/getProducts')
                console.log(data);
                setProducts(data)
                setLoading(false)
            })();
        } catch (error) {
            console.log(error)
        }
    }, []);
    return (
        <>
            <Card title="POS SYSTEM" loading={loading}>
                { products.map((Item,index)=>(
                    <Card.Grid key={index} style={gridStyle}><h4>{Item.product_name}</h4>{Item.price} Rs</Card.Grid>
                    
                ))
                }
            </Card>
            <Divider type="vertical" />
        </>
    )
}
