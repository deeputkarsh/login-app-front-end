import React from 'react';
import Slider from '../../commonComponents/Slider';
import BottomBar from '../../commonComponents/BottomBar';
//import {getDetailsPageUrl} from '../../../common/productFunctions';

export default class Products extends React.Component {
    state = {
        activeIndex: 0
    }

    getImageSlider = () => {
        const products = this.props.subPost.products,
            imageList = products.length > 1 ? products.map(item => item.imgpath[0]) : products[0].imgpath,
            imageHtml = imageList.map((src, index) => {
                return (
                    <img 
                        src={src} 
                        key={index}
                    />
                );
            });

        return (
            <Slider
                className="image-list"
                onChange = {this.handleChange}
                showCount={true}
            >
                {imageHtml}
            </Slider>
        );
    }

    handleChange = (newIndex) => {
        if(this.props.subPost.products.length > 1) {
            this.setState({
                activeIndex: newIndex
            });
        }
    }

    handleButtonClick = () => {
        const product = this.props.subPost.products[this.state.activeIndex];

        if(product.isReceiveEnquiry) {
            console.log({
                itemcode: product.itemcode,
                itemsizecode: product.itemsizecode,
                variantid: product.variantid,
                saveEnqOnModalOpen: false,
                formId: product.formId,
            });
            /*openProductEnquiryModal && openProductEnquiryModal({
                itemcode: product.itemcode,
                itemsizecode: product.itemsizecode,
                variantid: product.variantid,
                saveEnqOnModalOpen: false,
                formId: product.formId,
            });*/
        }
    }

    render() {
        const product = this.props.subPost.products[this.state.activeIndex];
        /*const productHref = product.isSellOnline ? getDetailsPageUrl(
                product.name, 
                product.variantid,
                this.props.baseUrl
            ) : '';*/
        const productHref = product.isSellOnline ? 'www.google.com' : '';
        return (
            <div className="products-post-container">
                {this.getImageSlider()}
                <BottomBar
                    onClick = {this.handleButtonClick}
                    text = {product.isSellOnline ? 'BUY NOW' : 'ENQUIRE NOW'}
                    className = "product-button"
                    href={productHref}
                />
                <div className="product-details">
                    <div className="product-name jd-font-roboto-medium">
                        {product.name}
                    </div>
                    <div className="product-price">
                        <span className="icon-currency"></span>
                        <span>{product.price}</span>
                    </div>
                </div>
            </div>
        );
    }
}