import React, { useState, useEffect } from 'react';
import imageData from '../Data/ItemsData';

function ImageFilter() {
    const [selectedType, setSelectedType] = useState('all');
    const [activeButton, setActiveButton] = useState(null);
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;

    const handleFilter = (type) => {
        setSelectedType(type);
        setActiveButton(type);
        setPage(1); // Reset the page when the filter changes
    };

    const [displayedImages, setDisplayedImages] = useState([]);

    const loadMoreImages = () => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newImages = (selectedType === 'all' ? imageData : imageData.filter((image) => image.type === selectedType)).slice(startIndex, endIndex);

        setDisplayedImages([...displayedImages, ...newImages]);

        setPage(page + 1);
    };

    const downloadImage = (imageUrl) => {
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        anchor.href = imageUrl;
        anchor.download = 'downloaded-image.jpg';

        // Trigger a click event on the anchor element to initiate the download
        anchor.click();

        // Clean up: remove the temporary anchor element
        document.body.removeChild(anchor);
    };

    useEffect(() => {
        const startIndex = 0;
        const endIndex = page * itemsPerPage;
        const currentFilteredImages =
            selectedType === 'all'
                ? imageData
                : imageData.filter((image) => image.type === selectedType);

        const newImages = currentFilteredImages.slice(startIndex, endIndex);

        setDisplayedImages(newImages);
    }, [selectedType, page]);

    return (
        <div className='render-div'>
            <h1 className='home-page-text'>
                <span className='home-page-span'>Explore User Creativity</span>
            </h1>
            <div className='filter-button-container'>
                
                    <button
                        className={activeButton === 'all' ? 'active-button' : 'filter-button'}
                        onClick={() => handleFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={activeButton === 'nature' ? 'active-button' : 'filter-button'}
                        onClick={() => handleFilter('nature')}
                    >
                        Nature
                    </button>
                    <button
                        className={activeButton === 'city' ? 'active-button' : 'filter-button'}
                        onClick={() => handleFilter('city')}
                    >
                        City
                    </button>
                    <button
                        className={activeButton === 'animals' ? 'active-button' : 'filter-button'}
                        onClick={() => handleFilter('animals')}
                    >
                        Animals
                    </button>
                    <button
                        className={activeButton === 'travel' ? 'active-button' : 'filter-button'}
                        onClick={() => handleFilter('travel')}
                    >
                        Travel
                    </button>
                
            </div>

            <div className="grid">
                {displayedImages.map((image) => (
                    <div className="grid-item" key={image.id}>
                        <img className='grid-img' src={image.src} alt={image.type} />
                        <p className='author'>{image.name}</p>
                        <p className='type'>{image.type}</p>
                        <button className="download-button" onClick={() => downloadImage(image.src)}>
                            Download
                        </button>
                    </div>
                ))}
            </div>

            {displayedImages.length < (selectedType === 'all' ? imageData.length : imageData.filter((image) => image.type === selectedType).length) && (
                <button className='load-more-button' onClick={loadMoreImages}>Load More</button>
            )}
        </div>
    );
}

export default ImageFilter;





