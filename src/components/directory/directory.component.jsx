import DirectoryItem from '../driectory-item/directory-item.component';
import './_directory.styles.scss'

const Directory = () => {

    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            route: 'shop/hats'
            
        },
        {
            id: 2,
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            route: 'shop/jackets'
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            route: 'shop/sneakers'
        },
        {
            id: 4,
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            route: 'shop/womens'
        },
        {
            id: 5,
            title: "mens",
            imageUrl: "https://images.pexels.com/photos/17245493/pexels-photo-17245493.jpeg",
            route: 'shop/mens'
        }
    ];

    return (
         <div className="directory-container">
            {categories.map((category)=> (
            <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Directory;