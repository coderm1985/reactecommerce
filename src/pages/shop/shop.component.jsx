import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collecton-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shope-page">
                {
                    collections.map(({id,...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;